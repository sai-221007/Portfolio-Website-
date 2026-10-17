import React from 'react';
import { BestsellersBookShowcase } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function BookScene() {
  return (
    <div className="shader-frame w-full h-[540px] sm:h-[640px] lg:h-[720px] relative rounded-3xl overflow-hidden shadow-2xl border border-theme-border/80 bg-[#080808]">
      <BestsellersBookShowcase
        headingFont="iowan-old-style"
        bodyFont="iowan-old-style"
        headingWeight="500"
        bodyWeight="400"
        primaryColor="#c3a47b"
        headingSize={325}
        bodySize={17}
        headingLetterSpacing={-0.085}
      />
    </div>
  );
}

export default BookScene;
