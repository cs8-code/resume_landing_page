import { useScrollTracking } from './hooks/useScrollTracking';
import { Navigation } from './components/Navigation';
import { SocialLinks } from './components/SocialLinks';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { scrolled, activeSection } = useScrollTracking();

  return (
    <>
     <Analytics />
      <div className="min-h-screen bg-gray-950 text-gray-300 relative">
        {/* Background gradients */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-80"></div>
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-20"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-20"></div>
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <Navigation scrolled={scrolled} activeSection={activeSection} />
          <SocialLinks />
          <HeroSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />

        </div>
      </div>
    </>
  );
}

export default App;
