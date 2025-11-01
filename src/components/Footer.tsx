import { Mail, Linkedin, Github } from 'lucide-react';
import { SOCIAL_LINKS, AUTHOR_NAME } from '../constants/data';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="py-8 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex md:hidden justify-center gap-6 mb-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon !== 'mail' ? '_blank' : undefined}
                rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-blue-400 transition-all hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                aria-label={link.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        <a
          href="https://github.com/cs8-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all font-mono text-xs"
        >
          Built by {AUTHOR_NAME}
        </a>
      </div>
    </footer>
  );
}
