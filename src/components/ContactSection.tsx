import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin, User, Download, FileText } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+880-1317080908",
      href: "tel:+8801317080908",
      description: "Feel free to call me"
    },
    {
      icon: Mail,
      label: "Personal Email",
      value: "hoquelabid@gmail.com",
      href: "mailto:hoquelabid@gmail.com",
      description: "Primary contact email"
    },
    {
      icon: Mail,
      label: "University Email",
      value: "zarifsafwan@iut-dhaka.edu",
      href: "mailto:zarifsafwan@iut-dhaka.edu",
      description: "Academic correspondence"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      href: "https://github.com",
      description: "Check out my code repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com",
      description: "Professional networking"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      description: "Available for local opportunities"
    }
  ];

  const references = [
    {
      name: "Md. Ariful Hoque",
      title: "Joint Secretary",
      organization: "Bangladesh Investment Development Authority (BIDA)",
      relationship: "Professional Reference",
      description: "Available upon request for detailed recommendations and professional assessment."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-portfolio-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and connecting with fellow developers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {contact.label}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {contact.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={contact.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium hover:underline"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-portfolio-gradient hover:scale-105 transform transition-all duration-300 shadow-medium hover:shadow-large"
                asChild
              >
                <a href="mailto:hoquelabid@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Send Email
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transform transition-all duration-300"
                onClick={() => window.print()}
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="hover:scale-105 transform transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={20} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* References */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Professional References</h3>
            <div className="grid grid-cols-1 gap-6">
              {references.map((reference, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                        <User className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {reference.name}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground mt-1">
                          {reference.title}
                        </CardDescription>
                        <CardDescription className="text-muted-foreground">
                          {reference.organization}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{reference.relationship}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {reference.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Thank you for taking the time to review my portfolio. I look forward to hearing from you!
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:hoquelabid@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;