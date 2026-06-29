export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  result: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface Activity {
  title: string;
  role: string;
  description: string;
}

export const education: Education[] = [
  {
    institution: "Islamic University of Technology",
    degree: "Bachelor of Science in Computer Science and Engineering",
    duration: "2021 - Present",
    location: "Gazipur, Bangladesh",
    result: "CGPA: 3.84",
    status: "4th Year Student",
    description:
      "Pursuing a comprehensive computer science education with focus on software engineering, algorithms, and system design.",
    highlights: [
      "Strong academic performance with CGPA of 3.84",
      "Active participation in programming competitions",
      "Member of IUTCS society",
      "Completed multiple software development projects",
    ],
  },
  {
    institution: "Willes Little Flower School and College",
    degree: "Advanced Level (A Level)",
    duration: "2019 - 2021",
    location: "Dhaka, Bangladesh",
    result: "4 A*",
    status: "Completed",
    description:
      "Completed A Level education with outstanding results in Science subjects.",
    highlights: [
      "Achieved 4 A* grades",
      "Edexcel High Achiever's Award recipient",
      "Strong foundation in Mathematics and Sciences",
      "Daily Star awards recognition",
    ],
  },
  {
    institution: "Willes Little Flower School and College",
    degree: "Ordinary Level (O Level)",
    duration: "2017 - 2019",
    location: "Dhaka, Bangladesh",
    result: "7 A* 1 A",
    status: "Completed",
    description:
      "Exceptional performance in O Level examinations with world-highest achievement in Mathematics.",
    highlights: [
      "World-highest medal in O Level Mathematics",
      "7 A* and 1 A grade achievement",
      "Daily Star awards recognition",
      "Edexcel High Achiever's Award recipient",
    ],
  },
];

export const extracurriculars: Activity[] = [
  {
    title: "IUTCS Society",
    role: "Active Member",
    description:
      "Participating in programming contests, workshops, and technical events organized by the computer science society.",
  },
  {
    title: "Competitive Programming",
    role: "Active Participant",
    description:
      "Regular participation in online competitive programming contests to enhance problem-solving and algorithmic thinking skills.",
  },
  {
    title: "Bangladesh Scouts Organization",
    role: "Former Member - President's Scouts Award",
    description:
      "Achieved the highest scouting award and developed leadership, teamwork, and community service skills.",
  },
];
