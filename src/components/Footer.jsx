import React from 'react';
import Logo from './Logo';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: '3D Lab', href: '#showcase-3d' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-theme-border bg-theme-surface/50 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-theme-border/60">
          {/* Logo & Student Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Logo size="default" />
            <p className="text-xs text-theme-muted font-sans max-w-sm leading-relaxed">
              Computer Science student & developer crafting thoughtful web experiences with modern architecture.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-theme-muted">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-theme-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Profiles & Back to top */}
          <div className="flex items-center gap-3">
            {social.map((item, idx) => {
              const Icon =
                item.name === 'GitHub'
                  ? Github
                  : item.name === 'LinkedIn'
                  ? Linkedin
                  : Mail;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-theme-card hover:bg-theme-surfaceHover text-theme-muted hover:text-theme-text border border-theme-border transition-colors shadow-sm"
                  title={item.name}
                  aria-label={item.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-portfolio-midnight text-portfolio-ivory dark:bg-portfolio-ivory dark:text-portfolio-midnight hover:opacity-90 transition-opacity shadow-sm ml-2"
              title="Back to top of page"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modern Redesigned Copyright & Attribution Bar */}
        <div className="pt-8 border-t border-theme-border/60 flex flex-col md:flex-row items-center justify-between text-xs text-theme-muted gap-4">
          {/* Left: Clean Copyright Statement */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="font-bold text-theme-text font-display text-sm">
              &copy; {new Date().getFullYear()} {personal.name}
            </span>
            <span className="text-theme-border/70 hidden sm:inline">|</span>
            <span className="font-mono text-[11px] text-theme-muted">
              All Rights Reserved
            </span>
            <span className="text-theme-border/70 hidden sm:inline">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-theme-surface border border-theme-border font-mono text-[10px] text-theme-accent">
              v2.6.0 Stable
            </span>
          </div>

          {/* Right: Engineered Info & Location */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Roles &amp; Internships</span>
            </div>
            <span className="text-theme-muted/40 hidden sm:inline">•</span>
            <span className="text-theme-muted hover:text-theme-text transition-colors">
              React 18 • Three.js • Vite
            </span>
            <span className="text-theme-muted/40 hidden sm:inline">•</span>
            <span className="text-theme-accent font-semibold tracking-wide">
              Hyderabad, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
