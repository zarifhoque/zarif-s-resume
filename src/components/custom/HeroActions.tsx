import { Button } from '@/components/ui/button';
import { ChevronRight, Download, Mail } from 'lucide-react';

const HeroActions = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
    <Button
      asChild
      className="w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
    >
      <a href="#research">
        View My Research
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
    <Button
      asChild
      variant="outline"
      className="w-full sm:w-auto bg-transparent text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center gap-2"
    >
      <a href="/pdfs/cv.pdf" download>
        <Download className="w-4 h-4" />
        Download CV
      </a>
    </Button>
    <Button
      asChild
      variant="ghost"
      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center justify-center gap-2"
    >
      <a href="mailto:hoquelabid@gmail.com">
        <Mail className="w-4 h-4" />
        Get in Touch
      </a>
    </Button>
  </div>
);

export default HeroActions;
