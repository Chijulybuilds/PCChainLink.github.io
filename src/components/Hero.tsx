import React from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowUpRight, Github, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto scroll-mt-16">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-borderDark border border-borderDark text-accentGreen text-xs font-mono mb-6">
        <ShieldCheck size={14} />
        <span>Open for Smart Contract Roles</span>
      </div>

      <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-textPrimary mb-4">
        {PERSONAL_INFO.name}
      </h1>
      <p className="text-xl sm:text-2xl text-accent font-medium mb-6">
        {PERSONAL_INFO.role}
      </p>

      <p className="text-textSecondary max-w-2xl text-lg mb-8 leading-relaxed">
        {PERSONAL_INFO.tagline}
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <a href="#projects" className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <span>View Projects</span>
          <ArrowUpRight size={18} />
        </a>
        <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-card border border-borderDark text-textPrimary font-medium rounded-lg hover:border-textSecondary transition-colors flex items-center space-x-2">
          <Github size={18} />
          <span>GitHub Profile</span>
        </a>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-borderDark pt-8">
        <div>
          <div className="font-heading text-2xl font-bold text-textPrimary">{PERSONAL_INFO.stats.experience}</div>
          <div className="text-xs text-textSecondary">Experience</div>
        </div>
        <div>
          <div className="font-heading text-2xl font-bold text-textPrimary">{PERSONAL_INFO.stats.projects}</div>
          <div className="text-xs text-textSecondary">Core Repositories</div>
        </div>
        <div>
          <div className="font-heading text-2xl font-bold text-accentGreen">Foundry / Solidity</div>
          <div className="text-xs text-textSecondary">Primary Stack</div>
        </div>
      </div>
    </section>
  );
};
