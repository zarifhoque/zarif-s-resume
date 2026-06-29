import { Badge } from '@/components/ui/badge';

interface TechBadgesProps {
  items: string[];
}

const TechBadges = ({ items }: TechBadgesProps) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item, index) => (
      <Badge
        key={index}
        variant="outline"
        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      >
        {item}
      </Badge>
    ))}
  </div>
);

export default TechBadges;
