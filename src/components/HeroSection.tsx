import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin, Download, FileText } from 'lucide-react';

const HeroSection = () => {
  const contactInfo = [
    { icon: Phone, text: '+880-1317080908', href: 'tel:+8801317080908' },
    { icon: Mail, text: 'hoquelabid@gmail.com', href: 'mailto:hoquelabid@gmail.com' },
    { icon: Mail, text: 'zarifsafwan@iut-dhaka.edu', href: 'mailto:zarifsafwan@iut-dhaka.edu' },
    { icon: Github, text: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com' }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-portfolio-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold shadow-large animate-float">
            ZSH
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-portfolio-gradient bg-clip-text text-transparent">
              Zarif Safwan Hoque
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            4th Year Computer Science and Engineering Student
          </h2>

          {/* Professional Summary */}
          <Card className="p-8 mb-8 shadow-medium hover:shadow-large transition-shadow duration-300 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground">
              Motivated Associate Software Engineer with a strong foundation in Java and Spring Framework, 
              complemented by experience in full-stack web development. Skilled in Agile methodologies, 
              collaborative teamwork, and delivering high-quality, maintainable code. Quick learner with 
              excellent problem-solving abilities and a keen attention to detail. Eager to contribute 
              technical expertise and grow within a dynamic software development environment.
            </p>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-medium group"
              >
                <contact.icon size={18} className="group-hover:animate-bounce" />
                <span className="text-sm font-medium">{contact.text}</span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-portfolio-gradient hover:scale-105 transform transition-all duration-300 shadow-medium hover:shadow-large"
            >
              <FileText className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:scale-105 transform transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;