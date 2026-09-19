import React from 'react';
import { LANGUAGES, TRANSLATIONS } from '../i18n/translations';
import { Activity, Globe, Eye, Sun, Moon, Sparkles } from 'lucide-react';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  lang, 
  setLang, 
  fontSize, 
  setFontSize, 
  highContrast, 
  setHighContrast,
  theme,
  setTheme
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#home" onClick={() => setCurrentTab('home')} className="logo">
          <div className="logo-icon">
            <Activity size={24} />
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
            <li>
              <button 
                className={`nav-item ${currentTab === 'admin' ? 'active' : ''}`}
                onClick={() => setCurrentTab('admin')}
              >
                <Sparkles size={16} />
                {t.nav_admin}
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-controls">
          {/* Language Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Globe size={18} style={{ color: 'var(--teal)' }} />
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

          {/* Font Size Scaling Controls */}
          <div className="font-size-btn-group" title="Adjust text size for readability">
            <button 
              className={`font-btn ${fontSize === 'sm' ? 'active' : ''}`}
              onClick={() => setFontSize('sm')}
            >
              A-
            </button>
            <button 
              className={`font-btn ${fontSize === 'md' ? 'active' : ''}`}
              onClick={() => setFontSize('md')}
            >
              A
            </button>
            <button 
              className={`font-btn ${fontSize === 'lg' ? 'active' : ''}`}
              onClick={() => setFontSize('lg')}
            >
              A+
            </button>
          </div>

          {/* High Contrast Toggle for Accessibility */}
          <button 
            className="icon-btn" 
            onClick={() => setHighContrast(!highContrast)}
            title="Toggle High Contrast Mode for Accessibility"
          >
            <Eye size={18} />
          </button>

          {/* Dark / Light Theme Toggle */}
          <button 
            className="icon-btn" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
