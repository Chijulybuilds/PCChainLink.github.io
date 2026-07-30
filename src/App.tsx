import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-textPrimary font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;