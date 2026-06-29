import { useRef } from 'react';
import SectionHeading from '@/components/custom/SectionHeading';
import ExperienceCard from '@/components/custom/ExperienceCard';
import GrowingPlant from '@/components/custom/GrowingPlant';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { experiences } from '@/data/experience';

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(timelineRef);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="Work Experience" subtitle="Click a card to reveal details" />

        <div className="max-w-5xl mx-auto flex gap-6 lg:gap-10">
          {/* Scroll-driven growing plant, beside the timeline */}
          <aside className="hidden lg:block w-44 shrink-0">
            <div className="sticky top-28">
              <GrowingPlant progress={progress} />
            </div>
          </aside>

          {/* Timeline */}
          <div ref={timelineRef} className="flex-1 relative">
            <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-foreground hidden sm:block" />

            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <div key={index} className="relative sm:pl-12">
                  {/* Timeline node */}
                  <div className="absolute left-0 top-4 w-4 h-4 bg-primary border-2 border-foreground hidden sm:block" />
                  <ExperienceCard experience={experience} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
