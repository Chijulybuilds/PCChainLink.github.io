import React from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowUpRight, Github, ShieldCheck } from 'lucide-react';


export const Hero: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto scroll-mt-16 px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between">
        <div className="w-full flex-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-borderDark border border-borderDark text-accentGreen text-xs font-mono mb-6">
            <ShieldCheck size={14} />
            <span>Open for Smart Contract & DeFI Protocol Roles</span>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-textPrimary mb-4 sm:text-5xl lg:text-6xl">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium mb-6">
            {PERSONAL_INFO.role}
          </p>

          <p className="text-textSecondary max-w-2xl text-lg mb-8 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#projects" className="flex w-full items-center justify-center space-x-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto">
              <span>View Projects</span>
              <ArrowUpRight size={18} />
            </a>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center space-x-2 rounded-lg border border-borderDark bg-card px-6 py-3 font-medium text-textPrimary transition-colors hover:border-textSecondary sm:w-auto">
              <Github size={18} />
              <span>GitHub Profile</span>
            </a>
          </div>

          <div className="grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-borderDark pt-8 sm:grid-cols-3">
            <div className="col-span-2 sm:col-span-1">
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
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-accent/20 via-accentGreen/20 to-transparent blur-xl opacity-70"></div>
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-borderDark/80 bg-card shadow-2xl sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={PERSONAL_INFO.avatarUrl} 
              alt={PERSONAL_INFO.name} 
              width={460}
              height={460}
              className="block h-full w-full object-cover object-top brightness-95 contrast-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
