import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-borderDark z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 font-heading font-bold text-xl text-textPrimary tracking-tight">
          <Terminal className="text-accent" size={24} />
          <span>Chijuly.eth</span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textSecondary">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#journey" className="hover:text-accent transition-colors">Journey</a>
          <a href="#contact" className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-textSecondary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-borderDark px-6 py-4 space-y-4 text-textSecondary flex flex-col">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#journey" onClick={() => setIsOpen(false)}>Journey</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-accent">Contact</a>
        </div>
      )}
    </nav>
  );
};