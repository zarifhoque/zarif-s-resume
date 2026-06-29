import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projects';
import IconBox from './IconBox';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => (
  <Card className="group h-full flex flex-col hover:shadow-large transition-all duration-300 hover:-translate-y-2">
    <CardHeader>
      <div className="flex items-center justify-between mb-4">
        <IconBox icon={project.icon} className="group-hover:bg-primary/20 transition-colors duration-300" />
        <span className="font-mono text-xs font-bold text-muted-foreground">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </CardTitle>
      <CardDescription className="leading-relaxed">{project.description}</CardDescription>
    </CardHeader>

    <CardContent className="mt-auto">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <ul className="space-y-2">
          {project.highlights.map((highlight, highlightIndex) => (
            <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
              <div className="w-1.5 h-1.5 bg-primary mr-3 mt-1.5 flex-shrink-0"></div>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default ProjectCard;
