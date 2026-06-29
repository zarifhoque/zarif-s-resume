import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import { Activity } from '@/data/education';

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => (
  <Card
    className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
  >
    <CardHeader>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
          <Award className="w-5 h-5 text-accent" />
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
          {activity.title}
        </CardTitle>
      </div>
      <Badge variant="secondary" className="w-fit">
        {activity.role}
      </Badge>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
    </CardContent>
  </Card>
);

export default ActivityCard;
