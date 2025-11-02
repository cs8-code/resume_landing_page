import { scrollToSection } from '../../utils/navigation';
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocalizedData } from '../../hooks/useLocalizedData';

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const { heroContent } = useLocalizedData();

  const displayName = isHovered ? "codecs8" : "Cengiz";

  return (
    <section id="home" className="min-h-screen flex items-center relative px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8 animate-slide-in-left max-w-4xl">
          <div className="inline-block">
            <span className="text-blue-400 text-base font-mono tracking-wider animate-pulse">{heroContent.greeting}</span>
          </div>
         <h1 
            className="text-6xl font-medium text-gray-100 font-grotesk"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {displayName.split("").map((char, i) => {
              // Check if this character is part of "cs8" (positions 4, 5, 6 in "codecs8")
              const isCs8 = i >= 4 && i <= 6;
              
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0}}
                  animate={{ 
                    opacity: 1,
                    color: (isHovered && isCs8) ? "#3b82f6" : "#f3f4f6",
                    textShadow: (isHovered && isCs8) ? "0 0 20px rgba(59,130,246,0.9)" : "0 0 0px rgba(59,130,246,0)"
                  }}
                  transition={{ duration: 1 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
      </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 leading-snug">
            {heroContent.tagline}
          </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {heroContent.description}
            </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-10 py-5 border-2 border-blue-500 text-blue-400 rounded-lg font-mono text-sm hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <span className="inline-flex items-center gap-2">
                {heroContent.ctaButton}
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
