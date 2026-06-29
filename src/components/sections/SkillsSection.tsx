import SectionHeading from '@/components/custom/SectionHeading';
import SkillMarquee from '@/components/custom/SkillMarquee';
import { skillCategories } from '@/data/skills';

const allSkills = Array.from(
  new Set(skillCategories.flatMap((category) => category.skills))
);

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Technical Skills"
        subtitle="The languages, frameworks, and tools I build with — on a loop."
      />
    </div>

    {/* Full-bleed scrolling marquee of every skill */}
    <SkillMarquee skills={allSkills} />
  </section>
);

export default SkillsSection;
