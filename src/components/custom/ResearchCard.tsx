import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, ArrowUpRight } from 'lucide-react';
import { ResearchWork } from '@/data/research';

const AUTHOR_SELF = 'Zarif Safwan Hoque';

interface ResearchCardProps {
  work: ResearchWork;
  index: number;
}

const ResearchCard = ({ work, index }: ResearchCardProps) => (
  <Card
    className="group animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    <CardContent className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Reference index marker */}
        <span className="font-mono text-sm font-bold text-primary md:pt-1 shrink-0">
          [{index + 1}]
        </span>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              {work.status}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
              {work.venue} · {work.year}
            </span>
          </div>

          <h3 className="font-heading font-bold text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors duration-300">
            {work.title}
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            {work.authors.map((author, i) => (
              <span key={i}>
                <span className={author === AUTHOR_SELF ? 'font-semibold text-foreground underline' : ''}>
                  {author}
                </span>
                {i < work.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>

          <p className="text-muted-foreground leading-relaxed mt-4 text-sm md:text-base">
            <span className="font-semibold text-foreground">Abstract. </span>
            {work.abstract}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {work.keywords.map((keyword, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>

          {work.links && work.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-5">
              {work.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary hover:underline"
                >
                  <FileText className="w-4 h-4" />
                  {link.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ResearchCard;
