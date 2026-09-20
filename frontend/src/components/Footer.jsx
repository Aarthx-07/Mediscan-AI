import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function Footer({ lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <footer style={{ marginTop: 'auto' }}>
      <div className="disclaimer-banner">
        <div className="container" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
          <ShieldAlert size={18} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>{t.disclaimer_title}: </strong>
            <span>{t.disclaimer_body}</span>
          </div>
        </div>
      </div>

      <div style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <strong>MediScan AI</strong> &copy; 2026 – Intelligent Medicine Information & Safety Assistant.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            <span><CheckCircle2 size={14} style={{ color: 'var(--safe-green)', display: 'inline', marginRight: '4px' }} /> Verified Medical References</span>
            <span><CheckCircle2 size={14} style={{ color: 'var(--teal)', display: 'inline', marginRight: '4px' }} /> Accessible Voice Assistance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
