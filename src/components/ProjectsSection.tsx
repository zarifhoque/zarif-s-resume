import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Brain, Smartphone, ShoppingCart, MessageSquare, Palette } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Topic Modeling for Bengali Text using BERTopic",
      description: "Advanced NLP pipeline for large-scale transformer-based topic modeling of Bengali text documents.",
      technologies: ["Python", "NLP", "Streamlit", "BERTopic", "Transformers"],
      icon: Brain,
      highlights: [
        "Implemented large-scale topic modeling for Bengali text",
        "Built interactive Streamlit web application",
        "Utilized transformer-based models for enhanced accuracy"
      ]
    },
    {
      title: "SpectraNet",
      description: "Deep learning model combining LSTM, CNN, and SENet for cloud workload prediction using frequency-domain features.",
      technologies: ["Python", "PyTorch", "LSTM", "CNN", "SENet"],
      icon: Code,
      highlights: [
        "Developed hybrid neural network architecture",
        "Implemented frequency-domain feature extraction",
        "Achieved high accuracy in cloud workload prediction"
      ]
    },
    {
      title: "HealthTrack",
      description: "Comprehensive mobile fitness tracking application with real-time data synchronization and personalized insights.",
      technologies: ["React Native", "Firebase", "Mobile Development"],
      icon: Smartphone,
      highlights: [
        "Cross-platform mobile application",
        "Real-time data synchronization with Firebase",
        "Personalized fitness tracking and analytics"
      ]
    },
    {
      title: "ShopSmart",
      description: "Dynamic e-commerce web application with interactive product catalog and shopping cart functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      icon: ShoppingCart,
      highlights: [
        "Dynamic product catalog with search and filtering",
        "Interactive shopping cart and checkout process",
        "Responsive design for all device types"
      ]
    },
    {
      title: "Zibra",
      description: "Anonymous blog sharing platform built with JavaFX, featuring secure posting and community engagement.",
      technologies: ["JavaFX", "MySQL", "Java", "Database"],
      icon: MessageSquare,
      highlights: [
        "Anonymous blog posting and sharing system",
        "MySQL database integration for data persistence",
        "User-friendly JavaFX desktop interface"
      ]
    },
    {
      title: "PoorCAD",
      description: "Lightweight drawing application built with SFML, providing essential CAD-like functionality for basic design work.",
      technologies: ["SFML", "C++", "C", "Graphics"],
      icon: Palette,
      highlights: [
        "Lightweight CAD-like drawing application",
        "Built with SFML graphics library",
        "Efficient C++ implementation for performance"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-portfolio-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, mobile apps, machine learning, and desktop applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Github size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={18} />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;