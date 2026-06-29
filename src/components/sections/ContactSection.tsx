import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Download } from 'lucide-react';
import SectionHeading from '@/components/custom/SectionHeading';
import ContactCard from '@/components/custom/ContactCard';
import SocialLinks from '@/components/custom/SocialLinks';
import { contactInfo } from '@/data/contact';

const ContactSection = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Get In Touch"
        subtitle="I'm always open to discussing new opportunities and connecting with fellow developers."
      />

      <div className="max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:scale-105 transform transition-all duration-300 shadow-medium hover:shadow-large"
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
              asChild
            >
              <a href="/pdfs/cv.pdf" download>
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transform transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/zarif-safwan-hoque-b394a623a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <SocialLinks />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
