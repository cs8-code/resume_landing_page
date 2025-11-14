import { useLocalizedData } from '../hooks/useLocalizedData';
import { socialIconMap } from '../constants/iconMaps';

export function Footer() {
  const { socialLinks, footerContent } = useLocalizedData();
  
  return (
    <footer className="py-8 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex md:hidden justify-center gap-6 mb-6">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon as keyof typeof socialIconMap];
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
        <div className="text-gray-400 space-y-2 font-mono text-xs">
          <p>{footerContent.builtWith}</p>
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
