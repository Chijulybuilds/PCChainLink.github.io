import React from 'react';
import { PROJECTS } from '../data';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="font-heading text-3xl font-bold text-textPrimary mb-2">Featured Projects</h2>
        <p className="text-textSecondary">Production smart contracts, DeFi architectures, and protocols.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};