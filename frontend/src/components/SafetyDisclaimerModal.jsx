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
      background: 'rgba(9, 13, 22, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '560px',
        width: '100%',
        padding: '2rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', right: '1.25rem', top: '1.25rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--teal)' }}>
          <ShieldAlert size={28} />
          <h2 style={{ fontSize: '1.4rem' }}>{t.disclaimer_title}</h2>
        </div>

        <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          {t.disclaimer_body}
        </p>

        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Important Safety Rules:</strong></p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <li>MediScan AI does NOT prescribe medications or diagnose diseases.</li>
            <li>Always follow your prescribing doctor's or pharmacist's direct instructions.</li>
            <li>Emergency medical symptoms must be directed to emergency healthcare services immediately.</li>
          </ul>
        </div>

        <button 
          className="btn-primary" 
          onClick={onClose} 
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <CheckCircle size={18} />
          I Understand & Agree
        </button>
      </div>
    </div>
  );
}
