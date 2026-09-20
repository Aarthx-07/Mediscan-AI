import React, { useState, useRef } from 'react';
import { Upload, Camera, FileText, AlertCircle, RefreshCw } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';
import { apiFetch } from '../utils/api';

export default function Scanner({ onScanComplete, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);
  const fileInputRef = useRef(null);

  const sampleMedicines = [
    { name: 'Paracetamol 500mg', sampleName: 'Paracetamol', sampleExpiry: { status: 'valid', date_text: '08/2027' } },
    { name: 'Cetirizine 10mg', sampleName: 'Cetirizine', sampleExpiry: { status: 'valid', date_text: '12/2026' } },
    { name: 'Amoxicillin 500mg', sampleName: 'Amoxicillin', sampleExpiry: { status: 'expired', date_text: '05/2025' } },
    { name: 'Ibuprofen 400mg', sampleName: 'Ibuprofen', sampleExpiry: { status: 'valid', date_text: '10/2028' } }
  ];

  const handleFileSelect = (file) => {
    if (!file) return;
    if (!file.type.match(/^image\/(jpeg|jpg|png|webp|bmp)$/i)) {
      setErrorMsg(t.error_image_invalid);
      return;
    }
    setErrorMsg(null);
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const triggerUpload = async (fileObj, sampleObj = null) => {
    setIsAnalyzing(true);
    setAnalysisStep(1);
    setErrorMsg(null);

    const formData = new FormData();
    if (fileObj) {
      formData.append('image', fileObj);
    }

    try {
      setAnalysisStep(1);
      
      setTimeout(async () => {
        setAnalysisStep(2);
        try {
          let json;
          if (fileObj) {
            json = await apiFetch('/api/scan', {
              method: 'POST',
              body: formData
            });
          } else {
            json = await apiFetch('/api/scan', {
              method: 'POST',
              body: JSON.stringify({
                sampleName: sampleObj.sampleName,
                sampleExpiry: sampleObj.sampleExpiry,
                sampleText: `${sampleObj.sampleName} EXP ${sampleObj.sampleExpiry.date_text}`
              })
            });
          }

          setIsAnalyzing(false);

          if (json && json.success) {
            onScanComplete(json);
          } else {
            setErrorMsg(json?.error || t.error_not_found);
          }
        } catch (err) {
          setIsAnalyzing(false);
          setErrorMsg(t.error_network);
        }
      }, 700);
    } catch (err) {
      setIsAnalyzing(false);
      setErrorMsg(t.error_network);
    }
  };

  return (
    <div className="container">
      <div className="scanner-card">
        <h2 style={{ textAlign: 'center', marginBottom: '0.4rem', fontSize: '1.6rem' }}>{t.scan_title}</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
          {t.scan_subtitle}
        </p>

        {errorMsg && (
          <div style={{ background: 'var(--danger-red-bg)', color: 'var(--danger-red)', padding: '0.9rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </div>
            <button 
              className="btn-secondary" 
              onClick={() => { setErrorMsg(null); if (selectedFile) triggerUpload(selectedFile); }}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
            >
              {t.btn_retry}
            </button>
          </div>
        )}

        {!isAnalyzing ? (
          <div>
            <div 
              className="dropzone"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }}
                accept="image/*"
                capture="environment"
                onChange={(e) => handleFileSelect(e.target.files[0])}
              />
              
              {previewUrl ? (
                <div>
                  <img 
                    src={previewUrl} 
                    alt={t.selected_image} 
                    style={{ maxHeight: '200px', borderRadius: 'var(--radius-sm)', marginBottom: '0.85rem', objectFit: 'contain' }} 
                  />
                  <p style={{ fontWeight: 600, color: 'var(--teal-dark)' }}>{selectedFile?.name || t.selected_image}</p>
                </div>
              ) : (
                <div>
                  <Upload size={40} className="dropzone-icon" />
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.3rem' }}>{t.scan_drop}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t.scan_or}</p>
                  <span style={{ display: 'inline-block', marginTop: '0.85rem', padding: '0.3rem 0.85rem', background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '50px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {t.scan_supports}
                  </span>
                </div>
              )}
            </div>

            {previewUrl && (
              <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', marginTop: '1.25rem' }}>
                <button 
                  className="btn-primary"
                  onClick={() => triggerUpload(selectedFile)}
                >
                  <Camera size={16} />
                  {t.btn_analyze}
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                >
                  <RefreshCw size={16} />
                  {t.btn_change_image}
                </button>
              </div>
            )}

            {/* Demonstration Samples */}
            <div className="sample-selector-box">
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                {t.scan_sample_title}
              </p>
              <div className="sample-buttons">
                {sampleMedicines.map((sample, idx) => (
                  <button 
                    key={idx}
                    className="sample-btn"
                    onClick={() => triggerUpload(null, sample)}
                  >
                    <FileText size={14} style={{ color: 'var(--teal)' }} />
                    <span>{sample.name}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.85, color: sample.sampleExpiry.status === 'expired' ? 'var(--danger-red)' : 'var(--teal-dark)' }}>
                      ({sample.sampleExpiry.status === 'expired' ? `${t.status_expired} ${sample.sampleExpiry.date_text}` : `${t.status_valid} ${sample.sampleExpiry.date_text}`})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Processing Loading View */
          <div className="processing-box">
            <div className="simple-spinner"></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{t.loading_analyzing}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {analysisStep === 1 ? t.loading_step_ocr : t.loading_step_verify}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
