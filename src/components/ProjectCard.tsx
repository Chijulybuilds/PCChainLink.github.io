import React from 'react';
import { Project } from '../data';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-card border border-borderDark p-6 rounded-xl hover:border-accent/50 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-start mb-4">
          <FolderGit2 className="text-accent group-hover:scale-110 transition-transform" size={28} />
          <div className="flex space-x-3 text-textSecondary">
            <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-textPrimary">
              <Github size={20} />
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-textPrimary">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-heading text-xl font-bold text-textPrimary mb-2">{project.title}</h3>
        <p className="text-textSecondary text-sm mb-6 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-borderDark/50">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="text-xs font-mono bg-borderDark/60 text-accent font-medium px-2.5 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};