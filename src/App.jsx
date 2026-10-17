import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ShootingStars from './components/ShootingStars';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Showcase3D from './components/Showcase3D';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-theme-bg text-theme-text transition-colors duration-500 font-sans selection:bg-portfolio-rose/30 selection:text-portfolio-midnight dark:selection:text-portfolio-ivory overflow-x-hidden">
        {/* Ambient Dark Aurora Borealis Cosmic Background */}
        <div
          className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-35 dark:opacity-55 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/bg-dark-aurora.jpg)`,
          }}
        />

        {/* CRITICAL FEATURE: Continuously falling shooting stars (active throughout entire site) */}
        <ShootingStars />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <Showcase3D />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
