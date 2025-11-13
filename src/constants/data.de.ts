import type { NavItem, Project, Technology, SocialLink, Service, HeroContent, ServicesContent, ProjectsContent, ContactContent, FooterContent } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Start' },
  { id: 'projects', label: 'Projekte' },
  { id: 'contact', label: 'Kontakt' },
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
    title: 'Vernetzungsplattform für die Bauindustrie',
    status: 'In Entwicklung',
    description: 'Eine digitale Plattform, die Subunternehmer und Bauleiter vernetzt — verbindet Expertise mit Projekten und ermöglicht branchenweite Zusammenarbeit.',
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
    title: 'Webseite für Entrümpelungsdienste',
    status: 'Abgeschlossen',
    description: 'Eine moderne Webseite für einen lokalen Entrümpelungsservice mit Leistungsbeschreibungen, Kundenreferenzen und einem Kontaktformular für Anfragen und Angebote.',
    technologies: [],
    external: 'https://cs8-code.github.io/spaceheroes/',
    icon: 'palette',
    image: '/spaceheroes_screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    id: 'greenbros',
    title: 'Webseite für Gartenbauservice',
    status: 'Abgeschlossen',
    description: 'Eine Landing Page für einen lokalen Gartenbauservice, die Dienstleistungen, Portfolio und Kontaktinformationen präsentiert, mit Fokus auf SEO und Benutzerfreundlichkeit.',
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
  { href: 'mailto:cs8.code@gmail.com', icon: 'mail', label: 'E-Mail' },
];

export const SERVICES: Service[] = [
  {
    title: '(SaaS) Lösungen',
    description: 'Maßgeschneiderte Softwarelösungen als Service, die Ihre Geschäftsprozesse optimieren und die Effizienz steigern. Skalierbar, sicher und von überall zugänglich.',
    features: [
      'Entwicklung individueller Funktionen',
      'Skalierbare Architektur',
      'Benutzerauthentifizierung',
      'Abonnementverwaltung',
      'Sichere Datenverarbeitung',
      'Laufende Wartung'
    ],
    icon: 'cloud'
  },
  {
    title: 'Landing Pages',
    description: 'Konversionsstarke Landing Pages, entwickelt um Leads zu generieren und Aktionen auszulösen. Optimiert für Performance und Conversion-Raten.',
    features: [
      'Konversionsfokussiert',
      'A/B-Testing-fähig',
      'Formular-Integration',
      'Performance-Optimierung',
      'Analytics-Tracking',
      'CTA-Optimierung'
    ],
    icon: 'layout'
  },
  {
    title: 'E-Commerce Webseiten',
    description: 'Komplette E-Commerce-Lösungen mit sicherer Zahlungsabwicklung, Bestandsverwaltung und nahtlosem Einkaufserlebnis.',
    features: [
      'Zahlungsintegration',
      'Produktverwaltung',
      'Warenkorb',
      'Bestellverfolgung',
      'Sicherer Checkout',
      'Lagerverwaltung'
    ],
    icon: 'shoppingCart'
  }
];

export const CONTACT_EMAIL = 'cs8.code@gmail.com';
export const SITE_TITLE = 'codecs8';
export const AUTHOR_NAME = 'Cengiz Salihoglu';

export const HERO_CONTENT: HeroContent = {
  greeting: "Hallo, ich bin Cengiz",
  tagline: "Ich entwickle digitale Lösungen für lokale Unternehmen.",
  description: "Von der Idee bis zur maßgeschneiderten, funktionalen Webanwendung - Ich kombiniere technische Expertise mit kreativem Design um außergewöhnliche digitale Erlebnisse zu schaffen.",
  ctaButton: "Meine Arbeit"
};

export const SERVICES_CONTENT: ServicesContent = {
  title: "Was ich mache",
};

export const PROJECTS_CONTENT: ProjectsContent = {
  title: "Meine aktuellen Projekte",
  subtitle: ""
};

export const CONTACT_CONTENT: ContactContent = {
  title: "Wie geht's weiter?",
  subtitle: "Kontakt",
  description: "Haben Sie eine Frage oder ein konkretes Projekt vor Augen? Ich bin offen für neue Ideen und freue mich darauf, von Ihnen zu hören!",
  email: "cs8.code@gmail.com",
  emailLabel: "Sag Hallo!"
};

export const FOOTER_CONTENT: FooterContent = {
  copyright: "© 2025 codecs8. Alle Rechte vorbehalten.",
  builtWith: "Erstellt mit React & Tailwind CSS"
};