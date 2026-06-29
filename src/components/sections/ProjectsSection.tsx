import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SectionHeading from '@/components/custom/SectionHeading';
import ProjectCard from '@/components/custom/ProjectCard';
import { projects } from '@/data/projects';

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Featured Projects"
        subtitle="A showcase of engineering projects spanning web, mobile, and desktop applications."
      />

      <Carousel opts={{ align: 'start', loop: true }} className="max-w-6xl mx-auto">
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} index={index} total={projects.length} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-2 border-foreground rounded-none" />
        <CarouselNext className="border-2 border-foreground rounded-none" />
      </Carousel>
    </div>
  </section>
);

export default ProjectsSection;
