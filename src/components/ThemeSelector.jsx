import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Check, Sparkles } from 'lucide-react';

export default function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeTheme = themes.find((t) => t.id === theme) || themes[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Theme Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme-surface hover:bg-theme-surfaceHover text-theme-text border border-theme-border text-xs font-mono transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-accent/40"
        title="Switch Interface Theme"
        aria-label="Switch Interface Theme"
        aria-expanded={isOpen}
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm transition-transform duration-300 transform group-hover:scale-125"
          style={{ backgroundColor: activeTheme.accentPreview }}
        />
        <span className="hidden lg:inline-block font-semibold">{activeTheme.name}</span>
        <span className="lg:hidden font-semibold">{activeTheme.badge}</span>
        <Palette className="w-3.5 h-3.5 text-theme-muted" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-theme-card/95 border border-theme-border shadow-2xl backdrop-blur-xl p-2 z-50 animate-fade-in space-y-1">
          <div className="px-3 py-2 border-b border-theme-border/60 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-theme-muted font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-theme-accent" />
              <span>Developer Themes</span>
            </span>
            <span className="text-[10px] font-mono text-theme-muted">Graphite Base</span>
          </div>

          <div className="space-y-1 pt-1">
            {themes.map((t) => {
              const isSelected = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-theme-surface border border-theme-border shadow-sm'
                      : 'hover:bg-theme-surface/70 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-sm border border-black/30"
                      style={{ backgroundColor: t.accentPreview }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-theme-text group-hover:text-theme-accent transition-colors">
                          {t.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-theme-surfaceHover text-theme-muted">
                          {t.badge}
                        </span>
                      </div>
                      <p className="text-[10px] text-theme-muted mt-0.5 leading-tight">
                        {t.description}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-theme-accent flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
