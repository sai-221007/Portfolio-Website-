import React from 'react';
import { WarpFieldBackground } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene({
  speed = 15.0,
  streakOpacity = 0.60,
  tileOpacity = 0.90,
  fov = 75,
  hue = 0,
  saturation = 1.00,
  brightness = 1.00
}) {
  return (
    <div className="shader-frame w-full h-[520px] sm:h-[620px] lg:h-[680px] relative rounded-3xl overflow-hidden shadow-2xl border border-theme-border/80 bg-[#080808]">
      <WarpFieldBackground
        speed={speed}
        streakOpacity={streakOpacity}
        tileOpacity={tileOpacity}
        fov={fov}
        hue={hue}
        saturation={saturation}
        brightness={brightness}
      />
    </div>
  );
}

export default Scene;
