import React, { useEffect, useState } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle,
  Code2,
  AlertTriangle,
  Cpu,
  TrendingUp,
  Activity,
  Layers,
  ShieldCheck
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState('tradeoffs'); // 'tradeoffs' | 'overview'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const getThumbnail = () => {
    if (imageError || !project.image) return null;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanPath = project.image.startsWith('/') ? project.image.slice(1) : project.image;
    return `${cleanBase}${cleanPath}`;
  };

  const thumbnail = getThumbnail();
  const tradeoffs = project.engineeringTradeoffs;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-theme-card border border-theme-border shadow-2xl overflow-hidden my-6 sm:my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-theme-surface/90 hover:bg-theme-surfaceHover text-theme-muted hover:text-theme-text border border-theme-border transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Media / Blueprint Strip - Fitted Image Frame */}
        {thumbnail ? (
          <div className="relative w-full bg-[#0A0A0D] border-b border-theme-border/60 p-4 sm:p-5 flex flex-col items-center justify-center flex-shrink-0">
            <div className="relative w-full max-w-2xl aspect-[16/10] sm:aspect-video max-h-[290px] flex items-center justify-center">
              <img
                src={thumbnail}
                alt={project.title}
                onError={() => setImageError(true)}
                className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/5"
              />
            </div>
            <div className="w-full flex items-center justify-between pt-3 px-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-portfolio-midnight/90 dark:bg-portfolio-rose text-portfolio-ivory dark:text-portfolio-midnight text-xs font-mono font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-theme-surface text-theme-text text-xs font-mono border border-theme-border">
                  {project.tag}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-gradient-to-r from-theme-surface to-theme-surfaceHover border-b border-theme-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-portfolio-rose/20 text-portfolio-rose text-xs font-mono font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-theme-muted">{project.tag}</span>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Title and Subtitle */}
          <div>
            <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-portfolio-rose uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Production Systems Architecture Teardown</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-theme-text">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-theme-muted mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-theme-border pb-2">
            <button
              onClick={() => setActiveTab('tradeoffs')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeTab === 'tradeoffs'
                  ? 'bg-portfolio-rose/20 text-portfolio-rose border border-portfolio-rose/40 shadow-sm'
                  : 'bg-theme-surface/50 text-theme-muted hover:text-theme-text hover:bg-theme-surface border border-transparent'
              }`}
            >
              <Cpu className="w-4 h-4 text-portfolio-rose" />
              <span>Engineering Trade-Offs & Impact</span>
              {tradeoffs && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-portfolio-rose/20 text-portfolio-rose border border-portfolio-rose/40 shadow-sm'
                  : 'bg-theme-surface/50 text-theme-muted hover:text-theme-text hover:bg-theme-surface border border-transparent'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Implementation & Tech Stack</span>
            </button>
          </div>

          {/* TAB 1: ENGINEERING TRADE-OFFS & BENCHMARKS (OPTION 3) */}
          {activeTab === 'tradeoffs' && (
            <div className="space-y-6 animate-fade-in">
              {tradeoffs ? (
                <>
                  {/* The 3-Part Trade-Off Architecture Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Part 1: The Bottleneck */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface/90 border border-rose-500/30 flex flex-col justify-between space-y-3 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-mono font-semibold tracking-wider uppercase border border-rose-500/20">
                          <AlertTriangle className="w-3 h-3 text-rose-400" />
                          <span>1. Scale Bottleneck</span>
                        </div>
                        <h4 className="text-sm font-display font-bold text-theme-text group-hover:text-rose-300 transition-colors">
                          {tradeoffs.bottleneckLabel}
                        </h4>
                        <p className="text-xs text-theme-muted leading-relaxed">
                          {tradeoffs.bottleneck}
                        </p>
                      </div>
                      <div className="pt-2 text-[10px] font-mono text-rose-400/80 uppercase">
                        Failure Mode Analyzed
                      </div>
                    </div>

                    {/* Part 2: Architectural Decision */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface/90 border border-amber-500/30 flex flex-col justify-between space-y-3 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-mono font-semibold tracking-wider uppercase border border-amber-500/20">
                          <Cpu className="w-3 h-3 text-amber-400" />
                          <span>2. Chosen Architecture</span>
                        </div>
                        <h4 className="text-sm font-display font-bold text-theme-text group-hover:text-amber-300 transition-colors">
                          {tradeoffs.decisionLabel}
                        </h4>
                        <p className="text-xs text-theme-muted leading-relaxed">
                          {tradeoffs.decision}
                        </p>
                      </div>
                      <div className="pt-2 text-[10px] font-mono text-amber-400/80 uppercase">
                        Protocol Trade-Off Selected
                      </div>
                    </div>

                    {/* Part 3: Measured Benchmark Impact */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface/90 border border-emerald-500/30 flex flex-col justify-between space-y-3 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-semibold tracking-wider uppercase border border-emerald-500/20">
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          <span>3. Benchmark Impact</span>
                        </div>
                        <h4 className="text-sm font-display font-bold text-theme-text group-hover:text-emerald-300 transition-colors">
                          {tradeoffs.impactLabel}
                        </h4>
                        <p className="text-xs text-theme-muted leading-relaxed">
                          {tradeoffs.impact}
                        </p>
                      </div>
                      <div className="pt-2 text-[10px] font-mono text-emerald-400/80 uppercase">
                        Verified Metric Outcome
                      </div>
                    </div>
                  </div>

                  {/* Quantitative Live Benchmark Chips */}
                  {tradeoffs.metrics && tradeoffs.metrics.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-portfolio-rose" />
                          <span>Verified System Telemetry & Benchmark Load</span>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">
                          Continuous Profiling
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {tradeoffs.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-theme-surface border border-theme-border/80 text-center flex flex-col justify-between hover:border-portfolio-rose/40 transition-colors"
                          >
                            <span className="text-lg sm:text-xl font-display font-bold text-portfolio-rose tracking-tight">
                              {m.value}
                            </span>
                            <div className="mt-1">
                              <span className="text-xs font-semibold text-theme-text block">
                                {m.label}
                              </span>
                              <span className="text-[10px] font-mono text-theme-muted block mt-0.5">
                                {m.note}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border text-center text-sm text-theme-muted">
                  Standard architectural notes are available in the Overview tab.
                </div>
              )}

              {/* Architectural Notes Banner */}
              {project.details && (
                <div className="p-4 rounded-2xl bg-theme-surface/70 border border-theme-border/80">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-theme-text font-semibold mb-2">
                    <Code2 className="w-4 h-4 text-portfolio-rose" />
                    <span>Deep Architectural Breakdown</span>
                  </div>
                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                    {project.details}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SYSTEM OVERVIEW & HIGHLIGHTS */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Key Technical Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold">
                    Core Technical Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-theme-surface border border-theme-border/60 text-xs sm:text-sm text-theme-text"
                      >
                        <CheckCircle className="w-4 h-4 text-portfolio-rose mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-theme-muted font-semibold mb-2.5">
                  Technologies & Libraries Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-xs font-mono text-theme-text hover:border-portfolio-rose/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="p-6 border-t border-theme-border bg-theme-surface/40 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-theme-surface hover:bg-theme-surfaceHover text-theme-text border border-theme-border text-xs sm:text-sm font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-portfolio-rose text-portfolio-midnight hover:opacity-90 text-xs sm:text-sm font-semibold transition-opacity shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Preview</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-theme-muted hover:text-theme-text transition-colors px-3 py-1.5 rounded-lg hover:bg-theme-surface"
          >
            Close Teardown [Esc]
          </button>
        </div>
      </div>
    </div>
  );
}
