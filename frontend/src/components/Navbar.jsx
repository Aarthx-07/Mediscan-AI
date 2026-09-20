import React from 'react';
import { LANGUAGES, TRANSLATIONS } from '../i18n/translations';
import { Activity, Globe } from 'lucide-react';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  lang, 
  setLang
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); setCurrentTab('home'); }} 
          className="logo"
        >
          <div className="logo-icon">
            <Activity size={20} />
          </div>
          <span>MediScan <span style={{ color: 'var(--teal)' }}>AI</span></span>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-item ${currentTab === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentTab('home')}
              >
                {t.nav_home}
              </button>
            </li>
            <li>
              <button 
                className={`nav-item ${currentTab === 'scan' ? 'active' : ''}`}
                onClick={() => setCurrentTab('scan')}
              >
                {t.nav_scan}
              </button>
            </li>
            <li>
              <button 
                className={`nav-item ${currentTab === 'search' ? 'active' : ''}`}
                onClick={() => setCurrentTab('search')}
              >
                {t.nav_search}
              </button>
            </li>
            <li>
              <button 
                className={`nav-item ${currentTab === 'recent' ? 'active' : ''}`}
                onClick={() => setCurrentTab('recent')}
              >
                {t.nav_recent}
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-controls">
          {/* Language Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Globe size={16} style={{ color: 'var(--teal)' }} />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)} 
              className="select-input"
              aria-label="Select Language"
            >
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>
                  {l.native} ({l.label})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
