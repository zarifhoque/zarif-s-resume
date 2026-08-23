import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, Database, Cloud, Layers, BookOpen } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: ["JavaFX", "Spring Boot", "React Native", "PyTorch"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Web Technologies",
      icon: Wrench,
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "Oracle", "Firebase"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "Docker", "Postman", "Figma", "VS Code", "IntelliJ IDEA", "Android Studio"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["GitHub Actions", "Jenkins", "Agile/Scrum", "Firebase", "Heroku", "AWS"],
      color: "bg-cyan-500/10 text-cyan-600"
    }
  ];

  const relevantCoursework = [
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
    "DevOps Practices"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-portfolio-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 hover:scale-105 transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operating Systems */}
        <Card className="mb-8 hover:shadow-medium transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              Operating Systems
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Linux", "Windows"].map((os, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {os}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Relevant Coursework */}
        <Card className="hover:shadow-medium transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              Relevant Coursework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {relevantCoursework.map((course, index) => (
                <div 
                  key={index}
                  className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors duration-300 border border-transparent hover:border-primary/20"
                >
                  <span className="text-sm font-medium">{course}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;