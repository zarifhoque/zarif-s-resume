import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OutroSection = () => (
  <section className="py-24 bg-foreground text-background">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <div className="inline-flex p-5 border-2 border-background mb-8">
        <Coffee className="w-10 h-10 animate-float" />
      </div>

      <h2 className="font-heading font-black italic uppercase text-4xl md:text-5xl leading-tight">
        You made it to the end
      </h2>

      <p className="mt-5 text-lg text-background/80 leading-relaxed">
        That was a lot of scrolling. Thanks for reading every last line — the
        coffee&apos;s on me. If anything here caught your eye, let&apos;s talk
        over a cup.
      </p>

      <Button
        asChild
        size="lg"
        className="mt-8 bg-primary text-primary-foreground rounded-none border-2 border-background hover:bg-background hover:text-foreground transition-colors duration-300"
      >
        <a href="mailto:hoquelabid@gmail.com?subject=Coffee%3F%20%E2%98%95">
          <Coffee className="mr-2" size={20} />
          Let&apos;s grab a coffee
        </a>
      </Button>

      <p className="mt-12 font-mono text-xs uppercase tracking-widest text-background/50">
        © 2026 Zarif Safwan Hoque · Designed &amp; built with React
      </p>
    </div>
  </section>
);

export default OutroSection;
