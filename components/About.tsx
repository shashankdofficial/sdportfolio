import React from 'react';
import { PROFILE } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-cyan-500 dark:border-cyan-400 pl-4">
    {children}
  </h2>
);

const About: React.FC = () => {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
        {PROFILE.bio}
      </p>
    </section>
  );
};

export default About;