import { BrainCircuit, Network, Cloud, Boxes, type LucideIcon } from 'lucide-react';

export interface ResearchInterest {
  label: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export const bio = [
  "I am a final-year Computer Science and Engineering student at the Islamic University of Technology, working at the intersection of machine learning research and large-scale software engineering.",
  "My work spans natural language processing for low-resource languages, deep learning for systems problems, and building production-grade software. I enjoy translating research ideas into robust, well-engineered systems.",
];

export const researchInterests: ResearchInterest[] = [
  { label: "Natural Language Processing", icon: BrainCircuit },
  { label: "Deep Learning", icon: Network },
  { label: "Cloud & Distributed Systems", icon: Cloud },
  { label: "Machine Learning Systems", icon: Boxes },
];

export const stats: Stat[] = [
  { value: "3.84", label: "CGPA / 4.00" },
  { value: "2", label: "Research Works" },
  { value: "6+", label: "Projects Shipped" },
  { value: "4th", label: "Year CSE" },
];
