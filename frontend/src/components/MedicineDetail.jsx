import React, { useState, useEffect } from 'react';
import { 
  Volume2, VolumeX, ShieldAlert, AlertTriangle, Info, Pill, Box, ArrowLeft, Clock, Utensils, AlertCircle 
} from 'lucide-react';
import { TRANSLATIONS, getLocalizedDynamicText } from '../i18n/translations';
import { speakText, stopSpeech, isSpeaking, isVoiceAvailableForLang } from '../utils/speech';

export default function MedicineDetail({ data, source_type, message, onBack, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [voiceToast, setVoiceToast] = useState(null);

  const med = data || {};
  const expiry = med.detected_expiry || (med.expiry_information ? (typeof med.expiry_information === 'string' ? JSON.parse(med.expiry_information) : med.expiry_information) : null);

  // Stop current speech whenever language changes or component unmounts
  useEffect(() => {
    stopSpeech();
    setIsPlayingAudio(false);
    setVoiceToast(null);
  }, [lang]);

  // Handle Voice Assistance Readout in selected language
  const handleVoiceReadout = () => {
    setVoiceToast(null);

    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      // Build readout script using localized strings for selected language
      const localizedName = med.medicine_name || '';
      const localizedGeneric = med.generic_name ? getLocalizedDynamicText(med.generic_name, lang) : '';
      const localizedCategory = med.category ? getLocalizedDynamicText(med.category, lang) : '';
      const localizedUses = med.uses ? getLocalizedDynamicText(med.uses, lang) : '';
      const localizedDosage = med.dosage_information ? getLocalizedDynamicText(med.dosage_information, lang) : '';
      const localizedFood = med.food_instructions ? getLocalizedDynamicText(med.food_instructions, lang) : '';
      const localizedTiming = med.timing_information ? getLocalizedDynamicText(med.timing_information, lang) : '';
      const localizedSideEffects = med.side_effects ? getLocalizedDynamicText(med.side_effects, lang) : '';
      const localizedPrecautions = med.precautions ? getLocalizedDynamicText(med.precautions, lang) : '';
      const localizedStorage = med.storage_information ? getLocalizedDynamicText(med.storage_information, lang) : '';

      let script = `${t.label_generic}: ${localizedName}`;
      if (localizedGeneric && localizedGeneric !== localizedName) script += ` (${localizedGeneric})`;
      script += `. `;
      if (localizedCategory) script += `${t.label_category}: ${localizedCategory}. `;
      if (localizedUses) script += `${t.uses}: ${localizedUses}. `;
      if (localizedDosage) script += `${t.dosage}: ${localizedDosage}. `;
      if (localizedFood) script += `${t.food}: ${localizedFood}. `;
      if (localizedTiming) script += `${t.timing}: ${localizedTiming}. `;
      if (localizedSideEffects) script += `${t.side_effects}: ${localizedSideEffects}. `;
      if (localizedPrecautions) script += `${t.precautions}: ${localizedPrecautions}. `;
      if (localizedStorage) script += `${t.storage}: ${localizedStorage}. `;
      
      if (expiry && expiry.status === 'expired') {
        script += `${t.expiry_expired_warning}`;
      } else if (expiry && expiry.date_text) {
        script += `${t.expiry_date_label}: ${expiry.date_text}.`;
      }

      const result = speakText(
        script, 
        lang, 
        () => setIsPlayingAudio(false),
        (errReason) => {
          setIsPlayingAudio(false);
          if (errReason === 'voice_unavailable') {
            setVoiceToast(t.voice_unavailable_msg);
          }
        }
      );

      if (result.success) {
        setIsPlayingAudio(true);
      } else if (result.reason === 'voice_unavailable') {
        setVoiceToast(t.voice_unavailable_msg);
      }
    }
  };

  // Determine actual Expiry Status
  const hasExpiryDate = expiry && expiry.date_text;
  const expiryStatus = expiry ? expiry.status : 'not_detected';

  return (
    <div className="container" style={{ margin: '1.5rem auto 3rem' }}>
      {/* Back Button */}
      <button 
        className="btn-secondary" 
        onClick={() => { stopSpeech(); onBack(); }}
        style={{ marginBottom: '1.25rem', padding: '0.45rem 1rem', fontSize: '0.875rem' }}
      >
        <ArrowLeft size={16} />
        {t.btn_back}
      </button>

      {/* Top Header Card */}
      <div className="result-header-card">
        <div className="result-badge-bar">
          {/* Voice Assistance Control Button */}
          <button 
            className="btn-secondary"
            onClick={handleVoiceReadout}
            style={{
              background: isPlayingAudio ? 'var(--teal)' : '#ffffff',
              color: isPlayingAudio ? '#ffffff' : 'var(--text-main)',
              borderRadius: '50px',
              padding: '0.45rem 1.1rem',
              fontSize: '0.875rem'
            }}
          >
            {isPlayingAudio ? <VolumeX size={16} /> : <Volume2 size={16} style={{ color: 'var(--teal)' }} />}
            <span>{isPlayingAudio ? t.btn_stop : t.btn_listen}</span>
          </button>
        </div>

        {voiceToast && (
          <div className="toast-notice" style={{ marginBottom: '1rem', color: 'var(--danger-red)' }}>
            <AlertCircle size={16} />
            <span>{voiceToast}</span>
          </div>
        )}

        <h1 className="med-title">{med.medicine_name}</h1>
        <p className="med-subtitle">
          {med.generic_name ? `${t.label_generic}: ${getLocalizedDynamicText(med.generic_name, lang)}` : ''}
          {med.brand_name && med.brand_name !== med.medicine_name ? ` | ${t.label_brands || 'Brands'}: ${med.brand_name}` : ''}
        </p>

        <div className="med-meta-pills">
          {med.category && (
            <div className="meta-pill">
              <strong>{t.label_category}:</strong> {getLocalizedDynamicText(med.category, lang)}
            </div>
          )}
          {med.strength && (
            <div className="meta-pill">
              <strong>{t.label_strength}:</strong> {getLocalizedDynamicText(med.strength, lang)}
            </div>
          )}
          {med.prescription_status && (
            <div className="meta-pill">
              <strong>{t.label_prescription}:</strong> {getLocalizedDynamicText(med.prescription_status, lang)}
            </div>
          )}
          {med.manufacturer && (
            <div className="meta-pill">
              <strong>{t.label_manufacturer}:</strong> {getLocalizedDynamicText(med.manufacturer, lang)}
            </div>
          )}
        </div>
      </div>

      {/* Expiry Date & Safety Status Banner */}
      <div className={`expiry-alert-box ${expiryStatus}`}>
        <AlertTriangle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>
            {t.expiry_date_label}: {hasExpiryDate ? expiry.date_text : t.status_not_detected} 
            {' '}({
              expiryStatus === 'valid' ? t.status_valid :
              expiryStatus === 'expiring_soon' ? t.status_expiring_soon :
              expiryStatus === 'expired' ? t.status_expired :
              t.status_not_detected
            })
          </h4>
          <p style={{ fontSize: '0.875rem' }}>
            {expiryStatus === 'expired' ? t.expiry_expired_warning :
             expiryStatus === 'expiring_soon' ? t.expiry_expiring_soon_warning :
             expiryStatus === 'valid' ? t.expiry_valid_desc :
             t.expiry_not_detected_desc}
          </p>
        </div>
      </div>

      {/* Structured Medical Information Grid */}
      <div className="info-grid">
        {/* Uses */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Pill size={18} /></div>
            <h3 className="info-card-title">{t.uses}</h3>
          </div>
          <p className="info-card-body">
            {med.uses ? getLocalizedDynamicText(med.uses, lang) : t.error_not_found}
          </p>
        </div>

        {/* Dosage / How It Generally Works */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Clock size={18} /></div>
            <h3 className="info-card-title">{t.dosage}</h3>
          </div>
          <p className="info-card-body">
            {med.dosage_information ? getLocalizedDynamicText(med.dosage_information, lang) : t.error_not_found}
          </p>
        </div>

        {/* Food Instructions */}
        {med.food_instructions && (
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon-badge"><Utensils size={18} /></div>
              <h3 className="info-card-title">{t.food}</h3>
            </div>
            <p className="info-card-body">
              {getLocalizedDynamicText(med.food_instructions, lang)}
            </p>
          </div>
        )}

        {/* Timing Information */}
        {med.timing_information && (
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon-badge"><Clock size={18} /></div>
              <h3 className="info-card-title">{t.timing}</h3>
            </div>
            <p className="info-card-body">
              {getLocalizedDynamicText(med.timing_information, lang)}
            </p>
          </div>
        )}

        {/* Side Effects */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><AlertTriangle size={18} style={{ color: 'var(--warning-amber)' }} /></div>
            <h3 className="info-card-title">{t.side_effects}</h3>
          </div>
          <p className="info-card-body">
            {med.side_effects ? getLocalizedDynamicText(med.side_effects, lang) : t.error_not_found}
          </p>
        </div>

        {/* Precautions */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><ShieldAlert size={18} style={{ color: 'var(--danger-red)' }} /></div>
            <h3 className="info-card-title">{t.precautions}</h3>
          </div>
          <p className="info-card-body">
            {med.precautions ? getLocalizedDynamicText(med.precautions, lang) : t.error_not_found}
          </p>
        </div>

        {/* Drug Interactions */}
        {med.interactions && (
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon-badge"><Info size={18} /></div>
              <h3 className="info-card-title">{t.interactions}</h3>
            </div>
            <p className="info-card-body">
              {getLocalizedDynamicText(med.interactions, lang)}
            </p>
          </div>
        )}

        {/* Storage Information */}
        <div className="info-card">
          <div className="info-card-header">
            <div className="info-icon-badge"><Box size={18} /></div>
            <h3 className="info-card-title">{t.storage}</h3>
          </div>
          <p className="info-card-body">
            {med.storage_information ? getLocalizedDynamicText(med.storage_information, lang) : t.error_not_found}
          </p>
        </div>
      </div>

      {/* Important Professional Medical Safety Notice */}
      <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <ShieldAlert size={18} style={{ color: 'var(--teal)' }} />
          {t.safety_notice_title}
        </h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          {t.safety_notice_body}
        </p>
      </div>

      {/* Source Reference Link */}
      {med.source && (
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'right' }}>
          <span>{t.source}: {getLocalizedDynamicText(med.source, lang)}</span>
        </div>
      )}
    </div>
  );
}
