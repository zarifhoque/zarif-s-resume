import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconBoxProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

const IconBox = ({ icon: Icon, className, iconClassName }: IconBoxProps) => (
  <div className={cn('p-3 bg-primary/10', className)}>
    <Icon className={cn('w-6 h-6 text-primary', iconClassName)} />
  </div>
);

export default IconBox;
