import SectionHeading from '@/components/custom/SectionHeading';
import ResearchCard from '@/components/custom/ResearchCard';
import StatItem from '@/components/custom/StatItem';
import { researchWorks, researchSummary } from '@/data/research';

const ResearchSection = () => (
  <section id="research" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Research & Publications"
        subtitle="Selected research works spanning natural language processing and deep learning for systems."
      />

      {/* Research at a glance */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {researchSummary.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {researchWorks.map((work, index) => (
          <ResearchCard key={index} work={work} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
