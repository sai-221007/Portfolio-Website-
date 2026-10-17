import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Compass, Target, Award, Sparkles, UserCheck } from 'lucide-react';

export default function AboutSection() {
  const { personal, about } = portfolioData;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-xs font-mono uppercase tracking-wider text-theme-muted">
            <UserCheck className="w-3.5 h-3.5 text-portfolio-rose" />
            <span>Background & Technical Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-theme-text tracking-tight">
            About Sai Manikanta
          </h2>
          <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
            A comprehensive look into my academic journey in Computer Science, core engineering passions, and long-term developer aspirations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Biography (Col 12 / 8) */}
          <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-theme-card border border-theme-border shadow-sm flex flex-col justify-between hover:border-portfolio-rose/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-rose font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Biography</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-theme-text">
                Crafting software at the intersection of algorithmic rigor and user experience
              </h3>
              <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
                {about.biography}
              </p>
            </div>

            {/* Quick student details strip */}
            <div className="mt-8 pt-6 border-t border-theme-border grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-xs font-mono text-theme-muted uppercase">Status</span>
                <span className="text-sm font-semibold text-theme-text">CS Student '26</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-theme-muted uppercase">Focus Area</span>
                <span className="text-sm font-semibold text-theme-text">Distributed Systems</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-theme-muted uppercase">Primary Stack</span>
                <span className="text-sm font-semibold text-theme-text">React, Node.js &amp; C++</span>
              </div>
            </div>
          </div>

          {/* Card 2: Education (Col 12 / 4) */}
          <div className="md:col-span-5 lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-sm flex flex-col justify-between hover:border-portfolio-rose/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-rose font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-theme-text">
                {about.education.degree}
              </h3>
              <p className="text-sm text-theme-muted">
                {about.education.institution}
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-theme-card border border-theme-border text-xs font-mono text-portfolio-midnight dark:text-portfolio-rose font-medium">
                {about.education.period}
              </div>
              <p className="text-xs text-theme-muted leading-relaxed pt-2">
                {about.education.highlight}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-theme-border/60">
              <span className="text-xs font-mono text-theme-muted block mb-2">Core Systems Coursework:</span>
              <div className="flex flex-wrap gap-1.5">
                {about.education.coursework.slice(0, 5).map((course, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-theme-card border border-theme-border text-theme-text/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Advanced Technical Interests (Col 12 / 6) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-theme-card border border-theme-border shadow-sm hover:border-portfolio-rose/40 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-rose font-semibold mb-4">
              <Compass className="w-4 h-4" />
              <span>Advanced Technical Interests</span>
            </div>
            <h3 className="text-xl font-display font-semibold text-theme-text mb-6">
              Engineering frontiers &amp; architectural passions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-theme-surface border border-theme-border/80 hover:border-portfolio-rose/30 transition-colors"
                >
                  <h4 className="font-display font-semibold text-sm text-theme-text mb-1">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-theme-muted leading-relaxed">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Technical Goals & Milestones (Col 12 / 6) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-theme-card border border-theme-border shadow-sm flex flex-col justify-between hover:border-portfolio-rose/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-rose font-semibold mb-3">
                <Target className="w-4 h-4" />
                <span>Technical Goals &amp; Aspirations</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-theme-text mb-3">
                Building impactful, production-grade systems
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed mb-5">
                {about.careerGoals}
              </p>

              {/* Technical Milestones Roadmap */}
              {about.technicalGoals && (
                <div className="space-y-3 mb-6">
                  {about.technicalGoals.map((g, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-theme-surface border border-theme-border/70 hover:border-portfolio-rose/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-theme-text">{g.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-portfolio-rose/15 text-portfolio-rose font-medium">
                          {g.phase}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-theme-muted leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Achievements list */}
            <div className="pt-4 border-t border-theme-border">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-muted mb-3">
                <Award className="w-3.5 h-3.5 text-portfolio-rose" />
                <span>Honors &amp; Key Milestones</span>
              </div>
              <div className="space-y-2.5">
                {about.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-rose mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-theme-text block">
                        {ach.title}
                      </span>
                      <span className="text-xs text-theme-muted">
                        {ach.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
