import React from 'react';
import { Camera, Search, Shield, Database, Languages, Volume2, Sparkles, CheckCircle } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function Hero({ setCurrentTab, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const features = [
    { icon: '📷', title: t.feat_scan, desc: 'Scan packaging, strips, boxes or bottles instantly.' },
    { icon: '🔍', title: t.feat_ocr, desc: 'Extract name, strength & expiry date via OCR.' },
    { icon: '🗄️', title: t.feat_cache, desc: 'SQL database caching eliminates redundant API calls.' },
    { icon: '⚠️', title: t.feat_safety, desc: 'Clear expiry warnings & precaution alerts.' },
    { icon: '🌐', title: t.feat_lang, desc: 'Supports English, Tamil, Hindi, Telugu, Malayalam, Kannada.' },
    { icon: '🔊', title: t.feat_voice, desc: 'Read aloud audio synthesis for elderly accessibility.' }
  ];

  return (
    <section className="hero-section container">
      <div className="hero-badge">
        <Sparkles size={16} />
        <span>Intelligent SQL-First Medical Information Assistant</span>
      </div>

      <h1 className="hero-title">{t.hero_title}</h1>
      <p className="hero-subtitle">{t.hero_subtitle}</p>

      <div className="hero-actions">
        <button className="btn-primary" onClick={() => setCurrentTab('scan')}>
          <Camera size={20} />
          {t.btn_scan}
        </button>
        <button className="btn-secondary" onClick={() => setCurrentTab('search')}>
          <Search size={20} />
          {t.btn_search}
        </button>
      </div>

      <div className="features-grid">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
