import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = [
  {
    id: 'graphite',
    name: 'Graphite Gallery',
    badge: 'Titanium',
    bgPreview: '#121214',
    textPreview: '#F3F4F6',
    accentPreview: '#D4B2A7',
    description: 'Deep charcoal, zinc & warm metal accents'
  },
  {
    id: 'sapphire',
    name: 'Midnight Sapphire',
    badge: 'Cosmic',
    bgPreview: '#0A0F1D',
    textPreview: '#F0F6FC',
    accentPreview: '#38BDF8',
    description: 'Deep cosmic navy & electric sky sapphire'
  },
  {
    id: 'emerald',
    name: 'Obsidian Emerald',
    badge: 'Matrix',
    bgPreview: '#0B0F0E',
    textPreview: '#F0FDF4',
    accentPreview: '#10B981',
    description: 'Obsidian carbon & cyber terminal green'
  },
  {
    id: 'amber',
    name: 'Titanium Amber',
    badge: 'Forge',
    bgPreview: '#141210',
    textPreview: '#FFFBEB',
    accentPreview: '#F59E0B',
    description: 'Molten carbon & radiant amber gold'
  }
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('sai-portfolio-theme');
      if (saved && THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'graphite';
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('sai-portfolio-theme', theme);
    } catch (e) {
      console.error('Error setting theme:', e);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
