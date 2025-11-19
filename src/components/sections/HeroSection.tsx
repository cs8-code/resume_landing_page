import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useLocalizedData } from '../../hooks/useLocalizedData';
import { ServiceCard } from '../ServiceCard';

const TYPING_SPEED = 200;
const CURSOR_BLINK_SPEED = 500;
const HIGHLIGHT_COLOR = "#0967f3ff";
const DEFAULT_COLOR = "#f3f4f6";
const HIGHLIGHT_SHADOW = "0 0 20px rgba(28, 13, 231, 0.9)";
const NO_SHADOW = "0 0 0px rgba(59,130,246,0)";

// Helper function to get icon URL for each technology
const getTechIcon = (techName: string): JSX.Element => {
  const iconMap: { [key: string]: string } = {
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Claude Code': '/technology_icons/Claude_AI_symbol.svg',
    'GitHub Copilot': '/technology_icons/github-copilot-logo-icon-hd.png',
    'ChatGPT': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  };

  const iconUrl = iconMap[techName];

  return iconUrl ? (
    <img src={iconUrl} alt={techName} className="w-8 h-8" />
  ) : (
    <div className="w-8 h-8 flex items-center justify-center text-2xl">💻</div>
  );
};

export function HeroSection() {
  const { heroContent, services, servicesContent, technologies } = useLocalizedData();
  const nameHover = "codecs8";

  const [displayedText, setDisplayedText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const typingIntervalRef = useRef<number | null>(null);

  // Function to type any given text - memoized to prevent recreating on each render
  const typeText = useCallback((text: string) => {
    if (typingIntervalRef.current) {
      window.clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    setDisplayedText("");
    setTypingComplete(false);
    let i = 0;
    typingIntervalRef.current = window.setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length && typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
        setTypingComplete(true); // Mark typing as complete
      }
    }, TYPING_SPEED);
  }, []);

  // Type name on initial load and cleanup on unmount
  useEffect(() => {
    typeText(nameHover);

    // Cleanup function to prevent memory leaks
    return () => {
      if (typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    };
  }, [nameHover, typeText]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = window.setInterval(() => {
      setCursorVisible((v) => !v);
    }, CURSOR_BLINK_SPEED);
    return () => window.clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Hero Content */}
        <div className="mb-24 animate-slide-in-left">
          {/* codecs8 animation - Centered at top */}
          <div className="flex justify-center mb-8">
            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl font-bold text-gray-100 cursor-pointer select-none leading-tight"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label={`codecs8`}
            >
              {displayedText.split("").map((char, i) => {
                // highlight "cs8" after typing is complete OR on hover
                const isCs8 = (typingComplete || isHovered) && i >= 4 && i <= 6;
                return (
                  <motion.span
                    key={i}
                    animate={{
                      color: isCs8 ? HIGHLIGHT_COLOR : DEFAULT_COLOR,
                      textShadow: isCs8 ? HIGHLIGHT_SHADOW : NO_SHADOW,
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 40 }}
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
          </div>

          <div className="mb-6 text-left">
            <span className="text-blue-400 text-base font-mono tracking-wider animate-pulse">
              {heroContent.greeting}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            {/* Left Column - Software Engineer (static) */}
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-100 leading-tight mb-4">
                Software Engineer
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-400 leading-snug">
                {heroContent.tagline}
              </h2>
            </div>

            {/* Right Column - Description */}
            <div>
              <h2 className="text-x1 sm:text-3xl font-light text-gray-400 leading-snug whitespace-pre-line">
                {heroContent.description}
              </h2>
            </div>
          </div>

          {/* AI Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{heroContent.aitagline}</h2>
            <p className="text-gray-700 dark:text-gray-300">{heroContent.aidescription}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400 italic">{heroContent.aicaption}</p>
          </div>

          {/* Technology Icons Scrolling */}
          <div className="mt-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll-rtl">
              {/* Duplicate the list twice for seamless infinite scroll */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 min-w-fit transition-all duration-300"
                >
                  {getTechIcon(tech.name)}
                  <span className="text-sm text-gray-300 font-medium whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Services Section */}
        <div className="animate-fade-in mb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-gray-100">{servicesContent.title}</span>
            </h2>
          </div>


          <div className="space-y-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

      </div>
    </section>
    
  );
}
