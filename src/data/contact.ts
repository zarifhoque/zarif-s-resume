import { Mail, Phone, Github, Linkedin, MapPin, type LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  description: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: "Phone",
    value: "+880-1317080908",
    href: "tel:+8801317080908",
    description: "Feel free to call me",
  },
  {
    icon: Mail,
    label: "Personal Email",
    value: "hoquelabid@gmail.com",
    href: "mailto:hoquelabid@gmail.com",
    description: "Primary contact email",
  },
  {
    icon: Mail,
    label: "University Email",
    value: "zarifsafwan@iut-dhaka.edu",
    href: "mailto:zarifsafwan@iut-dhaka.edu",
    description: "Academic correspondence",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View Projects",
    href: "https://github.com/zarifhoque",
    description: "Check out my code repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/zarif-safwan-hoque-b394a623a/",
    description: "Professional networking",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    description: "Available for local opportunities",
  },
];

export const socialLinks: SocialLink[] = [
  { icon: Github, label: "GitHub", href: "https://github.com/zarifhoque" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zarif-safwan-hoque-b394a623a/",
  },
  { icon: Mail, label: "Email", href: "mailto:hoquelabid@gmail.com" },
];
