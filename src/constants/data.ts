import type { NavItem, Project, Technology, Service, HeroContent, ServicesContent, ProjectsContent, ContactContent, FooterContent } from '../types';
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
    external: 'https://greenbros-app.vercel.app',
    icon: 'code',
    image: '/dashboard_app.PNG',
    featured: false,
    imagePosition: 'right',
  },
  {
    id: 'greenbros',
    title: 'Gardening Service Website',
    status: 'Completed',
    description: 'A professional website for a local gardening and landscaping company, showcasing their services in garden maintenance, tree care, and landscape design. Features include service portfolios, seasonal offerings, and an integrated contact system for quotes and consultations.',
    technologies: [],
    github: 'https://github.com/cs8-code/thegreenbros.git',
    icon: 'palette',
    image: '/greenbros_screenshot.png',
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

// Re-export SOCIAL_LINKS from shared
export { SOCIAL_LINKS } from './shared';

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

// Re-export shared constants
export { CONTACT_EMAIL, SITE_TITLE, AUTHOR_NAME } from './shared';

export const HERO_CONTENT: HeroContent = {
  greeting: "Hi, my name is Cengiz",
  tagline: "I build digital solutions for your business.",
  description: "Transforming ideas into smart, functional web or desktop applications. I combine technical expertise with creative problem-solving to deliver exceptional digital products.",
  aitagline: "Building Smarter with AI",
  aidescription: "I use and integrate modern AI tools, frameworks and APIs to accelerate development, optimize and set up automated workflows, ensuring your projects are delivered faster, with higher quality and tailored precisely to your needs.",
  aicaption: "Smarter code, better results"
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
