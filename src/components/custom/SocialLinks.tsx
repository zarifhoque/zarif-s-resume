import { socialLinks } from '@/data/contact';

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
}

const SocialLinks = ({ iconSize = 24, className = '' }: SocialLinksProps) => (
  <div className={`flex justify-center gap-4 ${className}`}>
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
      >
        <link.icon size={iconSize} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
