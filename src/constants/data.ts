import type { NavItem, Project, Technology, SocialLink, Service, HeroContent, ServicesContent, ProjectsContent, ContactContent, FooterContent } from '../types';
import { TECHNOLOGIES_SHARED } from './shared';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const TECHNOLOGIES: Technology[] = [...TECHNOLOGIES_SHARED];

export const PROJECTS: Project[] = [
  {
    id: 'siportal',
    title: 'Construction Industry Networking Platform',
    status: 'In Development',
    description: 'A digital platform that connects subcontractors and construction supervisors — matching expertise with projects and enabling collaboration across the industry.',
    technologies: ['React', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS'],
    github: 'https://github.com/cs8-code/siportal.git',
    icon: 'smartphone',
    image: '/siportal_screenshot1.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    id: 'dashboard',
    title: 'Business Management Dashboard',
    status: 'Deployed',
    description: 'A cross-platform desktop application for service-based businesses to manage daily operations, client relationships, and team scheduling.\n\n' + 
                'Key Features:\n' + 
                '- Kanban-style task board with drag-and-drop functionality\n' +
                '- Client management with full CRUD operations\n' +
                ' - Team availability scheduling and assignment tracking\n' +
                ' - Interactive dashboard with real-time metrics and weekly calendar view\n' +
                ' - One-click task status updates throughout the application',
    technologies: [],
    github: 'https://github.com/cs8-code/greenbros_dashboard_app.git',
    icon: 'code',
    image: '/dashboard_app.PNG',
    featured: false,
    imagePosition: 'right',
  },
  {
    id: 'spaceheroes',
    title: 'Clearing Out Services Website',
    status: 'Deployed',
    description: 'A modern website for a local clearing out service, featuring service descriptions, customer testimonials, and a contact form for inquiries and quotes.',
    technologies: [],
    external: 'https://cs8-code.github.io/spaceheroes/',
    icon: 'palette',
    image: '/spaceheroes_screenshot.png',
    featured: false,
    imagePosition: 'right',
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/cs8-code', icon: 'github', label: 'GitHub' },
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
    title: 'Landing Pages & Business Websites',
    description: 'Professional websites and high-converting landing pages for your business. From simple landing pages to complete business websites, optimized for performance and conversions.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Form Integration',
      'Performance Optimized',
      'Analytics Tracking',
      'Content Management'
    ],
    icon: 'layout'
  },
  {
    title: 'Custom Dashboards & Admin Panels',
    description: 'Powerful dashboards and admin panels tailored to your business needs. Visualize data, manage users, and control your platform with intuitive interfaces.',
    features: [
      'Real-time Data Visualization',
      'User Management',
      'Analytics & Reporting',
      'Role-based Access Control',
      'Custom Metrics & KPIs',
      'Interactive Charts & Graphs'
    ],
    icon: 'barChart'
  },
  {
    title: 'E-Commerce solutions',
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
  title: "What I offer",
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
