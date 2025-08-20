import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Chaldal.com",
      position: "Engineering Intern",
      duration: "May 2024 – July 2024",
      location: "Dhaka, Bangladesh",
      description: "Contributed to a production-ready e-commerce platform serving millions of users across Bangladesh.",
      responsibilities: [
        "Worked with production tech stack including F#, React, and Fable",
        "Contributed to backend system including bug fixes and feature enhancements",
        "Applied agile development workflows and collaborated with engineering mentors on sprint tasks",
        "Participated in code reviews and learned industry best practices",
        "Gained experience with large-scale distributed systems"
      ],
      technologies: ["F#", "React", "Fable", "Agile", "Git"],
      achievements: [
        "Successfully debugged and resolved critical production issues",
        "Contributed to improving system performance and user experience",
        "Received positive feedback from senior engineers and mentors"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-portfolio-gradient bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience in software development and engineering internships.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in mb-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {experience.position}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground mt-1">
                        {experience.company}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {experience.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies Used */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
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

export default ExperienceSection;