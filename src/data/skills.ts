import { Code, Wrench, Database, Cloud, Layers, type LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["JavaFX", "Spring Boot", "React Native", "PyTorch"],
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Web Technologies",
    icon: Wrench,
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Oracle", "Firebase"],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Docker", "Postman", "Figma", "VS Code", "IntelliJ IDEA", "Android Studio"],
    color: "bg-red-500/10 text-red-600",
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["GitHub Actions", "Jenkins", "Agile/Scrum", "Firebase", "Heroku", "AWS"],
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

export const operatingSystems = ["Linux", "Windows"];

export const relevantCoursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
  "Web Technologies",
  "Machine Learning",
  "Artificial Intelligence",
  "Mobile Application Development",
  "Cloud Computing",
  "DevOps Practices",
];
