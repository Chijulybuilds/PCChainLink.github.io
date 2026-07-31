import React from 'react';
import { TIMELINE } from '../data';

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="max-w-6xl mx-auto border-t border-borderDark px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="font-heading text-3xl font-bold text-textPrimary mb-12">Engineering Journey</h2>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-borderDark">
        {TIMELINE.map((item, idx) => (
          <div key={idx} className="relative flex items-start space-x-6 pl-2">
            <div className="h-3 w-3 rounded-full bg-accent border-4 border-bg mt-1.5 z-10"></div>
            <div className="bg-card border border-borderDark p-6 rounded-xl flex-1">
              <span className="text-accent font-mono text-xs font-bold">{item.year}</span>
              <h3 className="font-heading text-lg font-bold text-textPrimary mt-1 mb-2">{item.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
