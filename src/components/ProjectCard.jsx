import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Layers, Sparkles, Activity } from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  const [imageError, setImageError] = useState(false);

  const getThumbnail = () => {
    if (imageError || !project.image) return null;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanPath = project.image.startsWith('/') ? project.image.slice(1) : project.image;
    return `${cleanBase}${cleanPath}`;
  };

  const thumbnail = getThumbnail();

  return (
    <div className="group rounded-3xl bg-theme-card border border-theme-border hover:border-portfolio-rose/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      {/* Thumbnail / Header Preview - Fitted Image Frame */}
      <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-[#0A0A0D] border-b border-theme-border/60 p-2 sm:p-2.5 flex items-center justify-center">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          /* Stylized SVG Blueprint Preview for fallback */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-theme-surface to-theme-surfaceHover relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22223B_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="w-12 h-12 rounded-2xl bg-portfolio-rose/20 flex items-center justify-center text-portfolio-rose mb-2 shadow-inner">
              <Layers className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
              {project.category} Showcase
            </span>
          </div>
        )}

        {/* Featured Tag */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-portfolio-midnight/90 dark:bg-portfolio-rose text-portfolio-ivory dark:text-portfolio-midnight text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-portfolio-rose dark:text-portfolio-midnight" />
            <span>Featured Project</span>
          </div>
        )}

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-theme-surface/90 backdrop-blur-md text-theme-text text-[11px] font-mono border border-theme-border">
          {project.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs font-mono text-portfolio-rose uppercase tracking-wider font-semibold mb-1">
            {project.category}
          </div>
          <h3 className="text-lg sm:text-xl font-display font-bold text-theme-text group-hover:text-portfolio-rose transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-theme-muted mt-2 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Engineering Trade-off Benchmark Snippet */}
        {project.engineeringTradeoffs && (
          <div className="p-3 rounded-2xl bg-theme-surface/80 border border-theme-border/80 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-theme-text font-medium truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <Activity className="w-3.5 h-3.5 flex-shrink-0 text-portfolio-rose" />
              <span className="truncate text-xs">{project.engineeringTradeoffs.impactLabel}</span>
            </div>
            <span className="text-[10px] text-theme-muted flex-shrink-0 ml-2 font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-theme-card border border-theme-border/60">
              Benchmark
            </span>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full bg-theme-surface border border-theme-border text-[11px] font-mono text-theme-text/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between">
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-text hover:text-portfolio-rose transition-colors focus:outline-none"
          >
            <span>Trade-Offs & Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-theme-surface hover:bg-theme-surfaceHover text-theme-text border border-theme-border transition-colors"
                title="View GitHub Repository"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-portfolio-midnight text-portfolio-ivory dark:bg-portfolio-ivory dark:text-portfolio-midnight hover:opacity-90 transition-opacity"
                title="Open Live Preview"
                aria-label={`Open live preview for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
