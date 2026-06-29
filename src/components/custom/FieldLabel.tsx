import { cn } from '@/lib/utils';

interface FieldLabelProps {
  children: React.ReactNode;
  className?: string;
}

const FieldLabel = ({ children, className }: FieldLabelProps) => (
  <h4
    className={cn(
      'font-mono text-xs font-bold uppercase tracking-widest text-foreground mb-3 border-b border-border pb-2',
      className
    )}
  >
    {children}
  </h4>
);

export default FieldLabel;
