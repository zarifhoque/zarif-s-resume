import { Card, CardContent } from '@/components/ui/card';
import { Honor } from '@/data/awards';
import IconBox from './IconBox';

interface AwardCardProps {
  honor: Honor;
  index: number;
}

const AwardCard = ({ honor, index }: AwardCardProps) => (
  <Card
    className="group flex hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Accent spine */}
    <div className="w-1.5 bg-primary shrink-0" />
    <CardContent className="p-6 flex gap-4">
      <IconBox
        icon={honor.icon}
        className="h-fit group-hover:bg-primary/20 transition-colors duration-300"
      />
      <div>
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
            {honor.title}
          </h3>
        </div>
        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mt-1">
          {honor.issuer} · {honor.year}
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
          {honor.description}
        </p>
      </div>
    </CardContent>
  </Card>
);

export default AwardCard;
