interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="border-l-4 border-primary pl-6 mb-16">
      <h2 className="font-heading font-black italic uppercase text-4xl md:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
