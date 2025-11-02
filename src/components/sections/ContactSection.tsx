import { useLocalizedData } from '../../hooks/useLocalizedData';

export function ContactSection() {
  const { contactContent } = useLocalizedData();
  return (
    <section id="contact" className="py-40 px-4 relative">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-blue-400 font-mono text-xl">{contactContent.sectionNumber}.</span>
          <span className="text-gray-100">{contactContent.title}</span>
        </h2>
        <h3 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 mb-8 tracking-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">{contactContent.subtitle}</h3>
        <p className="text-gray-300 text-xl leading-relaxed mb-14 max-w-2xl mx-auto">
          {contactContent.description}
        </p>
        <a
          href={`mailto:${contactContent.email}`}
          className="group inline-block px-10 py-5 border-2 border-blue-500 text-blue-400 rounded-lg font-mono text-sm hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          <span className="inline-flex items-center gap-2">
            {contactContent.emailLabel}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </a>
      </div>
    </section>
  );
}
