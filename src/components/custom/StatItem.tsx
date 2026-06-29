import { Stat } from '@/data/about';

interface StatItemProps {
  stat: Stat;
}

const StatItem = ({ stat }: StatItemProps) => (
  <div className="border-2 border-foreground p-4 text-center bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group">
    <div className="font-heading font-black text-3xl md:text-4xl leading-none">
      {stat.value}
    </div>
    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground mt-2">
      {stat.label}
    </div>
  </div>
);

export default StatItem;
