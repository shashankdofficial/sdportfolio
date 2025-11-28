import React from 'react';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-cyan-500 dark:border-cyan-400 pl-4">
      {children}
    </h2>
);

const Education: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-cyan-600 dark:text-cyan-400">{edu.institution}</p>
                <p className="text-slate-500 dark:text-slate-500 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Achievements</SectionTitle>
          <div className="space-y-4">
            {ACHIEVEMENTS_DATA.map((ach, index) => (
               <div key={index}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{ach.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{ach.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;