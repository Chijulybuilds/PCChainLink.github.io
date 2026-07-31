import React from 'react';
import { PERSONAL_INFO } from '../data';
import { BookOpen, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="max-w-6xl mx-auto border-t border-borderDark px-4 py-12 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-textPrimary">Let's connect</h3>
          <p className="text-textSecondary text-sm">Building smart contracts or interested in collaboration?</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" aria-label="Visit GitHub profile" className="p-3 bg-card border border-borderDark rounded-lg text-textSecondary hover:text-textPrimary transition-colors">
            <Github size={20} />
          </a>
          <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile" className="p-3 bg-card border border-borderDark rounded-lg text-textSecondary hover:text-textPrimary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={PERSONAL_INFO.mediumUrl} target="_blank" rel="noreferrer" aria-label="Read Medium articles" className="p-3 bg-card border border-borderDark rounded-lg text-textSecondary hover:text-textPrimary transition-colors">
            <BookOpen size={20} />
          </a>
          <a href={PERSONAL_INFO.xUrl} target="_blank" rel="noreferrer" aria-label="Visit X profile" className="p-3 bg-card border border-borderDark rounded-lg text-textSecondary hover:text-textPrimary transition-colors">
            <Twitter size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Send an email" className="p-3 bg-card border border-borderDark rounded-lg text-textSecondary hover:text-textPrimary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-borderDark/50 text-center text-xs text-textSecondary">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Smart Contract & DeFi Engineer.
      </div>
    </footer>
  );
};
