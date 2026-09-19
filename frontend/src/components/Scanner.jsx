import React, { useState, useRef } from 'react';
import { Upload, Camera, FileText, CheckCircle2, AlertCircle, RefreshCw, Layers } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function Scanner({ onScanComplete, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(1); // 1: OCR, 2: SQL Check, 3: Done
  const [errorMsg, setErrorMsg] = useState(null);
  const fileInputRef = useRef(null);

  const sampleMedicines = [
    { name: 'Paracetamol 500mg', sampleName: 'Paracetamol', sampleExpiry: { status: 'valid', date_text: '08/2027' }, badge: 'Valid Expiry 08/2027' },
    { name: 'Cetirizine 10mg', sampleName: 'Cetirizine', sampleExpiry: { status: 'valid', date_text: '12/2026' }, badge: 'Valid Expiry 12/2026' },
    { name: 'Amoxicillin 500mg', sampleName: 'Amoxicillin', sampleExpiry: { status: 'expired', date_text: '05/2025', warning: 'This medicine appears to be expired. Do not use it without consulting a qualified healthcare professional.' }, badge: '⚠️ Expired 05/2025' },
    { name: 'Dolo 650mg', sampleName: 'Dolo 650', sampleExpiry: { status: 'valid', date_text: '04/2027' }, badge: 'Valid Expiry 04/2027' },
    { name: 'Ibuprofen 400mg', sampleName: 'Ibuprofen', sampleExpiry: { status: 'valid', date_text: '10/2028' }, badge: 'Valid Expiry 10/2028' }
  ];

  const handleFileSelect = (file) => {
    if (!file) return;
    if (!file.type.match(/^image\/(jpeg|jpg|png|webp|bmp)$/i)) {
      setErrorMsg('Please upload a valid image file (JPG, PNG, WEBP).');
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
    setAnalysisStep(1); // OCR Extraction
    setErrorMsg(null);

    const formData = new FormData();
    if (fileObj) {
      formData.append('image', fileObj);
    } else if (sampleObj) {
      formData.append('sampleName', sampleObj.sampleName);
      formData.append('sampleText', `${sampleObj.sampleName} EXP ${sampleObj.sampleExpiry.date_text}`);
    }

    // Step 1: Simulate OCR Extraction delay
    setTimeout(async () => {
      setAnalysisStep(2); // SQL Cache Lookup

      setTimeout(async () => {
        try {
          const res = await fetch('/api/scan', {
            method: 'POST',
            body: fileObj ? formData : JSON.stringify({
              sampleName: sampleObj.sampleName,
              sampleExpiry: sampleObj.sampleExpiry,
              sampleText: `${sampleObj.sampleName} EXP ${sampleObj.sampleExpiry.date_text}`
            }),
            headers: fileObj ? {} : { 'Content-Type': 'application/json' }
          });

          const json = await res.json();
          setIsAnalyzing(false);

          if (json.success) {
            onScanComplete(json);
          } else {
            setErrorMsg(json.error || 'Failed to identify medicine image.');
          }
        } catch (err) {
          setIsAnalyzing(false);
          setErrorMsg('Network error. Could not connect to backend server.');
        }
      }, 700);
    }, 800);
  };

  return (
    <div className="container">
      <div className="scanner-card">
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.8rem' }}>{t.scan_title}</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Upload a photo of your medicine strip, box, bottle, or barcode to extract information and verify safety.
        </p>

        {errorMsg && (
          <div style={{ background: 'var(--danger-red-bg)', color: 'var(--danger-red)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={20} />
            <span>{errorMsg}</span>
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
                    alt="Uploaded Medicine Preview" 
                    style={{ maxHeight: '220px', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', objectFit: 'contain' }} 
                  />
                  <p style={{ fontWeight: 600, color: 'var(--teal-dark)' }}>{selectedFile?.name || 'Selected Medicine Image'}</p>
                </div>
              ) : (
                <div>
                  <Upload size={48} className="dropzone-icon" />
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>{t.scan_drop}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.scan_or}</p>
                  <span style={{ display: 'inline-block', marginTop: '1rem', padding: '0.4rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600 }}>
                    Supports JPG, PNG, WEBP (Up to 10MB)
                  </span>
                </div>
              )}
            </div>

            {previewUrl && (
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button 
                  className="btn-primary"
                  onClick={() => triggerUpload(selectedFile)}
                >
                  <Camera size={18} />
                  Analyze Uploaded Image
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                >
                  <RefreshCw size={18} />
                  Change Image
                </button>
              </div>
            )}

            {/* Instant Demonstration Samples */}
            <div className="sample-selector-box">
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                {t.scan_sample_title}
              </p>
              <div className="sample-buttons">
                {sampleMedicines.map((sample, idx) => (
                  <button 
                    key={idx}
                    className="sample-btn"
                    onClick={() => triggerUpload(null, sample)}
                  >
                    <FileText size={16} style={{ color: 'var(--teal)' }} />
                    <span>{sample.name}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.8, color: sample.sampleExpiry.status === 'expired' ? 'var(--danger-red)' : 'var(--teal-dark)' }}>
                      ({sample.badge})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Processing Loader View */
          <div className="processing-box">
            <div className="radar-spinner"></div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{t.analyzing}</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              {analysisStep === 1 ? t.identifying : t.checking_cache}
            </p>

            <div className="step-tracker">
              <div className={`step-item ${analysisStep >= 1 ? 'active' : ''}`}>
                <CheckCircle2 size={18} /> 1. OCR Extraction
              </div>
              <div className={`step-item ${analysisStep >= 2 ? 'active' : ''}`}>
                <Layers size={18} /> 2. SQL Cache Lookup
              </div>
              <div className="step-item">
                <FileText size={18} /> 3. Verification
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
