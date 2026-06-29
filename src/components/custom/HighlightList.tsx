import { cn } from '@/lib/utils';
import FieldLabel from './FieldLabel';

interface HighlightListProps {
  title: string;
  items: string[];
  dotClassName?: string;
}

const HighlightList = ({ title, items, dotClassName = 'bg-primary' }: HighlightListProps) => (
  <div>
    <FieldLabel>{title}</FieldLabel>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <div className={cn('w-2 h-2 mr-3 mt-2 flex-shrink-0', dotClassName)} />
          <span className="text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default HighlightList;
