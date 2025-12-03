import { ReactNode } from 'react';

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  image: string;
  title: string;
  category: string;
  link: string;
}

export interface CertificationItem {
  id: string;
  image: string;
  title: string;
  issuer: string;
  date: string;
  subtitle:string
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  isOpen?: boolean;
}