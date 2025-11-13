import type { NavItem, Project, Technology, SocialLink, Service, HeroContent, ServicesContent, ProjectsContent, ContactContent, FooterContent } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Java' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Tailwind CSS' },
  { name: 'Supabase' },
  { name: 'Git' },
  { name: 'JavaScript' }
];

export const PROJECTS: Project[] = [
  {
    id: 'siportal',
    title: 'Construction Industry Networking Platform',
    status: 'In Development',
    description: 'A digital platform that connects subcontractors and construction supervisors — matching expertise with projects and enabling collaboration across the industry.',
    technologies: ['React', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS'],
    github: 'https://github.com/cs8-code/siportal.git',
    external: 'https://siportal.bolt.host/',
    icon: 'smartphone',
    image: '/siportal_screenshot1.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    id: 'spaceheroes',
    title: 'Clearing Out Sercices Website',
    status: 'Deployed',
    description: 'A modern website for a local clearing out service, featuring service descriptions, customer testimonials, and a contact form for inquiries and quotes.',
    technologies: [],
    external: 'https://cs8-code.github.io/spaceheroes/',
    icon: 'palette',
    image: '/spaceheroes_screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    id: 'greenbros',
    title: 'Gardening Service Website',
    status: 'In Development',
    description: 'A landing page for a local gardening service, showcasing services, portfolio, and contact information with a focus on SEO and user experience.',
    technologies: [],
    github: 'https://github.com/cs8-code/thegreenbros.git',
    icon: 'code',
    image: '/greenbros_screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/cengiz-salihoglu/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'mailto:cs8.code@gmail.com', icon: 'mail', label: 'Email' },
];


export const SERVICES: Service[] = [
   {
    title: 'Software as a Service (SaaS)',
    description: 'Custom software solutions delivered as a service, designed to streamline your business processes and boost efficiency. Scalable, secure, and accessible from anywhere.',
    features: [
      'Custom Feature Development',
      'Scalable Architecture',
      'User Authentication',
      'Subscription Management',
      'Secure Data Handling',
      'Ongoing Maintenance'
    ],
    icon: 'cloud'
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive action. Optimized for performance and conversion rates.',
    features: [
      'Conversion Focused',
      'A/B Testing Ready',
      'Form Integration',
      'Performance Optimized',
      'Analytics Tracking',
      'CTA Optimization'
    ],
    icon: 'layout'
  },
  {
    title: 'E-Commerce Sites',
    description: 'Complete e-commerce solutions with secure payment processing, inventory management, and seamless shopping experiences.',
    features: [
      'Payment Integration',
      'Product Management',
      'Shopping Cart',
      'Order Tracking',
      'Secure Checkout',
      'Inventory System'
    ],
    icon: 'shoppingCart'
  },
 
];

export const CONTACT_EMAIL = 'cs8.code@gmail.com';
export const SITE_TITLE = 'codecs8';
export const AUTHOR_NAME = 'Cengiz Salihoglu';

export const HERO_CONTENT: HeroContent = {
  greeting: "Hi, my name is Cengiz",
  tagline: "I build digital solutions for local businesses.",
  description: "Transforming ideas into elegant, functional web solutions. I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.",
  ctaButton: "Check out my work"
};

export const SERVICES_CONTENT: ServicesContent = {
  title: "What I Do",
};

export const PROJECTS_CONTENT: ProjectsContent = {
  title: "Recent Projects",
  subtitle: ""
};

export const CONTACT_CONTENT: ContactContent = {
  title: "What's Next?",
  subtitle: "Get In Touch",
  description: "Do you have a question or a specific project in mind? I am open to new ideas and look forward to hearing from you!",
  email: "cs8.code@gmail.com",
  emailLabel: "Say Hello"
};

export const FOOTER_CONTENT: FooterContent = {
  copyright: "© 2025 codecs8. All rights reserved.",
  builtWith: "Built with React & Tailwind CSS"
};
