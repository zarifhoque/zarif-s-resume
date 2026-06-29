export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "Chaldal.com",
    position: "Engineering Intern",
    duration: "May 2024 – July 2024",
    location: "Dhaka, Bangladesh",
    description:
      "Contributed to a production-ready e-commerce platform serving millions of users across Bangladesh.",
    responsibilities: [
      "Worked with production tech stack including F#, React, and Fable",
      "Contributed to backend system including bug fixes and feature enhancements",
      "Applied agile development workflows and collaborated with engineering mentors on sprint tasks",
      "Participated in code reviews and learned industry best practices",
      "Gained experience with large-scale distributed systems",
    ],
    technologies: ["F#", "React", "Fable", "Agile", "Git"],
    achievements: [
      "Successfully debugged and resolved critical production issues",
      "Contributed to improving system performance and user experience",
      "Received positive feedback from senior engineers and mentors",
    ],
  },
  // TODO: placeholder entry, fix dates and details
  {
    company: "Placeholder Tech Co.",
    position: "Software Engineer Intern",
    duration: "Jan 2025 – Mar 2025",
    location: "Remote",
    description:
      "Placeholder description for a second experience entry — update with real details.",
    responsibilities: [
      "Placeholder responsibility one",
      "Placeholder responsibility two",
      "Placeholder responsibility three",
    ],
    technologies: ["TypeScript", "React", "Node.js"],
    achievements: ["Placeholder achievement one", "Placeholder achievement two"],
  },
  // TODO: placeholder entry, fix dates and details
  {
    company: "Open Source Project",
    position: "Contributor",
    duration: "Sep 2023 – Dec 2023",
    location: "Remote",
    description:
      "Placeholder description for a third experience entry — update with real details.",
    responsibilities: [
      "Placeholder responsibility one",
      "Placeholder responsibility two",
    ],
    technologies: ["Python", "Git"],
    achievements: ["Placeholder achievement one"],
  },
];
