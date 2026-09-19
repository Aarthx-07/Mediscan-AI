import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Scanner from './components/Scanner';
import SearchBox from './components/SearchBox';
import MedicineDetail from './components/MedicineDetail';
import RecentScans from './components/RecentScans';
import AdminDashboard from './components/AdminDashboard';
import SafetyDisclaimerModal from './components/SafetyDisclaimerModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [scannedResult, setScannedResult] = useState(null);
  const [recentScans, setRecentScans] = useState(() => {
    try {
      const saved = localStorage.getItem('mediscan_recent_scans');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Settings State
  const [lang, setLang] = useState('en');
  const [fontSize, setFontSize] = useState('md');
  const [highContrast, setHighContrast] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Apply Font Scaling & Theme Classes to Body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    const fontMap = { sm: '14px', md: '16px', lg: '18px' };
    document.documentElement.style.fontSize = fontMap[fontSize] || '16px';
  }, [theme, highContrast, fontSize]);

  // Handle Scan or Search Completion
  const handleResultReceived = (resultObj) => {
    setScannedResult(resultObj);
    setCurrentTab('detail');

    // Append to Recent Scans History in LocalStorage
    const newRecent = [
      resultObj,
      ...recentScans.filter(s => s.data?.normalized_key !== resultObj.data?.normalized_key)
    ].slice(0, 15);

    setRecentScans(newRecent);
    try {
      localStorage.setItem('mediscan_recent_scans', JSON.stringify(newRecent));
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  const handleClearHistory = () => {
    setRecentScans([]);
    try {
      localStorage.removeItem('mediscan_recent_scans');
    } catch (e) {}
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar 
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          if (tab !== 'detail') setScannedResult(null);
          setCurrentTab(tab);
        }}
        lang={lang}
        setLang={setLang}
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        theme={theme}
        setTheme={setTheme}
      />

      <main style={{ flex: 1, paddingBottom: '3rem' }}>
        {currentTab === 'home' && (
          <>
            <Hero setCurrentTab={setCurrentTab} lang={lang} />
            <Scanner onScanComplete={handleResultReceived} lang={lang} />
          </>
        )}

        {currentTab === 'scan' && (
          <Scanner onScanComplete={handleResultReceived} lang={lang} />
        )}

        {currentTab === 'search' && (
          <SearchBox onSearchComplete={handleResultReceived} lang={lang} />
        )}

        {currentTab === 'detail' && scannedResult && (
          <MedicineDetail 
            data={scannedResult.data}
            source_type={scannedResult.source_type}
            message={scannedResult.message}
            onBack={() => setCurrentTab('scan')}
            lang={lang}
          />
        )}

        {currentTab === 'recent' && (
          <RecentScans 
            recentScans={recentScans}
            onSelectScan={(item) => {
              setScannedResult(item);
              setCurrentTab('detail');
            }}
            onClearHistory={handleClearHistory}
            lang={lang}
          />
        )}

        {currentTab === 'admin' && (
          <AdminDashboard lang={lang} />
        )}
      </main>

      <Footer lang={lang} />

      <SafetyDisclaimerModal 
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        lang={lang}
      />
    </div>
  );
}
