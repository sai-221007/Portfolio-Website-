import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import ThemeSelector from './ThemeSelector';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'showcase-3d', label: '3D Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 nav-blur border-b border-theme-border shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="focus:outline-none focus:ring-2 focus:ring-portfolio-rose/50 rounded-xl"
            aria-label="Sai Manikanta - Home"
          >
            <Logo size="default" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-theme-surface/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-theme-border shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-theme-text font-semibold bg-theme-card shadow-sm'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-surfaceHover'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-portfolio-rose" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Selector & Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeSelector />

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs lg:text-sm font-semibold rounded-full bg-portfolio-midnight text-portfolio-ivory hover:bg-portfolio-midnight/90 dark:bg-portfolio-ivory dark:text-portfolio-midnight dark:hover:bg-portfolio-rose transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-portfolio-rose/50"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger & Theme selector */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-theme-surface border border-theme-border text-theme-text hover:bg-theme-surfaceHover transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-rose/50"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-theme-card border border-theme-border shadow-xl backdrop-blur-lg animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-portfolio-rose/15 text-theme-text font-bold'
                        : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-portfolio-rose" />
                    )}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-theme-border">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="w-full inline-flex justify-center items-center gap-2 py-2.5 rounded-xl bg-portfolio-midnight text-portfolio-ivory dark:bg-portfolio-ivory dark:text-portfolio-midnight text-sm font-semibold transition-colors"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
