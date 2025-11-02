import type { NavItem, Project, Technology, SocialLink, Service, HeroContent, AboutContent, ServicesContent, ProjectsContent, ContactContent, FooterContent } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Java' },
  { name: 'JavaScript/TypeScript' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Tailwind CSS' },
  { name: 'Supabase' }
];

export const PROJECTS: Project[] = [
  {
    title: 'Construction Industry Networking Platform',
    description: 'A digital platform that connects subcontractors and construction supervisors — matching expertise with projects and enabling collaboration across the industry.',
    technologies: ['React', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS'],
    github: 'https://github.com/cs8-code/siportal.git',
    external: 'https://siportal.bolt.host/',
    icon: 'smartphone',
    image: '/siportal-screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    title: 'Clearing Out Sercices Website',
    description: 'A modern website for a local clearing out service, featuring service descriptions, customer testimonials, and a contact form for inquiries and quotes.',
    technologies: [],
    external: 'https://cs8-code.github.io/spaceheroes/',
    icon: 'palette',
    image: '/spaceheroes_screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    title: 'Gardening Service Website',
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
    title: 'Business Websites',
    description: 'Professional websites tailored to your business needs. Clean design, fast performance, and mobile-responsive layouts that make your brand stand out.',
    features: [
      'Custom Design',
      'Mobile Responsive',
      'SEO Optimized',
      'Fast Loading',
      'Content Management',
      'Analytics Integration'
    ],
    icon: 'globe'
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
  }
];

export const CONTACT_EMAIL = 'cs8.code@gmail.com';
export const SITE_TITLE = 'codecs8';
export const AUTHOR_NAME = 'Cengiz Salihoglu';

export const HERO_CONTENT: HeroContent = {
  greeting: "Hi, my name is",
  tagline: "I build custom web apps for local businesses in the Ruhrgebiet area.",
  description: "I'm a software engineer specializing in creating exceptional digital products. Currently, I'm focused on building modern, accessible, and performance-driven web applications.",
  ctaButton: "Check out my work"
};

export const ABOUT_CONTENT: AboutContent = {
  sectionNumber: "01",
  title: "About Me",
  paragraphs: [
    "Hello! I'm Cengiz, a software engineer based in Mülheim an der Ruhr, Germany. I have been helping small businesses in the Ruhrgebiet create modern, reliable, and user-friendly websites—from concept to finished online presence.",
    "After graduating in Computer Science in 2021 I was working as a software engineer for tech companies in germany such as Capgemini and ALDI South IT. At the same time I started building small web apps just for fun.",
    "Fast-forward to today, I have been helping small businesses in the Ruhrgebiet area create modern, reliable, and user-friendly websites—from concept to finished online presence. I place particular emphasis on clean code, scalable architecture, and customized solutions that are tailored to your business. Whether you need a new website, want to expand existing systems, or are looking for technical advice, I can help you implement your digital project efficiently."
  ],
  techListLabel: "Here are a few technologies I've been working with recently:",
  imageAlt: "Cengiz Salihoglu"
};

export const SERVICES_CONTENT: ServicesContent = {
  sectionNumber: "02",
  title: "What I Can Do For You",
  subtitle: "From concept to launch, I provide complete solutions tailored to your business needs"
};

export const PROJECTS_CONTENT: ProjectsContent = {
  sectionNumber: "03",
  title: "Some Things I've Built Recently",
  subtitle: ""
};

export const CONTACT_CONTENT: ContactContent = {
  sectionNumber: "04",
  title: "What's Next?",
  subtitle: "Get In Touch",
  description: "I'm currently open to new opportunities and would love to hear about your project. Whether you have business requests, questions or just want to get in touch, I'll try my best to get back to you!",
  email: "cs8.code@gmail.com",
  emailLabel: "Say Hello"
};

export const FOOTER_CONTENT: FooterContent = {
  copyright: "© 2025 codecs8. All rights reserved.",
  builtWith: "Built with React & Tailwind CSS"
};
