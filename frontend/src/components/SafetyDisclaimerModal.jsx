import React from 'react';
import { ShieldAlert, CheckCircle, X } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function SafetyDisclaimerModal({ isOpen, onClose, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.25rem'
    }}>
      <div style={{
        background: '#ffffff',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '540px',
        width: '100%',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', right: '1rem', top: '1rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem', color: 'var(--teal)' }}>
          <ShieldAlert size={24} />
          <h2 style={{ fontSize: '1.3rem' }}>{t.disclaimer_title}</h2>
        </div>

        <p style={{ color: 'var(--text-main)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.1rem' }}>
          {t.disclaimer_body}
        </p>

        <div style={{ background: 'var(--bg-primary)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <li>{t.disclaimer_modal_rule1}</li>
            <li>{t.disclaimer_modal_rule2}</li>
            <li>{t.disclaimer_modal_rule3}</li>
          </ul>
        </div>

        <button 
          className="btn-primary" 
          onClick={onClose} 
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <CheckCircle size={16} />
          {t.btn_agree}
        </button>
      </div>
    </div>
  );
}
