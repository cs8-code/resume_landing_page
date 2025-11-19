export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  /** stable id used to associate language-independent resources (images, links) */
  id: string;
  title: string;
  status: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  icon: 'smartphone' | 'palette' | 'code';
  /** Project image/screenshot */
  image?: string;
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
  icon: 'globe' | 'layout' | 'shoppingCart' | 'cloud' | 'barChart';
}

export interface HeroContent {
  greeting: string;
  tagline: string;
  description: string;
  aitagline: string;
  aidescription: string;
  aicaption: string;
}

export interface ServicesContent {
  title: string;
}

export interface ProjectsContent {
  title: string;
  subtitle: string;
}

export interface ContactContent {
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
