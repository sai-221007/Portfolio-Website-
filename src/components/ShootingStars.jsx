import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ShootingStars() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = mediaQuery.matches;

    // Palette helper based on current theme
    const getColors = () => {
      if (theme === 'sapphire') {
        return [
          { r: 56, g: 189, b: 248 },  // electric sky blue
          { r: 129, g: 140, b: 248 }, // violet starlight
          { r: 240, g: 246, b: 252 }, // crisp white
          { r: 14, g: 165, b: 233 },  // cyan meteor
        ];
      }
      if (theme === 'emerald') {
        return [
          { r: 16, g: 185, b: 129 },  // cyber emerald
          { r: 52, g: 211, b: 153 },  // mint teal
          { r: 240, g: 253, b: 244 }, // pale starlight
          { r: 110, g: 231, b: 183 }, // vibrant jade
        ];
      }
      if (theme === 'amber') {
        return [
          { r: 245, g: 158, b: 11 },  // radiant amber
          { r: 251, g: 191, b: 36 },  // warm gold
          { r: 255, g: 251, b: 235 }, // pure warm white
          { r: 217, g: 119, b: 6 },   // molten copper
        ];
      }
      // graphite default
      return [
        { r: 212, g: 178, b: 167 }, // warm titanium rose
        { r: 243, g: 244, b: 246 }, // crisp white
        { r: 220, g: 200, b: 255 }, // soft violet
        { r: 186, g: 193, b: 205 }, // slate star
        { r: 255, g: 235, b: 180 }, // champagne star
      ];
    };

    // Rich ambient twinkling starfield (110 stars)
    const ambientCount = 110;
    const ambientStars = Array.from({ length: ambientCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.15,
      speed: Math.random() * 0.02 + 0.008,
      phase: Math.random() * Math.PI * 2,
      isGlitter: Math.random() > 0.85,
    }));

    // Dense shooting stars crowd state
    const maxActiveShootingStars = 28;
    const shootingStars = [];

    const createShootingStar = (customX, customY, customSpeed) => {
      const colors = getColors();
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Cascading diagonal angle between 32 and 52 degrees
      const angle = (Math.random() * 20 + 32) * (Math.PI / 180);
      const speed = customSpeed || Math.random() * 4.5 + 4.5;
      const length = Math.random() * 90 + 55; // length of luminous streak

      // Spawn across the entire top edge and upper-left/right sides
      const x = customX !== undefined 
        ? customX 
        : Math.random() * (width * 1.15) - width * 0.1;
      const y = customY !== undefined 
        ? customY 
        : Math.random() * -60 - 10;

      return {
        x,
        y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length,
        speed,
        color,
        opacity: Math.random() * 0.5 + 0.45,
        headSize: Math.random() * 1.4 + 1.2,
        life: 0,
        maxLife: Math.random() * 110 + 90,
      };
    };

    // Batch spawn helper for crowds / clusters
    const spawnCluster = (count) => {
      for (let i = 0; i < count; i++) {
        if (shootingStars.length >= maxActiveShootingStars) break;
        const offsetX = Math.random() * (width * 1.1) - width * 0.05;
        const offsetY = Math.random() * -120 - 10;
        const speed = Math.random() * 4.5 + 4.2;
        shootingStars.push(createShootingStar(offsetX, offsetY, speed));
      }
    };

    // Pre-seed a crowd of 12 stars immediately active across the canvas
    if (!isReducedMotion) {
      for (let i = 0; i < 12; i++) {
        const star = createShootingStar(
          Math.random() * width,
          Math.random() * (height * 0.75)
        );
        star.life = Math.floor(Math.random() * 60) + 10;
        shootingStars.push(star);
      }
    }

    let frameCount = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render ambient twinkling background stars
      const ambientBaseColor = theme === 'graphite' ? '255, 255, 255' : '74, 78, 105';
      ambientStars.forEach((star) => {
        star.phase += star.speed;
        const currentAlpha = star.alpha + Math.sin(star.phase) * (star.alpha * 0.6);
        ctx.fillStyle = `rgba(${ambientBaseColor}, ${Math.max(0.08, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle cross on glitter stars
        if (star.isGlitter && currentAlpha > 0.4) {
          ctx.strokeStyle = `rgba(${ambientBaseColor}, ${currentAlpha * 0.5})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(star.x - star.radius * 2.5, star.y);
          ctx.lineTo(star.x + star.radius * 2.5, star.y);
          ctx.moveTo(star.x, star.y - star.radius * 2.5);
          ctx.lineTo(star.x, star.y + star.radius * 2.5);
          ctx.stroke();
        }
      });

      // 2. Render dense crowd of shooting stars
      if (!isReducedMotion) {
        frameCount++;

        // Frequent continuous cluster spawns (every 18 frames spawn 2-3 stars)
        if (frameCount % 18 === 0 && shootingStars.length < maxActiveShootingStars) {
          const spawnCount = Math.floor(Math.random() * 2) + 2; // 2 to 3 stars
          spawnCluster(spawnCount);
        }

        // Periodic grand meteor wave (every 90 frames, spawn 4-6 stars together in a crowd)
        if (frameCount % 90 === 0 && shootingStars.length < maxActiveShootingStars) {
          const showerCount = Math.floor(Math.random() * 3) + 4; // 4 to 6 stars
          spawnCluster(showerCount);
        }

        // Render & update active crowd
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const star = shootingStars[i];
          star.x += star.dx;
          star.y += star.dy;
          star.life++;

          // Tail coordinates
          const tailX = star.x - Math.cos(Math.atan2(star.dy, star.dx)) * star.length;
          const tailY = star.y - Math.sin(Math.atan2(star.dy, star.dx)) * star.length;

          // Smooth fade in and fade out
          let fade = 1;
          if (star.life < 18) {
            fade = star.life / 18;
          } else if (star.life > star.maxLife - 28) {
            fade = Math.max(0, (star.maxLife - star.life) / 28);
          }

          const currentOpacity = star.opacity * fade;
          const { r, g, b } = star.color;

          // Gradient trail streak
          const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          gradient.addColorStop(0.65, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.45})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${currentOpacity})`);

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.8;
          ctx.lineCap = 'round';
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();

          // Luminous glowing star head
          ctx.beginPath();
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, currentOpacity * 1.4)})`;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.75)`;
          ctx.shadowBlur = 8;
          ctx.arc(star.x, star.y, star.headSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset

          // Remove star when off screen or life expired
          if (
            star.x > width + 120 ||
            star.y > height + 120 ||
            star.life >= star.maxLife
          ) {
            shootingStars.splice(i, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
