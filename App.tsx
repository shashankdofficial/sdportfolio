import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage, default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors duration-300">
      <main className="container mx-auto max-w-5xl px-4 py-8 md:py-16">
        <div className="flex flex-col gap-16 md:gap-24">
          <Hero theme={theme} toggleTheme={toggleTheme} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Education />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;