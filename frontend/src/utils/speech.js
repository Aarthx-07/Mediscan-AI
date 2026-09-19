/**
 * Speech synthesis utility for MediScan AI Voice Assistance
 */

export function speakText(text, onEndCallback = null) {
  if (!('speechSynthesis' in window)) {
    alert('Voice assistance is not supported in your browser.');
    return false;
  }

  // Stop any ongoing speech first
  window.speechSynthesis.cancel();

  if (!text || text.trim().length === 0) return false;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;  // Slightly relaxed speed for elderly clarity
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  if (onEndCallback) {
    utterance.onend = onEndCallback;
    utterance.onerror = onEndCallback;
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function isSpeaking() {
  return 'speechSynthesis' in window && window.speechSynthesis.speaking;
}
