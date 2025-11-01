import { TECHNOLOGIES } from '../../constants/data';

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-6">
            <span className="text-blue-400 font-mono text-2xl">01.</span>
            <span className="text-gray-100">About Me</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent ml-6"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3 space-y-6 animate-fade-in">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm Cengiz, a software engineer based in Mülheim an der Ruhr, Germany.  I have been helping small businesses in the Ruhrgebiet create modern, reliable, and user-friendly websites—from concept to finished online presence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              After graduating in Computer Science in 2021 I was working as a software engineer for tech companies in germany such as Capgemini and ALDI South IT. At the same time I started building small web apps just for fun.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fast-forward to today,
               I have been helping small businesses in the Ruhrgebiet area create modern, reliable, and user-friendly websites—from concept to finished                     online presence.

              I place particular emphasis on clean code, scalable architecture, and customized solutions that are tailored to your business. Whether you                   need a new website, want to expand existing systems, or are looking for technical advice, I can help you implement your digital project                      efficiently.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-semibold mt-8">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-3 text-base text-gray-300 font-mono mt-4">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech.name} className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 relative group animate-fade-in">
            <div className="relative w-72 h-72 mx-auto">
            <div className="absolute inset-0 border-2 border-blue-500 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20">
                <img
                  src="/profilfoto.jpg"
                  alt="Cengiz Salihoglu"
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
