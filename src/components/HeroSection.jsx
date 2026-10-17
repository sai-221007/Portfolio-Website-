import React, { useState, useEffect } from 'react';
import VoiceControls from './VoiceControls';
import HeroAnimatedVisual from './HeroAnimatedVisual';
import HeroNameBadge3D from './HeroNameBadge3D';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Send, Terminal, Code2, Compass, Cpu, Activity, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const { personal } = portfolioData;
  const [isSpeakingVoice, setIsSpeakingVoice] = useState(false);

  // Cancel any speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleVoice = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeakingVoice) {
      window.speechSynthesis.cancel();
      setIsSpeakingVoice(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(personal.speechText);
      utterance.rate = 1.06;
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const naturalVoice = voices.find(
        (v) =>
          (v.lang.startsWith('en') && v.name.includes('Natural')) ||
          v.name.includes('Google') ||
          v.name.includes('Samantha') ||
          v.name.includes('David')
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (naturalVoice) utterance.voice = naturalVoice;

      utterance.onstart = () => setIsSpeakingVoice(true);
      utterance.onend = () => setIsSpeakingVoice(false);
      utterance.onerror = () => setIsSpeakingVoice(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme-border w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-portfolio-rose animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-widest text-theme-muted uppercase">
                {personal.greeting}
              </span>
            </div>

            {/* Name Heading + Animated Cyber Emblem Badge Beside Name */}
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-theme-text leading-[1.08]">
                {personal.name}
              </h1>

              {/* Interactive 3D WebGL Identity Core Badge */}
              <div
                className="relative group inline-flex items-center justify-center flex-shrink-0 animate-float-slow cursor-pointer"
                title="Sai Manikanta • Interactive 3D Systems Core (Hover to accelerate)"
              >
                {/* Concentric Rotating Cyber Ring Glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-theme-accent via-cyan-400 to-indigo-500 opacity-60 group-hover:opacity-100 blur-lg transition duration-700 animate-pulse pointer-events-none" />

                {/* Floating Glassmorphic Container with true 3D WebGL Canvas */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-theme-surface/90 border border-theme-border/80 flex items-center justify-center shadow-2xl backdrop-blur-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:border-theme-accent/60">
                  <HeroNameBadge3D />

                  {/* Live Energy Orbs */}
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-theme-card animate-pulse pointer-events-none" />
                  <span className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-75 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Subheading / Role with Vibrant High-Tech Contrast Colors */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight flex items-center flex-wrap gap-x-2.5 gap-y-1">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                Computer Science Student
              </span>
              <span className="text-theme-muted font-normal text-lg sm:text-2xl">&amp;</span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(52,211,153,0.35)]">
                Systems Engineer
              </span>
            </h2>

            {/* Introductory copy */}
            <p className="text-base sm:text-lg md:text-xl text-theme-muted font-normal leading-relaxed max-w-2xl">
              {personal.bioShort}
            </p>

            {/* Supporting line */}
            <div className="flex items-center gap-2 text-sm md:text-base font-mono text-portfolio-rose font-medium">
              <Terminal className="w-4 h-4 text-portfolio-rose animate-pulse" />
              <span>{personal.subtitle}</span>
            </div>

            {/* Functional Buttons & Voice Narration */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Explore My Work Button */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-portfolio-midnight text-portfolio-ivory hover:bg-portfolio-midnight/90 dark:bg-portfolio-ivory dark:text-portfolio-midnight dark:hover:bg-portfolio-rose font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-portfolio-rose"
              >
                <Compass className="w-4 h-4" />
                <span>Explore My Work</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-theme-surface hover:bg-theme-surfaceHover text-theme-text border border-theme-border font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-portfolio-rose"
              >
                <Send className="w-4 h-4 text-portfolio-rose" />
                <span>Contact Me</span>
              </button>

              {/* Voice Narration Control */}
              <VoiceControls
                text={personal.speechText}
                isSpeaking={isSpeakingVoice}
                onToggleSpeaking={handleToggleVoice}
              />
            </div>

            {/* Status Info Chips */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 text-xs text-theme-muted">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-theme-surface border border-theme-border">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personal.status}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-theme-surface border border-theme-border">
                <Code2 className="w-3.5 h-3.5 text-portfolio-rose" />
                <span>React • Node.js • C++ • DSA</span>
              </span>
            </div>
          </div>

          {/* Right Hero Stage: High-Tech Interactive 3D & Raft Consensus Visualizer */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full">
            <HeroAnimatedVisual />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-theme-muted/70 hover:text-theme-text transition-colors cursor-pointer pointer-events-auto">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
