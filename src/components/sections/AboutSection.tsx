import SectionHeading from '@/components/custom/SectionHeading';
import StatItem from '@/components/custom/StatItem';
import { bio, researchInterests, stats } from '@/data/about';

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="About Me" subtitle="Researcher, engineer, lifelong learner." />

      <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {/* Bio + research interests */}
        <div className="lg:col-span-3 space-y-6">
          {bio.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="pt-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground mb-4 border-b border-border pb-2">
              Research Interests
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {researchInterests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-3 border-2 border-foreground p-3 bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
                >
                  <interest.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground shrink-0" />
                  <span className="font-medium text-sm">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-24">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
