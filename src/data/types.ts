import type { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  company: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: LucideIcon;
  url?: string;
}

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
}

export interface NavLink {
  name: string;
  id: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
