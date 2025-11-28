import React from 'react';
import { SERVICES_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-cyan-500 dark:border-cyan-400 pl-4">
      {children}
    </h2>
);

const Services: React.FC = () => {
  return (
    <section>
      <SectionTitle>Services & Pricing</SectionTitle>
      <div className="space-y-12">
        {SERVICES_DATA.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.packages.map((pkg) => (
                <div key={pkg.title} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col hover:shadow-cyan-500/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{pkg.title}</h4>
                  {pkg.subtitle && <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{pkg.subtitle}</p>}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{pkg.description}</p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 list-disc list-inside mb-4 text-sm">
                    {pkg.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                  <div className="mt-auto pt-2">
                    {pkg.delivery && (
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Delivery: <span className="font-normal">{pkg.delivery}</span>
                        </p>
                    )}
                    <p className="text-md font-bold text-slate-800 dark:text-slate-200 mt-2">
                        {pkg.cost}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;