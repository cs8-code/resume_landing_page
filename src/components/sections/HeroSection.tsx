import { scrollToSection } from '../../utils/navigation';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useLocalizedData } from '../../hooks/useLocalizedData';

const TYPING_SPEED = 120;
const CURSOR_BLINK_SPEED = 500;
const HIGHLIGHT_COLOR = "#3b82f6";
const DEFAULT_COLOR = "#f3f4f6";
const HIGHLIGHT_SHADOW = "0 0 20px rgba(59,130,246,0.9)";
const NO_SHADOW = "0 0 0px rgba(59,130,246,0)";

export function HeroSection() {
  const { heroContent } = useLocalizedData();

  const nameDefault = "Cengiz";
  const nameHover = "codecs8";

  const [displayedText, setDisplayedText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const typingIntervalRef = useRef<number | null>(null);

  // Function to type any given text
  const typeText = (text: string) => {
    if (typingIntervalRef.current) {
      window.clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    setDisplayedText("");
    let i = 0;
    typingIntervalRef.current = window.setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length && typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    }, TYPING_SPEED);
  };

  // Type “Cengiz” when the page loads
  useEffect(() => {
    typeText(nameDefault);
  }, []);

  // Retype name depending on hover
  useEffect(() => {
    if (isHovered) {
      typeText(nameHover);
    } else {
      typeText(nameDefault);
    }
  }, [isHovered]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = window.setInterval(() => {
      setCursorVisible((v) => !v);
    }, CURSOR_BLINK_SPEED);
    return () => window.clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8 animate-slide-in-left max-w-4xl">
          <div className="inline-block">
            <span className="text-blue-400 text-base font-mono tracking-wider animate-pulse">
              {heroContent.greeting}
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-6xl font-medium text-gray-100 font-grotesk cursor-pointer select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={`${heroContent.greeting} ${isHovered ? nameHover : nameDefault}`}
          >
            {displayedText.split("").map((char, i) => {
              // highlight "cs8" only in codecs8
              const isCs8 = isHovered && i >= 4 && i <= 6;
              return (
                <motion.span
                  key={i}
                  animate={{
                    color: isCs8 ? HIGHLIGHT_COLOR : DEFAULT_COLOR,
                    textShadow: isCs8 ? HIGHLIGHT_SHADOW : NO_SHADOW,
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                  aria-hidden={true}
                >
                  {char}
                </motion.span>
              );
            })}

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: cursorVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-blue-400"
              aria-hidden="true"
            >
              |
            </motion.span>
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
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
