import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { MapPin, MoveHorizontal } from 'lucide-react';
import { Experience } from '@/data/experience';
import FieldLabel from './FieldLabel';
import TechBadges from './TechBadges';
import HighlightList from './HighlightList';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card
        className="animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              {experience.duration}
            </span>
            <h3 className="font-heading font-black uppercase italic text-2xl md:text-3xl leading-tight mt-1">
              {experience.position}
            </h3>
            <p className="font-heading font-bold italic text-lg text-secondary mt-1">
              {experience.company}
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              {experience.description}
            </p>
          </CardHeader>
        </CollapsibleTrigger>

        <CardContent className="space-y-4">
          <div>
            <FieldLabel>Technologies Used</FieldLabel>
            <TechBadges items={experience.technologies} />
          </div>

          <CollapsibleContent className="space-y-6 overflow-hidden">
            <HighlightList title="Key Responsibilities" items={experience.responsibilities} />
            <HighlightList
              title="Key Achievements"
              items={experience.achievements}
              dotClassName="bg-secondary"
            />
          </CollapsibleContent>

          <div className="flex justify-end">
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                {isOpen ? 'Hide Details' : 'View Details'}
                <MoveHorizontal className="w-4 h-4" />
              </button>
            </CollapsibleTrigger>
          </div>
        </CardContent>
      </Card>
    </Collapsible>
  );
};

export default ExperienceCard;
