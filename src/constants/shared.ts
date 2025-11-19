import type { Technology, SocialLink } from '../types';

// Shared non-translatable constants
export const CONTACT_EMAIL = 'cs8.code@gmail.com';
export const SITE_TITLE = 'codecs8';
export const AUTHOR_NAME = 'Cengiz Salihoglu';

// Social Links (same for all languages)
export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/cs8-code', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/cengiz-salihoglu/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'mailto:cs8.code@gmail.com', icon: 'mail', label: 'Email' },
];

// Technologies (same for all languages)
export const TECHNOLOGIES_SHARED: readonly Technology[] = [
  { name: 'ChatGPT' },
  { name: 'Claude Code' },
  { name: 'GitHub Copilot' },
  { name: 'Supabase' },
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Git' },
  { name: 'JavaScript' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'Python' },
  { name: 'Java' }
] as const;
