import React from 'react';
import { ShieldAlert, Heart, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function Footer({ lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <footer style={{ marginTop: 'auto' }}>
      <div className="disclaimer-banner">
        <div className="container" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <ShieldAlert size={20} style={{ color: 'var(--warning-amber)', shrink: 0 }} />
          <div>
            <strong style={{ color: 'var(--text-main)' }}>{t.disclaimer_title}: </strong>
            <span>{t.disclaimer_body}</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <strong>MediScan AI</strong> &copy; 2026 – Intelligent Medicine Information & Safety Assistant.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span><CheckCircle2 size={14} style={{ color: 'var(--safe-green)', display: 'inline', marginRight: '4px' }} /> SQL-First Caching</span>
            <span><CheckCircle2 size={14} style={{ color: 'var(--teal)', display: 'inline', marginRight: '4px' }} /> Verified Medical Data</span>
            <span><CheckCircle2 size={14} style={{ color: 'var(--primary)', display: 'inline', marginRight: '4px' }} /> Voice Accessible</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
