import React, { useState, useEffect } from "react";
import TypewriterText from "./custom/TypeWriterText";

export default function PortfolioHero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse "></div>
      <div
        // className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse "
        style={{ animationDelay: "1s" }}
      ></div> */}

      <div className="relative z-10 max-w-4xl w-full text-center ">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* Greeting */}
        <div className="text-sm sm:text-base text-blue-600 font-medium mb-2 sm:mb-4">
          HELLO, I'M
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-4">
          <span className="text-gray-900">Zarif </span>
          <span className="text-blue-600">Safwan</span>
        </h1>

        {/* Rotating Role */}
        <TypewriterText />

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
          Computer Science student passionate about crafting scalable software,
          intuitive interfaces, and robust systems. Building the future with
          code, one line at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
          <button className="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group">
            View My Work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="w-full sm:w-auto bg-transparent text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
          <span className="hidden sm:block">SCROLL DOWN</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-gray-600 rounded-full animate-bounce"></div>
          </div>
          <span className="text-gray-600 font-medium">MORE</span>
        </div>
      </div>
    </div>
  );
}
