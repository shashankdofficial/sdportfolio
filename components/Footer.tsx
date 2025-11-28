import React from 'react';
import { PROFILE } from '../constants';
import { LinkedInIcon, GithubIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 mt-16 pt-8 text-center text-slate-500">
      <div className="flex justify-center items-center gap-6 mb-6">
          <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <LinkedInIcon className="w-7 h-7" />
          </a>
          <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <GithubIcon className="w-7 h-7" />
          </a>
           <a href={`mailto:${PROFILE.contact.email}`} className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <MailIcon className="w-7 h-7" />
          </a>
      </div>
      <p>
        &copy; {currentYear} {PROFILE.name}. All Rights Reserved.
      </p>
      <p className="text-xs mt-2">
        Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;