import React from 'react';
import { History, ArrowRight, Trash2 } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function RecentScans({ recentScans, onSelectScan, onClearHistory, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <History size={22} style={{ color: 'var(--teal)' }} />
          {t.recent_title}
        </h2>
        {recentScans.length > 0 && (
          <button 
            className="btn-secondary" 
            onClick={onClearHistory}
            style={{ fontSize: '0.825rem', padding: '0.35rem 0.85rem' }}
          >
            <Trash2 size={15} />
            {t.btn_clear_history}
          </button>
        )}
      </div>

      {recentScans.length === 0 ? (
        <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-muted)' }}>
          <History size={40} style={{ marginBottom: '0.75rem', opacity: 0.4 }} />
          <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.3rem' }}>{t.recent_empty_title}</p>
          <p style={{ fontSize: '0.875rem' }}>{t.recent_empty_desc}</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {recentScans.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onSelectScan(item)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--teal)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.15rem' }}>
                  {item.data?.medicine_name || 'Unknown Medicine'}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {item.data?.generic_name ? `${t.label_generic}: ${item.data.generic_name}` : ''}
                  {item.data?.strength ? ` • ${t.label_strength}: ${item.data.strength}` : ''}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowRight size={18} style={{ color: 'var(--text-muted)' }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
