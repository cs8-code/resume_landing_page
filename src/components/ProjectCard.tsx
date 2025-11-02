import { Smartphone, Palette, Code, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

const iconMap = {
  smartphone: Smartphone,
  palette: Palette,
  code: Code,
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon];
  const isLeftAligned = project.imagePosition === 'left';

  return (
    <div className="grid md:grid-cols-12 gap-6 items-center group animate-fade-in">
      <div className={`md:col-span-7 relative ${!isLeftAligned ? 'md:order-first' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-gray-900 to-cyan-500/10 shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
          <div className="aspect-video bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
          {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <Icon size={100} className="text-blue-400 opacity-40 group-hover:opacity-70 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className={`md:col-span-5 space-y-5 ${isLeftAligned ? 'md:text-right' : ''}`}>
        <h3 className="text-3xl font-bold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
          {project.title}
        </h3>
        <div className="bg-gray-900/80 backdrop-blur-sm p-7 rounded-xl shadow-xl border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300">
          <p className="text-gray-300 leading-relaxed text-base">
            {project.description}
          </p>
        </div>
        <ul className={`flex flex-wrap gap-4 font-mono text-sm text-gray-300 ${isLeftAligned ? 'justify-end' : ''}`}>
          {project.technologies.map((tech) => (
            <li key={tech} className="px-3 py-1 bg-gray-900/60 rounded-md border border-gray-800 hover:border-blue-500/50 transition-all">{tech}</li>
          ))}
        </ul>
        <div className={`flex gap-5 ${isLeftAligned ? 'justify-end' : ''}`}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              aria-label="GitHub repository"
            >
              <Github size={22} />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              aria-label="External link"
            >
              <ExternalLink size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
