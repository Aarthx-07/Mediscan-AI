import React, { useState } from 'react';
import { 
  Volume2, VolumeX, ShieldAlert, CheckCircle2, Database, Globe, 
  Clock, Utensils, AlertTriangle, Info, Pill, Box, ShieldCheck, FileText, ArrowLeft 
} from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';
import { speakText, stopSpeech, isSpeaking } from '../utils/speech';

export default function MedicineDetail({ data, source_type, message, onBack, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const med = data || {};
  const expiry = med.detected_expiry || (med.expiry_information ? JSON.parse(med.expiry_information) : null);

  // Toggle Voice Assistance Read Aloud
  const handleVoiceReadout = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      let script = `Medicine: ${med.medicine_name || 'Unknown'}. `;
      script += `Category: ${med.category || 'General Therapeutics'}. `;
      if (med.uses) script += `Common Uses: ${med.uses}. `;
      if (med.dosage_information) script += `${med.dosage_information}. `;
      if (med.precautions) script += `Precautions: ${med.precautions}. `;
      if (expiry && expiry.status === 'expired') {
        script += `Warning! This medicine appears to be expired. Do not take it.`;
      }

      const started = speakText(script, () => setIsPlayingAudio(false));
      if (started) setIsPlayingAudio(true);
    }
  };

  return (
    <div className="container" style={{ margin: '2rem auto' }}>
      {/* Back Button */}
      <button 
        className="btn-secondary" 
        onClick={onBack}
        style={{ marginBottom: '1.5rem', padding: '0.5rem 1.25rem' }}
      >
        <ArrowLeft size={18} />
        Back to Search / Scan
      </button>

      {/* Top Header Card */}
      <div className="result-header-card">
        <div className="result-badge-bar">
          {/* SQL Cache Status Badge */}
          <div className={`cache-tag ${source_type === 'SQL Cache' ? 'sql' : 'api'}`}>
            {source_type === 'SQL Cache' ? <Database size={16} /> : <Globe size={16} />}
            <span>{message || (source_type === 'SQL Cache' ? t.sql_hit_badge : t.api_miss_badge)}</span>
          </div>

          {/* Voice Assistance Button */}
          <button 
            className="btn-secondary"
            onClick={handleVoiceReadout}
            style={{
              background: isPlayingAudio ? 'var(--teal)' : 'var(--bg-card)',
              color: isPlayingAudio ? '#ffffff' : 'var(--text-main)',
              borderRadius: '50px',
              padding: '0.4rem 1.1rem',
              fontSize: '0.9rem'
            }}
          >
            {isPlayingAudio ? <VolumeX size={18} /> : <Volume2 size={18} style={{ color: 'var(--teal)' }} />}
            <span>{isPlayingAudio ? t.stop_speech : t.read_aloud}</span>
          </button>
        </div>

        <h1 className="med-title">{med.medicine_name}</h1>
        <p className="med-subtitle">
          {med.generic_name ? `Generic: ${med.generic_name}` : ''} 
          {med.brand_name ? ` | Brands: ${med.brand_name}` : ''}
        </p>

        <div className="med-meta-pills">
          <div className="meta-pill">
            <strong>Category:</strong> {med.category || 'Therapeutic Agent'}
          </div>
          <div className="meta-pill">
            <strong>Strength:</strong> {med.strength || 'As Prescribed'}
          </div>
          <div className="meta-pill">
            <strong>Status:</strong> {med.prescription_status || 'OTC / Prescription'}
          </div>
          <div className="meta-pill">
            <strong>Manufacturer:</strong> {med.manufacturer || 'Certified Pharma'}
          </div>
        </div>
      </div>

      {/* Expiry Date Safety Alert Banner */}
      {expiry && (
        <div className={`expiry-alert-box ${expiry.status || 'unknown'}`}>
          <AlertTriangle size={24} style={{ shrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>
              {t.expiry}: {expiry.date_text ? expiry.date_text : 'Not Confident'}
            </h4>
            <p style={{ fontSize: '0.925rem' }}>
              {expiry.warning 
                ? expiry.warning 
                : expiry.status === 'valid'
                  ? `Expiry Date (${expiry.date_text}) is valid. Ensure medicine packaging integrity before use.`
                  : 'Expiry date could not be confidently detected from this image.'}
            </p>
          </div>
        </div>
      )}

      {/* Detailed Information Cards Grid */}
      <div className="info-grid">
        {/* Uses */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Pill size={20} /></div>
            <h3 className="info-card-title">{t.uses}</h3>
          </div>
          <p className="info-card-body">{med.uses || 'Information unavailable from the selected source.'}</p>
        </div>

        {/* Dosage Information */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Clock size={20} /></div>
            <h3 className="info-card-title">{t.dosage}</h3>
          </div>
          <p className="info-card-body">{med.dosage_information || 'Information unavailable from the selected source.'}</p>
        </div>

        {/* Food Instructions */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Utensils size={20} /></div>
            <h3 className="info-card-title">{t.food}</h3>
          </div>
          <p className="info-card-body">{med.food_instructions || 'Take as directed by a healthcare professional.'}</p>
        </div>

        {/* Timing Information */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Clock size={20} /></div>
            <h3 className="info-card-title">{t.timing}</h3>
          </div>
          <p className="info-card-body">{med.timing_information || 'As scheduled by your prescribing physician.'}</p>
        </div>

        {/* Side Effects */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><AlertTriangle size={20} style={{ color: 'var(--warning-amber)' }} /></div>
            <h3 className="info-card-title">{t.side_effects}</h3>
          </div>
          <p className="info-card-body">{med.side_effects || 'Information unavailable from the selected source.'}</p>
        </div>

        {/* Precautions */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><ShieldAlert size={20} style={{ color: 'var(--danger-red)' }} /></div>
            <h3 className="info-card-title">{t.precautions}</h3>
          </div>
          <p className="info-card-body">{med.precautions || 'Information unavailable from the selected source.'}</p>
        </div>

        {/* Drug Interactions */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Info size={20} /></div>
            <h3 className="info-card-title">{t.interactions}</h3>
          </div>
          <p className="info-card-body">{med.interactions || 'Information unavailable from the selected source.'}</p>
        </div>

        {/* Storage */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Box size={20} /></div>
            <h3 className="info-card-title">{t.storage}</h3>
          </div>
          <p className="info-card-body">{med.storage_information || 'Store at room temperature in a cool, dry place.'}</p>
        </div>
      </div>

      {/* Source Reference Footer Card */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <div>
          <strong>{t.source}: </strong>
          <span>{med.source || 'MediScan Verified Medical Database'}</span>
        </div>
        {med.source_url && (
          <a href={med.source_url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'var(--teal)' }}>
            View Reference Data &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
