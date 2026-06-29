import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Education } from '@/data/education';
import IconBox from './IconBox';
import HighlightList from './HighlightList';

interface EducationCardProps {
  edu: Education;
  index: number;
}

const EducationCard = ({ edu, index }: EducationCardProps) => (
  <Card
    className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardHeader>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <IconBox icon={GraduationCap} className="group-hover:bg-primary/20 transition-colors duration-300" />
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
              {edu.degree}
            </CardTitle>
            <CardDescription className="text-lg font-semibold text-foreground mt-1">
              {edu.institution}
            </CardDescription>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{edu.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{edu.location}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Badge variant="default" className="bg-primary text-primary-foreground">
          <Award className="w-3 h-3 mr-1" />
          {edu.result}
        </Badge>
        <Badge variant="outline">{edu.status}</Badge>
      </div>

      <p className="text-muted-foreground mt-4 leading-relaxed">{edu.description}</p>
    </CardHeader>

    <CardContent>
      <HighlightList title="Key Highlights" items={edu.highlights} />
    </CardContent>
  </Card>
);

export default EducationCard;
