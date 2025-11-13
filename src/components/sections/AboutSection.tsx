import { useLocalizedData } from '../../hooks/useLocalizedData';

export function AboutSection() {
  const { technologies, aboutContent } = useLocalizedData();
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-6">
            <span className="text-blue-400 font-mono text-2xl">{aboutContent.sectionNumber}.</span>
            <span className="text-gray-100">{aboutContent.title}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent ml-6"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3 space-y-6 animate-fade-in">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-gray-300 text-lg leading-relaxed font-semibold mt-8">
              {aboutContent.techListLabel}
            </p>
            <ul className="grid grid-cols-2 gap-3 text-base text-gray-300 font-mono mt-4">
              {technologies.map((tech) => (
                <li key={tech.name} className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 relative group animate-fade-in">
            <div className="relative w-64 sm:w-72 h-64 sm:h-72 mx-auto max-w-full">
            <div className="absolute inset-0 border-2 border-blue-500 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20">
                <img
                  src="/H31392 Salihoglu digi 05.jpg"
                  alt={aboutContent.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
