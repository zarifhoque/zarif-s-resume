import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Islamic University of Technology",
      degree: "Bachelor of Science in Computer Science and Engineering",
      duration: "2021 - Present",
      location: "Gazipur, Bangladesh",
      result: "CGPA: 3.84",
      status: "4th Year Student",
      description: "Pursuing a comprehensive computer science education with focus on software engineering, algorithms, and system design.",
      highlights: [
        "Strong academic performance with CGPA of 3.84",
        "Active participation in programming competitions",
        "Member of IUTCS society",
        "Completed multiple software development projects"
      ]
    },
    {
      institution: "Willes Little Flower School and College",
      degree: "Advanced Level (A Level)",
      duration: "2019 - 2021",
      location: "Dhaka, Bangladesh",
      result: "4 A*",
      status: "Completed",
      description: "Completed A Level education with outstanding results in Science subjects.",
      highlights: [
        "Achieved 4 A* grades",
        "Edexcel High Achiever's Award recipient",
        "Strong foundation in Mathematics and Sciences",
        "Daily Star awards recognition"
      ]
    },
    {
      institution: "Willes Little Flower School and College",
      degree: "Ordinary Level (O Level)",
      duration: "2017 - 2019",
      location: "Dhaka, Bangladesh",
      result: "7 A* 1 A",
      status: "Completed",
      description: "Exceptional performance in O Level examinations with world-highest achievement in Mathematics.",
      highlights: [
        "World-highest medal in O Level Mathematics",
        "7 A* and 1 A grade achievement",
        "Daily Star awards recognition",
        "Edexcel High Achiever's Award recipient"
      ]
    }
  ];

  const extracurriculars = [
    {
      title: "IUTCS Society",
      role: "Active Member",
      description: "Participating in programming contests, workshops, and technical events organized by the computer science society."
    },
    {
      title: "Competitive Programming",
      role: "Active Participant",
      description: "Regular participation in online competitive programming contests to enhance problem-solving and algorithmic thinking skills."
    },
    {
      title: "Bangladesh Scouts Organization",
      role: "Former Member - President's Scouts Award",
      description: "Achieved the highest scouting award and developed leadership, teamwork, and community service skills."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-portfolio-gradient bg-clip-text text-transparent">
            Education & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic achievements and extracurricular involvement that shaped my technical and personal development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground mt-1">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <Badge variant="default" className="bg-portfolio-gradient">
                      <Award className="w-3 h-3 mr-1" />
                      {edu.result}
                    </Badge>
                    <Badge variant="outline">
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Extracurricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {activity.title}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {activity.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;