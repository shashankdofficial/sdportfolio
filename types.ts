import React from 'react';

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  platform: string;
  overview: string;
  features: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface Achievement {
    name: string;
    issuer: string;
}

export interface ServicePackage {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  delivery?: string;
  cost: string;
}

export interface ServiceCategoryData {
  title: string;
  packages: ServicePackage[];
}