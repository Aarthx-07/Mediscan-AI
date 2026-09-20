import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Scanner from './components/Scanner';
import SearchBox from './components/SearchBox';
import MedicineDetail from './components/MedicineDetail';
import RecentScans from './components/RecentScans';
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

  // Language State - Single source of truth with localStorage persistence
  const [lang, setLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('mediscan_lang');
      return savedLang || 'en';
    } catch (e) {
      return 'en';
    }
  });

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Persist language selection
  useEffect(() => {
    try {
      localStorage.setItem('mediscan_lang', lang);
    } catch (e) {}
  }, [lang]);

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
      />

      <main style={{ flex: 1, paddingBottom: '2.5rem' }}>
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
