// src/app/models/portfolio.model.ts

export interface Experience {
  role: string;
  company: string;
  period: string;
  current: boolean;
  tags: string[];
  bullets: string[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
  tags: string[];
  highlight: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Stat {
  value: string;
  label: string;
}
