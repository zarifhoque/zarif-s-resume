import {
  Smartphone,
  ShoppingCart,
  MessageSquare,
  Palette,
  type LucideIcon,
} from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  highlights: string[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "HealthTrack",
    description:
      "Comprehensive mobile fitness tracking application with real-time data synchronization and personalized insights.",
    technologies: ["React Native", "Firebase", "Mobile Development"],
    icon: Smartphone,
    highlights: [
      "Cross-platform mobile application",
      "Real-time data synchronization with Firebase",
      "Personalized fitness tracking and analytics",
    ],
  },
  {
    title: "ShopSmart",
    description:
      "Dynamic e-commerce web application with interactive product catalog and shopping cart functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    icon: ShoppingCart,
    highlights: [
      "Dynamic product catalog with search and filtering",
      "Interactive shopping cart and checkout process",
      "Responsive design for all device types",
    ],
  },
  {
    title: "Zibra",
    description:
      "Anonymous blog sharing platform built with JavaFX, featuring secure posting and community engagement.",
    technologies: ["JavaFX", "MySQL", "Java", "Database"],
    icon: MessageSquare,
    highlights: [
      "Anonymous blog posting and sharing system",
      "MySQL database integration for data persistence",
      "User-friendly JavaFX desktop interface",
    ],
  },
  {
    title: "PoorCAD",
    description:
      "Lightweight drawing application built with SFML, providing essential CAD-like functionality for basic design work.",
    technologies: ["SFML", "C++", "C", "Graphics"],
    icon: Palette,
    highlights: [
      "Lightweight CAD-like drawing application",
      "Built with SFML graphics library",
      "Efficient C++ implementation for performance",
    ],
  },
];
