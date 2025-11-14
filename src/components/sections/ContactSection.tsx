import { useLocalizedData } from '../../hooks/useLocalizedData';
import { ContactForm } from '../ContactForm';

export function ContactSection() {
  const { contactContent } = useLocalizedData();

  return (
    <section id="contact" className="py-40 px-4 relative">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-4">
            <span className="text-blue-400 font-mono text-xl">|</span>
            <span className="text-gray-100">{contactContent.title}</span>
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 mb-8 tracking-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">{contactContent.subtitle}</h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-14 max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}