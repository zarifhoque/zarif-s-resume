import SectionHeading from '@/components/custom/SectionHeading';
import EducationCard from '@/components/custom/EducationCard';
import ActivityCard from '@/components/custom/ActivityCard';
import { education, extracurriculars } from '@/data/education';

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Education & Activities"
        subtitle="Academic achievements and extracurricular involvement that shaped my technical and personal development."
      />

      {/* Academic Background */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="font-heading font-black italic uppercase text-2xl mb-8">Academic Background</h3>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>

      {/* Extracurricular Activities */}
      <div className="max-w-4xl mx-auto">
        <h3 className="font-heading font-black italic uppercase text-2xl mb-8">Extracurricular Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extracurriculars.map((activity, index) => (
            <ActivityCard key={index} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
