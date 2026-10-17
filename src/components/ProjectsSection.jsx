import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FolderGit2 } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = ['All', 'Full Stack', 'Backend & Systems', 'Creative & AI'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-xs font-mono uppercase tracking-wider text-theme-muted">
            <FolderGit2 className="w-3.5 h-3.5 text-portfolio-rose" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-theme-text tracking-tight">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
            Real software implementations highlighting algorithmic efficiency, real-time networking, and responsive frontend design.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-portfolio-midnight text-portfolio-ivory dark:bg-portfolio-ivory dark:text-portfolio-midnight border-transparent shadow-sm'
                    : 'bg-theme-surface hover:bg-theme-surfaceHover text-theme-muted hover:text-theme-text border-theme-border'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
}
