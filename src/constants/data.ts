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
    title: 'Siportal',
    description: 'A comprehensive construction supervision platform that streamlines project management, documentation, and collaboration for construction teams and supervisors.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    external: 'https://siportal.bolt.host/',
    icon: 'smartphone',
    image: '/siportal-screenshot.png',
    featured: true,
    imagePosition: 'left',
  },
  {
    title: 'Design System Library',
    description: 'A comprehensive design system built with React and TypeScript, featuring over 50 reusable components documented in Storybook with full accessibility support.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    github: '#',
    external: '#',
    icon: 'palette',
    featured: true,
    imagePosition: 'right',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool leveraging GPT-4 to help content creators and marketers generate high-quality, SEO-optimized content in seconds.',
    technologies: ['Next.js', 'OpenAI', 'Python', 'PostgreSQL'],
    github: '#',
    external: '#',
    icon: 'code',
    featured: true,
    imagePosition: 'left',
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
