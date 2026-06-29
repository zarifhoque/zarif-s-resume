interface SkillMarqueeProps {
  skills: string[];
}

const chipColor = (i: number) => {
  if (i % 3 === 0) return 'bg-primary text-primary-foreground';
  if (i % 3 === 1) return 'bg-secondary text-secondary-foreground';
  return 'bg-background text-foreground';
};

const SkillMarquee = ({ skills }: SkillMarqueeProps) => {
  const half = Math.ceil(skills.length / 2);
  const rows = [skills.slice(0, half), skills.slice(half)];

  return (
    <div className="border-y-2 border-foreground bg-card">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`marquee-mask overflow-hidden py-4 ${
            rowIndex === 0 ? 'border-b-2 border-foreground' : ''
          }`}
        >
          <div
            className={`flex w-max gap-4 ${
              rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
            }`}
          >
            {[...row, ...row].map((skill, i) => (
              <span
                key={i}
                className={`font-mono text-sm font-bold uppercase tracking-wide whitespace-nowrap px-5 py-2 border-2 border-foreground ${chipColor(i)}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillMarquee;
