import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Brain, Code, Smartphone, ShoppingCart, MessageSquare, Palette } from 'lucide-react';

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, mobile apps, machine learning, and desktop applications.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border-0 shadow-md bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <project.icon className="w-6 h-6 text-primary" />
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
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 mt-2"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background hidden md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background hidden md:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;