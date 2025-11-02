import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/navigation';
import { useLocalizedData } from '../hooks/useLocalizedData';

interface NavigationProps {
  scrolled: boolean;
  activeSection: string;
}

export function Navigation({ scrolled, activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navItems } = useLocalizedData();

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
          <button
            onClick={() => handleNavigation('home')}
            className="text-xl font-bold hover:opacity-80 transition-all"
          >
            <span className="text-gray-300">code</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">cs8</span>
          </button>

          <div className="hidden md:flex space-x-8">
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
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-t border-blue-500/20 animate-fade-in">
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
