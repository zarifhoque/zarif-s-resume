import React, { useState, useEffect } from "react";
import TypewriterText from "./custom/TypeWriterText";
import DecorativeOrb from "./custom/DecorativeOrb";
import { OrbPosition } from "@/types/DecorativeOrbTypes";
import ScrollIndicator from "./custom/ScrollIndicator";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function PortfolioHero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 flex items-center justify-center p-4 sm:p-6 md:p-8  overflow-hidden">
      <DecorativeOrb position={OrbPosition.TOP_LEFT} color="bg-purple-200" />
      <DecorativeOrb position={OrbPosition.BOTTOM_RIGHT} color="bg-cyan-200" />
      <div className="relative z-10 max-w-4xl w-full text-center ">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>
        <div className="text-sm sm:text-base text-blue-600 font-medium mb-2 sm:mb-4">
          HELLO, I'M
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-4">
          <span className="text-gray-900">Zarif </span>
          <span className="text-blue-600">Safwan </span>
        </h1>
        <TypewriterText />
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
          Computer Science student passionate about crafting scalable software,
          intuitive interfaces, and robust systems. Building the future with
          code, one line at a time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
          <Button
            asChild
            className="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <a
              href="https://github.com/zarifhoque/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto bg-transparent text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            <a href="mailto:hoquelabid@gmail.com">Contact Me</a>
          </Button>
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
}
