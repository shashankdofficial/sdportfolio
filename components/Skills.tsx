import React from 'react';
import { SKILLS_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-cyan-500 dark:border-cyan-400 pl-4">
      {children}
    </h2>
);

const Skills: React.FC = () => {
  return (
    <section>
      <SectionTitle>Technical & Soft Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.category} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300">
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-cyan-500 dark:text-cyan-400 mr-2">◆</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;