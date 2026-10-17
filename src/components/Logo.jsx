import React from 'react';

export default function Logo({ size = 'default', showText = true, className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  const iconDimensions = isSmall ? 'w-9 h-9' : isLarge ? 'w-13 h-13' : 'w-11 h-11';

  // Base URL for asset resolving
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const logoSrc = `${cleanBase}assets/logo-hexatech.jpg`;

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer select-none ${className}`}>
      {/* Option 1: Hexa-Tech 3D Isometric Cyber Logo */}
      <div className={`relative ${iconDimensions} flex items-center justify-center transition-all duration-300 transform group-hover:scale-108 group-hover:-translate-y-0.5`}>
        {/* Ambient Neon Cyan & Electric Violet Glow Aura */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00F0FF] via-[#7C3AED] to-[#D946EF] opacity-45 group-hover:opacity-90 blur-md transition-opacity duration-300" />

        {/* Outer Hexa-Tech Glassmorphic Shield Border */}
        <div className="relative w-full h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-[#00F0FF] via-[#8B5CF6] to-[#D946EF] shadow-lg shadow-[#00F0FF]/25 transition-all duration-300 group-hover:shadow-[#00F0FF]/50">
          <div className="w-full h-full rounded-[14px] bg-[#0A0914] flex items-center justify-center overflow-hidden relative">
            {/* High-Resolution 3D Hexa-Tech Render */}
            <img
              src={logoSrc}
              alt="SM Hexa-Tech Logo"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // If image fails, fallback to high-tech vector glyph
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'block';
                }
              }}
            />

            {/* Precision Vector Fallback (Hidden by default, shown if image fails) */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full p-1.5 hidden"
            >
              <defs>
                <linearGradient id="fallbackNeon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#D946EF" />
                </linearGradient>
              </defs>
              {/* Isometric Hexagon Frame */}
              <polygon points="50,15 82,33 82,67 50,85 18,67 18,33" stroke="url(#fallbackNeon)" strokeWidth="4" fill="none" />
              {/* S glyph */}
              <path d="M 46 32 L 32 32 C 28 32, 26 35, 26 39 C 26 44, 30 46, 36 47 L 40 48 C 45 49, 48 52, 48 57 C 48 62, 45 65, 38 65 L 25 65" stroke="#00F0FF" strokeWidth="5" strokeLinecap="round" />
              {/* M glyph */}
              <path d="M 54 65 L 54 32 L 66 50 L 78 32 L 78 65" stroke="#D946EF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold tracking-tight text-theme-text text-base md:text-lg group-hover:text-portfolio-rose transition-colors duration-200">
              Sai Manikanta
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00F0FF] opacity-90 group-hover:scale-125 transition-transform" />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] md:text-xs text-theme-muted uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>Systems &amp; Software</span>
          </div>
        </div>
      )}
    </div>
  );
}
