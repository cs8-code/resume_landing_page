export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  /** stable id used to associate language-independent resources (images, links) */
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  icon: 'smartphone' | 'palette' | 'code';
  /** Primary image (backwards compatibility) */
  image?: string;
  /** Multiple images/screenshots for the project */
  images?: string[];
  featured: boolean;
  imagePosition: 'left' | 'right';
}

export interface Technology {
  name: string;
}

export interface SocialLink {
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
  label: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: 'globe' | 'layout' | 'shoppingCart';
}

export interface HeroContent {
  greeting: string;
  tagline: string;
  description: string;
  ctaButton: string;
}

export interface AboutContent {
  sectionNumber: string;
  title: string;
  paragraphs: string[];
  techListLabel: string;
  imageAlt: string;
}

export interface ServicesContent {
  sectionNumber: string;
  title: string;
  subtitle: string;
}

export interface ProjectsContent {
  sectionNumber: string;
  title: string;
  subtitle: string;
}

export interface ContactContent {
  sectionNumber: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  emailLabel: string;
}

export interface FooterContent {
  copyright: string;
  builtWith: string;
}
