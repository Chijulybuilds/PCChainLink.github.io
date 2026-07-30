import React from 'react';
import { SKILLS } from '../data';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-borderDark">
      <h2 className="font-heading text-3xl font-bold text-textPrimary mb-12">Technical Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((group, idx) => (
          <div key={idx} className="bg-card border border-borderDark p-6 rounded-xl">
            <h3 className="text-accent font-mono text-sm uppercase tracking-wider mb-4 font-semibold">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-textSecondary text-sm font-medium flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accentGreen"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};