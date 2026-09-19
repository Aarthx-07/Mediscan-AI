import React, { useState } from 'react';
import { Search, Database, Globe, Loader2 } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function SearchBox({ onSearchComplete, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchStatus, setSearchStatus] = useState(null); // 'checking', 'found_sql', 'fetching_api'

  const popularSearches = ['Paracetamol', 'Cetirizine', 'Amoxicillin', 'Ibuprofen', 'Dolo 650', 'Metformin', 'Aspirin'];

  const executeSearch = async (searchQuery) => {
    const term = searchQuery || query;
    if (!term || term.trim().length === 0) return;

    setIsLoading(true);
    setSearchStatus('checking');

    try {
      const res = await fetch(`/api/medicine/${encodeURIComponent(term)}`);
      const json = await res.json();
      setIsLoading(false);

      if (json.success) {
        onSearchComplete(json);
      } else {
        alert(json.error || 'Medicine not found.');
      }
    } catch (err) {
      setIsLoading(false);
      alert('Network error while searching for medicine.');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '3rem auto' }}>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.8rem' }}>{t.btn_search}</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Search for verified medicine information across our SQL database cache and medical registries.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); executeSearch(query); }} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              className="select-input"
              style={{ width: '100%', paddingLeft: '2.75rem', paddingRight: '1rem', height: '52px', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}
              placeholder={t.search_placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isLoading}
            style={{ height: '52px', minWidth: '130px' }}
          >
            {isLoading ? <Loader2 size={20} className="spin" /> : <Search size={20} />}
            {t.btn_search}
          </button>
        </form>

        {/* Quick Popular Chips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Popular:</span>
          {popularSearches.map((med, idx) => (
            <button
              key={idx}
              onClick={() => { setQuery(med); executeSearch(med); }}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                padding: '0.35rem 0.8rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
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
