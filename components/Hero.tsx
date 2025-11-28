import React from 'react';
import { PROFILE } from '../constants';
import { MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GithubIcon, SunIcon, MoonIcon } from './icons';

interface HeroProps {
  theme: string;
  toggleTheme: () => void;
}

const Hero: React.FC<HeroProps> = ({ theme, toggleTheme }) => {
  return (
    <section className="relative flex flex-col md:flex-row items-start gap-8 md:gap-12">
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-full">
        <img
          src={PROFILE.image}
          alt={PROFILE.name}
          className="rounded-full object-cover object-center w-full h-full border-4 border-slate-300 dark:border-slate-700 shadow-lg"
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">{PROFILE.name}</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">{PROFILE.title}</h2>
        <div className="space-y-3 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <MailIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <a href={`mailto:${PROFILE.contact.email}`} className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">{PROFILE.contact.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>{PROFILE.contact.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <LocationIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>{PROFILE.contact.location}</span>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <GithubIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
       <button
        onClick={toggleTheme}
        className="absolute top-0 right-0 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
      </button>
    </section>
  );
};

export default Hero;