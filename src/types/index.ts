export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  icon: 'smartphone' | 'palette' | 'code';
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
  icon: 'globe' | 'layout' | 'shoppingCart';
}
