import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin, Download, FileText } from 'lucide-react';

const HeroSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contactInfo = [
    { icon: Phone, text: '+880-1317080908', href: 'tel:+8801317080908' },
    { icon: Mail, text: 'hoquelabid@gmail.com', href: 'mailto:hoquelabid@gmail.com' },
    { icon: Mail, text: 'zarifsafwan@iut-dhaka.edu', href: 'mailto:zarifsafwan@iut-dhaka.edu' },
    { icon: Github, text: 'GitHub', href: 'https://github.com/zarifhoque' },
    { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/zarif-safwan-hoque-b394a623a/' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 relative overflow-hidden bg-background"
    >
      {/* SVG Curved Arrow */}
      {/* <svg
        className="absolute left-20 top-1/2 transform -translate-y-1/2 w-72 h-40 opacity-40 pointer-events-none"
        viewBox="0 0 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M10 140 C80 40, 220 40, 290 120"
          stroke="#1C4B43"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <polygon points="285,115 295,120 285,125" fill="#1C4B43" />
      </svg> */}


      {/* Left: Info */}
      <div className="max-w-xl text-center md:text-left space-y-20">
        
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <p className="text-base text-foreground leading-relaxed">
            Enthusiastic Computer Science student with strong foundations in
            algorithms, software engineering, and system design. Skilled across
            web, mobile, and data-driven systems — passionate about crafting
            beautiful, functional experiences.
          </p>
        </Card>

        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-primary">04</span>
          <span className="uppercase text-sm tracking-wide text-muted-foreground">
            Years <br /> Experience
          </span>
        </div>
      </div>

      <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative mb-12 md:mb-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
    >
      <img
        src="../public/images/zarif.webp"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </motion.div>


    {/* Right: Info */}
      <div className="max-w-xl text-center md:text-left space-y-20">
        

        {/* Summary Card */}
        

        {/* Contact Links (with dim effect) */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                opacity:
                  hoveredIndex === null || hoveredIndex === index ? 1 : 0.3,
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
            >
              <contact.icon size={18} />
              <span className="text-sm font-medium">{contact.text}</span>
            </motion.a>
          ))}
        </div>

        

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
          <Button
            size="lg"
            className="bg-portfolio-gradient hover:scale-105 transform transition-all duration-300 shadow-medium hover:shadow-large"
            asChild
          >
            <a
              href="https://github.com/zarifhoque?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2" size={20} />
              View Projects
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:scale-105 transform transition-all duration-300"
            asChild
          >
            <a href="/pdfs/cv.pdf" download>
              <Download className="mr-2" size={20} />
              Download CV
            </a>
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
