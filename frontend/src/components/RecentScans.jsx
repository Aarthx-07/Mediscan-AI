import React from 'react';
import { History, Database, Globe, ArrowRight, Trash2 } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function RecentScans({ recentScans, onSelectScan, onClearHistory, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div className="container" style={{ maxWidth: '850px', margin: '3rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <History size={24} style={{ color: 'var(--teal)' }} />
          {t.nav_recent}
        </h2>
        {recentScans.length > 0 && (
          <button 
            className="btn-secondary" 
            onClick={onClearHistory}
            style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
          >
            <Trash2 size={16} />
            Clear History
          </button>
        )}
      </div>

      {recentScans.length === 0 ? (
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-muted)' }}>
          <History size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
          <p style={{ fontSize: '1.1rem' }}>No recent medicine scans found.</p>
          <p style={{ fontSize: '0.9rem' }}>Scan or search for a medicine to view your search history here.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {recentScans.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onSelectScan(item)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {item.data?.medicine_name || 'Unknown Medicine'}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {item.data?.generic_name || 'Generic Compound'} • Strength: {item.data?.strength || 'Standard'}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className={`cache-tag ${item.source_type === 'SQL Cache' ? 'sql' : 'api'}`}>
                  {item.source_type === 'SQL Cache' ? <Database size={14} /> : <Globe size={14} />}
                  <span>{item.source_type}</span>
                </div>
                <ArrowRight size={18} style={{ color: 'var(--text-muted)' }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
