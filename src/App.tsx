import { useScrollTracking } from './hooks/useScrollTracking';
import { Navigation } from './components/Navigation';
import { SocialLinks } from './components/SocialLinks';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const { scrolled, activeSection } = useScrollTracking();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-80"></div>
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navigation scrolled={scrolled} activeSection={activeSection} />
      <SocialLinks />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
