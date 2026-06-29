import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactInfo } from '@/data/contact';

interface ContactCardProps {
  contact: ContactInfo;
  index: number;
}

const ContactCard = ({ contact, index }: ContactCardProps) => {
  const isExternal = contact.href.startsWith('http');

  return (
    <Card
      className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
            <contact.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
              {contact.label}
            </CardTitle>
            <CardDescription className="text-sm">{contact.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <a
          href={contact.href}
          className="text-foreground hover:text-primary transition-colors duration-300 font-medium hover:underline break-all"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {contact.value}
        </a>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
