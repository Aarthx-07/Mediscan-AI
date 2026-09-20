/**
 * API utility for MediScan AI
 * Configured with environment variable VITE_API_URL for production deployment
 */

const API_BASE = (import.meta.env && import.meta.env.VITE_API_URL) 
  ? import.meta.env.VITE_API_URL.replace(/\/$/, '')
  : '';

export async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
  
  const defaultHeaders = options.body && !(options.body instanceof FormData)
    ? { 'Content-Type': 'application/json' }
    : {};

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {})
    }
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      let errJson = null;
      try { errJson = await response.json(); } catch (e) {}
      throw new Error(errJson?.error || `HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`API Fetch Error [${endpoint}]:`, error);
    throw error;
  }
}
