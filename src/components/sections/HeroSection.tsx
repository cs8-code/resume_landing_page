import { scrollToSection } from '../../utils/navigation';
import { motion } from "framer-motion";
import { useState } from "react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center relative px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8 animate-slide-in-left max-w-4xl">
          <div className="inline-block">
            <span className="text-blue-400 text-base font-mono tracking-wider animate-pulse">Hi there, this is</span>
          </div>
          <h1 
  className="text-6xl font-medium text-gray-100"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {(isHovered ? "cs8code" : "Cengiz Salihoglu").split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        color: isHovered ? "#3b82f6" : "#f3f4f6",
        textShadow: isHovered ? "0 0 20px rgba(59,130,246,0.9)" : "0 0 0px rgba(59,130,246,0)"
      }}
      transition={{ duration: 0.2 }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</h1>


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 leading-snug">
            I build modern custom software and web apps for local businesses.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-10 py-5 border-2 border-blue-500 text-blue-400 rounded-lg font-mono text-sm hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <span className="inline-flex items-center gap-2">
                Check out my work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
