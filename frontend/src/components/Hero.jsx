import React from 'react';
import { Camera, Search } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function Hero({ setCurrentTab, lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const features = [
    { icon: '📷', title: t.feat_scan, desc: t.feat_scan_desc },
    { icon: '🔍', title: t.feat_ocr, desc: t.feat_ocr_desc },
    { icon: '⚠️', title: t.feat_safety, desc: t.feat_safety_desc },
    { icon: '🌐', title: t.feat_lang, desc: t.feat_lang_desc },
    { icon: '🔊', title: t.feat_voice, desc: t.feat_voice_desc }
  ];

  return (
    <section className="hero-section container">
      <h1 className="hero-title">{t.hero_title}</h1>
      <p className="hero-subtitle">{t.hero_subtitle}</p>

      <div className="hero-actions">
        <button className="btn-primary" onClick={() => setCurrentTab('scan')}>
          <Camera size={18} />
          {t.btn_scan}
        </button>
        <button className="btn-secondary" onClick={() => setCurrentTab('search')}>
          <Search size={18} />
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
