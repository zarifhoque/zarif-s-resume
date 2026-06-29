import { Award, Medal, Star, Trophy, type LucideIcon } from 'lucide-react';

export interface Honor {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: LucideIcon;
}

export const honors: Honor[] = [
  {
    title: "World-Highest Medal — O Level Mathematics",
    issuer: "Pearson Edexcel",
    year: "2019",
    description:
      "Awarded for achieving the highest mark worldwide in Edexcel O Level Mathematics.",
    icon: Medal,
  },
  {
    title: "Edexcel High Achiever's Award",
    issuer: "Pearson Edexcel",
    year: "2019 & 2021",
    description:
      "Recognized for outstanding academic performance across O Level and A Level examinations.",
    icon: Star,
  },
  {
    title: "President's Scout Award",
    issuer: "Bangladesh Scouts",
    year: "2018",
    description:
      "Highest scouting honor, awarded for leadership, service, and sustained excellence.",
    icon: Trophy,
  },
  {
    title: "Dean's Academic Standing",
    issuer: "Islamic University of Technology",
    year: "2021 - Present",
    description:
      "Maintained a CGPA of 3.84 throughout the undergraduate program in CSE.",
    icon: Award,
  },
];
