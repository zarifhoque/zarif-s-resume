import SectionHeading from '@/components/custom/SectionHeading';
import AwardCard from '@/components/custom/AwardCard';
import { honors } from '@/data/awards';

const AwardsSection = () => (
  <section id="awards" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Awards & Honors"
        subtitle="Recognition for academic excellence, leadership, and competitive achievement."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {honors.map((honor, index) => (
          <AwardCard key={index} honor={honor} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
