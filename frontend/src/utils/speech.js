/**
 * Speech synthesis utility for MediScan AI Voice Assistance
 * Handles multi-language BCP-47 speech synthesis, async voice loading,
 * strict language matching, and graceful unsupported voice fallback.
 */

let cachedVoices = [];

function loadVoices() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    cachedVoices = window.speechSynthesis.getVoices() || [];
  }
  return cachedVoices;
}

// Bind async onvoiceschanged event
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
}

/**
 * Maps application language code to expected BCP-47 language prefixes & preferred locales
 */
const LANGUAGE_LOCALE_MAP = {
  en: { preferred: ['en-IN', 'en-US', 'en-GB'], prefix: 'en' },
  ta: { preferred: ['ta-IN', 'ta-LK'], prefix: 'ta' },
  hi: { preferred: ['hi-IN'], prefix: 'hi' },
  te: { preferred: ['te-IN'], prefix: 'te' },
  ml: { preferred: ['ml-IN'], prefix: 'ml' },
  kn: { preferred: ['kn-IN', 'kn-KW'], prefix: 'kn' }
};

/**
 * Finds a matching speech synthesis voice for the target language.
 * Never matches an English voice for non-English languages!
 */
export function getAvailableVoice(langCode = 'en') {
  const voices = loadVoices();
  const config = LANGUAGE_LOCALE_MAP[langCode] || LANGUAGE_LOCALE_MAP.en;

  if (!voices || voices.length === 0) return null;

  // 1. Try exact preferred locale match (e.g., 'ta-IN')
  for (const locale of config.preferred) {
    const matched = voices.find(v => v.lang && v.lang.replace('_', '-').toLowerCase() === locale.toLowerCase());
    if (matched) return matched;
  }

  // 2. Try base language prefix match (e.g., 'ta' for 'ta-IN', 'ta-LK', etc.)
  const prefixMatched = voices.find(v => {
    if (!v.lang) return false;
    const cleanLang = v.lang.replace('_', '-').toLowerCase();
    return cleanLang.startsWith(config.prefix.toLowerCase());
  });

  if (prefixMatched) return prefixMatched;

  // If no matching voice for this specific language is installed on device/browser, return null.
  return null;
}

/**
 * Checks whether voice playback is supported for a given language code
 */
export function isVoiceAvailableForLang(langCode = 'en') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }
  const voice = getAvailableVoice(langCode);
  return voice !== null;
}

/**
 * Speaks the provided text using the specified language.
 * Returns object indicating success state.
 */
export function speakText(text, langCode = 'en', onEndCallback = null, onErrorCallback = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onErrorCallback) onErrorCallback('not_supported');
    return { success: false, reason: 'not_supported' };
  }

  // Stop any ongoing speech first
  stopSpeech();

  if (!text || text.trim().length === 0) {
    return { success: false, reason: 'empty_text' };
  }

  const selectedVoice = getAvailableVoice(langCode);

  // Strict check: For non-English languages, if no matching voice exists, DO NOT fall back to English!
  if (!selectedVoice && langCode !== 'en') {
    if (onErrorCallback) onErrorCallback('voice_unavailable');
    return { success: false, reason: 'voice_unavailable' };
  }

  const utterance = new SpeechSynthesisUtterance(text);
  
  if (selectedVoice) {
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;
  } else {
    // Fallback for English if no specific voice returned
    utterance.lang = 'en-US';
  }

  utterance.rate = 0.9;  // Slightly relaxed speed for medical clarity
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  utterance.onend = () => {
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = (err) => {
    console.warn('Speech synthesis utterance error:', err);
    if (onEndCallback) onEndCallback();
    if (onErrorCallback) onErrorCallback('synthesis_error');
  };

  window.speechSynthesis.speak(utterance);
  return { success: true, voiceUsed: utterance.voice ? utterance.voice.name : 'Default' };
}

export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function isSpeaking() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking;
}
