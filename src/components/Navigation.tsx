import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/navigation';
import { useLocalizedData } from '../hooks/useLocalizedData';
import { LanguageSwitcher } from './LanguageSwitcher';

const HIGHLIGHT_COLOR = "#0967f3ff";
const DEFAULT_COLOR = "#f3f4f6";
const HIGHLIGHT_SHADOW = "0 0 20px rgba(28, 13, 231, 0.9)";
const NO_SHADOW = "0 0 0px rgba(59,130,246,0)";

interface NavigationProps {
  scrolled: boolean;
  activeSection: string;
}

export function Navigation({ scrolled, activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { navItems } = useLocalizedData();
  const nameText = "codecs8";

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-blue-500/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title on the left - visible when scrolled */}
          <div className="w-32">
            {scrolled && (
              <button
                onClick={() => handleNavigation('home')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-2xl font-bold text-gray-100 cursor-pointer select-none transition-opacity duration-300"
                aria-label="codecs8 - Go to top"
              >
                {nameText.split("").map((char, i) => {
                  const isCs8 = isHovered && i >= 4 && i <= 6;
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
              </button>
            )}
          </div>

          {/* Right-aligned navigation items and language switcher */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`capitalize transition-all duration-300 hover:text-blue-400 relative group ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform transition-transform ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-t border-blue-500/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg capitalize transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400'
                    : 'text-gray-400 hover:bg-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
