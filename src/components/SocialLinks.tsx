import { Mail, Linkedin, Github } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '../constants/data';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function SocialLinks() {
  return (
    <>
      <div className="fixed left-8 bottom-0 hidden xl:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-gradient-to-t after:from-blue-500/50 after:to-transparent z-40">
        {SOCIAL_LINKS.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.icon !== 'mail' ? '_blank' : undefined}
              rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
              className="text-gray-400 hover:text-blue-400 hover:-translate-y-1 transition-all hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              aria-label={link.label}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
      <div className="fixed right-8 bottom-0 hidden xl:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-gradient-to-t after:from-cyan-500/50 after:to-transparent z-40">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all font-mono text-xs vertical-text hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </>
  );
}
