import React from 'react';
import { PROJECTS_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-cyan-500 dark:border-cyan-400 pl-4">
      {children}
    </h2>
);

const Projects: React.FC = () => {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col hover:transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-3">{project.platform}</p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{project.overview}</p>
             <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Key Features:</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 list-disc list-inside mb-4 flex-grow">
              {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
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

export default Projects;