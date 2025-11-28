import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-cyan-500 dark:border-cyan-400 pl-4">
      {children}
    </h2>
);

const Experience: React.FC = () => {
  return (
    <section>
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 pl-8 space-y-12">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-cyan-500 dark:bg-cyan-400 border-4 border-white dark:border-slate-900"></div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            <p className="text-md font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{exp.company}</p>
            <ul className="mt-2 space-y-2 text-slate-600 dark:text-slate-400 list-disc list-inside">
                {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span key={tech} className="bg-slate-200 text-cyan-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-slate-700 dark:text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;