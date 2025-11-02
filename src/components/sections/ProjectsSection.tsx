import { useLocalizedData } from '../../hooks/useLocalizedData';
import { ProjectCard } from '../ProjectCard';

export function ProjectsSection() {
  const { projects, projectsContent } = useLocalizedData();
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-6">
            <span className="text-blue-400 font-mono text-2xl">{projectsContent.sectionNumber}.</span>
            <span className="text-gray-100">{projectsContent.title}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent ml-6"></div>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {projectsContent.subtitle}
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
