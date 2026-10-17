import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import EngineeringMetricsHub from './EngineeringMetricsHub';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Cpu,
  BarChart3,
  Layers
} from 'lucide-react';

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [activeView, setActiveView] = useState('hub'); // 'hub' (Credibility Hub) | 'directory' (Skills Matrix)
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        { category: 'Programming Languages', items: skills.languages, icon: Code2 },
        { category: 'Frontend Engineering', items: skills.frontend, icon: Layout },
        { category: 'Backend Architecture', items: skills.backend, icon: Server },
        { category: 'Databases & Storage', items: skills.databases, icon: Database },
        { category: 'Tools & Workflow', items: skills.tools, icon: Wrench },
      ];
    }
    const cat = categories.find((c) => c.id === activeCategory);
    return [
      {
        category: cat.label,
        items: skills[activeCategory] || [],
        icon: cat.icon,
      },
    ];
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-xs font-mono uppercase tracking-wider text-theme-muted">
            <Cpu className="w-3.5 h-3.5 text-portfolio-rose" />
            <span>Technical Capabilities & Systems Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-theme-text tracking-tight">
            Skills & Engineering Proof
          </h2>
          <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
            Tangible algorithmic rigor, verified distributed systems benchmarks, and modern full-stack competencies.
          </p>

          {/* Master View Mode Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-theme-surface border border-theme-border shadow-inner">
              <button
                onClick={() => setActiveView('hub')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-200 ${
                  activeView === 'hub'
                    ? 'bg-portfolio-rose text-portfolio-midnight shadow-md'
                    : 'text-theme-muted hover:text-theme-text'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Algorithmic & Systems Hub</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
              </button>

              <button
                onClick={() => setActiveView('directory')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-200 ${
                  activeView === 'directory'
                    ? 'bg-portfolio-rose text-portfolio-midnight shadow-md'
                    : 'text-theme-muted hover:text-theme-text'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Tech Stack Directory</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: ALGORITHMIC & SYSTEMS CREDIBILITY HUB (OPTION 4) */}
        {activeView === 'hub' && (
          <div className="animate-fade-in space-y-8">
            <EngineeringMetricsHub />

            {/* Quick Teaser to Full Stack Directory */}
            <div className="p-4 rounded-2xl bg-theme-surface/60 border border-theme-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-mono text-portfolio-rose uppercase font-semibold">
                  Comprehensive Skills Catalog Available
                </span>
                <p className="text-xs text-theme-muted mt-0.5">
                  Explore categorized frameworks, runtimes, database engines, and developer tooling.
                </p>
              </div>
              <button
                onClick={() => setActiveView('directory')}
                className="px-4 py-2 rounded-xl bg-theme-card hover:bg-theme-surface text-theme-text border border-theme-border text-xs font-mono font-semibold transition-colors flex-shrink-0"
              >
                View Tech Stack Directory →
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: TECH STACK DIRECTORY */}
        {activeView === 'directory' && (
          <div className="animate-fade-in space-y-8">
            {/* Filter Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                      isActive
                        ? 'bg-portfolio-rose text-portfolio-midnight border-transparent shadow-sm'
                        : 'bg-theme-surface hover:bg-theme-surfaceHover text-theme-muted hover:text-theme-text border-theme-border'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Categorized Skills Grid */}
            <div className="space-y-12">
              {getFilteredSkills().map((group, gIdx) => {
                const GroupIcon = group.icon;
                return (
                  <div key={gIdx} className="space-y-4">
                    {activeCategory === 'all' && (
                      <div className="flex items-center gap-2 pb-2 border-b border-theme-border/60">
                        <GroupIcon className="w-4 h-4 text-portfolio-rose" />
                        <h3 className="text-sm font-mono uppercase tracking-wider text-theme-muted font-semibold">
                          {group.category}
                        </h3>
                      </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                      {group.items.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 rounded-2xl bg-theme-card hover:bg-theme-surface border border-theme-border hover:border-portfolio-rose/50 shadow-sm transition-all duration-200 group flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="w-2 h-2 rounded-full bg-portfolio-rose/80 group-hover:scale-125 transition-transform" />
                            <span className="text-[10px] font-mono text-theme-muted group-hover:text-theme-text transition-colors">
                              Verified
                            </span>
                          </div>
                          <div>
                            <h4 className="font-display font-semibold text-sm sm:text-base text-theme-text group-hover:text-portfolio-rose transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-theme-muted mt-1 leading-tight">
                              {skill.level}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Switch to Credibility Hub */}
            <div className="text-center pt-4">
              <button
                onClick={() => setActiveView('hub')}
                className="inline-flex items-center gap-2 text-xs font-mono text-portfolio-rose hover:underline"
              >
                ← Return to Algorithmic & Systems Credibility Hub
              </button>
            </div>
          </div>
        )}

        {/* Professional Systems Rigor Note */}
        <div className="p-5 rounded-2xl bg-theme-surface/70 border border-theme-border text-center max-w-2xl mx-auto">
          <p className="text-xs text-theme-muted leading-relaxed">
            <span className="font-semibold text-theme-text font-mono">Engineering Philosophy:</span> Competency is demonstrated through measurable algorithmic problem-solving, architectural trade-offs, and tested fault-tolerant code rather than vanity percentages.
          </p>
        </div>
      </div>
    </section>
  );
}
