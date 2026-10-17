import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function VoiceControls({ text, isSpeaking, onToggleSpeaking, isSupported = true }) {
  const [synthSupported, setSynthSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSynthSupported(true);
    }
  }, []);

  if (!synthSupported) return null;

  return (
    <button
      onClick={onToggleSpeaking}
      type="button"
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
        isSpeaking
          ? 'bg-portfolio-rose/15 text-portfolio-midnight dark:text-portfolio-ivory border-portfolio-rose shadow-sm animate-pulse'
          : 'bg-theme-surface hover:bg-theme-surfaceHover text-theme-muted hover:text-theme-text border-theme-border'
      }`}
      title={isSpeaking ? 'Mute voice narration' : 'Play voice introduction'}
      aria-label={isSpeaking ? 'Mute voice narration' : 'Play voice introduction'}
    >
      {isSpeaking ? (
        <>
          <Volume2 className="w-4 h-4 text-portfolio-rose animate-bounce" />
          <span>Speaking...</span>
          <span className="flex items-center gap-0.5 ml-1">
            <span className="w-1 h-3 bg-portfolio-rose rounded-full animate-pulse" />
            <span className="w-1 h-2 bg-portfolio-rose rounded-full animate-pulse delay-75" />
            <span className="w-1 h-4 bg-portfolio-rose rounded-full animate-pulse delay-150" />
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-theme-muted" />
          <span>Voice Narration</span>
        </>
      )}
    </button>
  );
}
