import type { NavItem, Project, Technology, SocialLink, Service } from '../types';

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
    github: '#',
    external: '#',
    icon: 'palette',
    image: '/spaceheroes_screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    title: 'Gardening Service Website',
    description: 'A landing page for a local gardening service, showcasing services, portfolio, and contact information with a focus on SEO and user experience.',
    technologies: [],
    github: '#',
    external: '#',
    icon: 'code',
    image: '/greenbros_screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/cengiz-salihoglu/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'mailto:cs8-code@gmail.com', icon: 'mail', label: 'Email' },
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

export const CONTACT_EMAIL = 'cs8-code@gmail.com';
export const SITE_TITLE = 'cs8code';
export const AUTHOR_NAME = 'Cengiz Salihoglu';
