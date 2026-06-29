import TypewriterText from '@/components/custom/TypeWriterText';
import DecorativeOrb from '@/components/custom/DecorativeOrb';
import ScrollIndicator from '@/components/custom/ScrollIndicator';
import HeroActions from '@/components/custom/HeroActions';
import { OrbPosition } from '@/types/DecorativeOrbTypes';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 dark:from-background dark:via-background dark:to-background flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      <DecorativeOrb position={OrbPosition.TOP_LEFT} color="bg-purple-200 dark:bg-purple-800" />
      <DecorativeOrb position={OrbPosition.BOTTOM_RIGHT} color="bg-cyan-200 dark:bg-cyan-800" />
      <div className="absolute inset-x-0 bottom-0 h-40 sm:h-56 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 font-mono uppercase tracking-widest">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Open for Research &amp; Engineering Roles
        </div>
        <div className="text-sm sm:text-base text-secondary font-medium mb-2 sm:mb-4 font-mono uppercase tracking-widest">
          Hello, I'm
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-4">
          <span className="text-foreground">Zarif </span>
          <span className="text-secondary">Safwan </span>
          <span className="text-foreground">Hoque</span>
        </h1>
        <TypewriterText />
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
          Final-year Computer Science researcher and engineer exploring natural
          language processing, deep learning, and large-scale systems — turning
          research ideas into well-engineered software.
        </p>
        <HeroActions />
        <ScrollIndicator />
      </div>
    </div>
  );
}
