import React, { useState } from 'react';
import { Search, Loader2, AlertCircle } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';
import { apiFetch } from '../utils/api';

export default function SearchBox({ onSearchComplete, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const popularSearches = ['Paracetamol', 'Cetirizine', 'Amoxicillin', 'Ibuprofen'];

  const executeSearch = async (searchQuery) => {
    const term = searchQuery || query;
    if (!term || term.trim().length === 0) return;

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const json = await apiFetch(`/api/medicine/${encodeURIComponent(term)}`);
      setIsLoading(false);

      if (json && json.success) {
        onSearchComplete(json);
      } else {
        setErrorMsg(json?.error || t.error_not_found);
      }
    } catch (err) {
      setIsLoading(false);
      setErrorMsg(t.error_network);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '760px', margin: '2rem auto' }}>
      <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.4rem', fontSize: '1.6rem' }}>{t.search_title}</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
          {t.search_subtitle}
        </p>

        {errorMsg && (
          <div style={{ background: 'var(--danger-red-bg)', color: 'var(--danger-red)', padding: '0.9rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </div>
            <button 
              className="btn-secondary" 
              onClick={() => executeSearch(query)}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
            >
              {t.btn_retry}
            </button>
          </div>
        )}

        <form onSubmit={(e) => { e.preventDefault(); executeSearch(query); }} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              className="select-input"
              style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', height: '46px', fontSize: '0.95rem', borderRadius: 'var(--radius-sm)' }}
              placeholder={t.search_placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isLoading}
            style={{ height: '46px', minWidth: '120px' }}
          >
            {isLoading ? <Loader2 size={18} className="spin" /> : <Search size={18} />}
            {t.btn_search}
          </button>
        </form>

        {/* Quick Popular Chips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-muted)' }}>{t.popular_label}</span>
          {popularSearches.map((med, idx) => (
            <button
              key={idx}
              onClick={() => { setQuery(med); executeSearch(med); }}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                padding: '0.3rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.825rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {med}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
