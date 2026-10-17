import React, { useState } from 'react';
import "@designcodeio/threeui/style.css";

export function BookScene() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Base-path aware URL that works in local development (both / and /Portfolio-Website-/)
  // as well as production on GitHub Pages (https://<user>.github.io/Portfolio-Website-/)
  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const sourceUrl = `${normalizedBase}landing-pages/bestsellers-book-showcase.html`;

  return (
    <div className="shader-frame w-full h-[540px] sm:h-[640px] lg:h-[720px] relative rounded-3xl overflow-hidden shadow-2xl border border-theme-border/80 bg-[#080808]">
      {/* Loading state indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#080808] text-theme-muted font-mono text-xs gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Loading 3D Field Manuals (MERN, JavaScript, Claude)...</span>
        </div>
      )}

      {/* 3D Book Showcase WebGL Iframe */}
      <iframe
        title="Field Manuals — MERN, JavaScript & Claude"
        src={sourceUrl}
        sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full border-0 block bg-[#080808]"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
          background: "#080808"
        }}
      />
    </div>
  );
}

export default BookScene;
