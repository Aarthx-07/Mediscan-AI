import React, { useEffect, useState } from 'react';
import { Database, Zap, Globe, RefreshCw, BarChart2, Server, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

export default function AdminDashboard({ lang }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const [analytics, setAnalytics] = useState({
    total_cached_medicines: 0,
    db_hits: 0,
    api_fetches: 0,
    total_queries: 0,
    cache_hit_rate_pct: 0
  });

  const [cachedMedicines, setCachedMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [analyticsRes, medicinesRes] = await Promise.all([
        fetch('/api/analytics'),
        fetch('/api/medicines')
      ]);

      const analyticsJson = await analyticsRes.json();
      const medicinesJson = await medicinesRes.json();

      if (analyticsJson.success) setAnalytics(analyticsJson.data);
      if (medicinesJson.success) setCachedMedicines(medicinesJson.data);
    } catch (err) {
      console.error('Failed to fetch admin stats:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container" style={{ margin: '3rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Server size={28} style={{ color: 'var(--teal)' }} />
            SQL Cache Analytics & Database Inspector
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Real-time telemetry showing MediScan AI's SQL-First caching performance and database store.
          </p>
        </div>

        <button className="btn-secondary" onClick={fetchData} disabled={isLoading}>
          <RefreshCw size={18} className={isLoading ? 'spin' : ''} />
          Refresh Stats
        </button>
      </div>

      {/* Metrics Counter Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <Database size={28} style={{ color: 'var(--teal)', marginBottom: '0.5rem' }} />
          <div className="stat-number">{analytics.total_cached_medicines}</div>
          <div className="stat-label">Cached Medicines in SQL</div>
        </div>

        <div className="stat-card">
          <Zap size={28} style={{ color: 'var(--safe-green)', marginBottom: '0.5rem' }} />
          <div className="stat-number" style={{ color: 'var(--safe-green)' }}>{analytics.db_hits}</div>
          <div className="stat-label">Database Hits (SQL Cache)</div>
        </div>

        <div className="stat-card">
          <Globe size={28} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
          <div className="stat-number" style={{ color: 'var(--primary)' }}>{analytics.api_fetches}</div>
          <div className="stat-label">External API Fetches (Misses)</div>
        </div>

        <div className="stat-card">
          <BarChart2 size={28} style={{ color: 'var(--warning-amber)', marginBottom: '0.5rem' }} />
          <div className="stat-number" style={{ color: 'var(--warning-amber)' }}>
            {analytics.cache_hit_rate_pct}%
          </div>
          <div className="stat-label">Cache Hit Rate</div>
        </div>
      </div>

      {/* Database Inspector Table */}
      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Database size={20} style={{ color: 'var(--teal)' }} />
          Stored Medicines in SQLite Table (`medicines`)
        </h3>

        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Medicine Name</th>
                <th>Normalized Key</th>
                <th>Generic Name</th>
                <th>Category</th>
                <th>Strength</th>
                <th>Source</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {cachedMedicines.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                    No cached medicines stored in database yet. Perform a scan or search to build the SQL cache!
                  </td>
                </tr>
              ) : (
                cachedMedicines.map((row) => (
                  <tr key={row.id}>
                    <td>#{row.id}</td>
                    <td><strong>{row.medicine_name}</strong></td>
                    <td><code style={{ background: 'var(--bg-primary)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{row.normalized_key}</code></td>
                    <td>{row.generic_name || '-'}</td>
                    <td>{row.category || '-'}</td>
                    <td>{row.strength || '-'}</td>
                    <td>
                      <span style={{ fontSize: '0.8rem', color: 'var(--teal-dark)', background: 'var(--teal-light)', padding: '0.2rem 0.5rem', borderRadius: '50px', fontWeight: 600 }}>
                        {row.source || 'MediScan Index'}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {new Date(row.updated_at || Date.now()).toLocaleTimeString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
