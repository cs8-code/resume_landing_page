import type { NavItem, Project, Technology, Service, HeroContent, ServicesContent, ProjectsContent, ContactContent, FooterContent } from '../types';
import { TECHNOLOGIES_SHARED } from './shared';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Start' },
  { id: 'projects', label: 'Projekte' },
  { id: 'contact', label: 'Kontakt' },
];

export const TECHNOLOGIES: Technology[] = [...TECHNOLOGIES_SHARED];

export const PROJECTS: Project[] = [
  {
    id: 'siportal',
    title: 'Vernetzungsplattform für die Bauindustrie',
    status: 'In Entwicklung',
    description: 'Eine digitale Plattform, die Subunternehmer und Bauleiter vernetzt — verbindet Expertise mit Projekten und ermöglicht branchenweite Zusammenarbeit.',
    technologies: ['React', 'TypeScript', 'Node.js/Express', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/cs8-code/personalmanager_hektor.git',
    icon: 'smartphone',
    image: '/siportal_screenshot1.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    id: 'dashboard',
    title: 'Business Management Dashboard',
    status: 'Abgeschlossen',
    description: 'Eine plattformübergreifende Desktop-Anwendung für dienstleistungsorientierte Unternehmen zur Verwaltung des Tagesgeschäfts, der Kundenbeziehungen und der Teamplanung.' +
                  '\n\n Wichtigste Funktionen:\n' + 
                  '- Aufgabenboard im Kanban-Stil mit Drag-and-Drop-Funktionalität\n' + 
                  '- Kundenverwaltung mit vollständigen CRUD-Operationen\n' + 
                  '- Planung der Teamverfügbarkeit und Nachverfolgung von Zuweisungen\n' + 
                  '- Interaktives Dashboard mit Echtzeit-Kennzahlen und Wochenkalenderansicht\n' + 
                  '- Aktualisierung des Aufgabenstatus mit einem Klick in der gesamten Anwendung',
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
    title: 'Webseite für ein Grünpflegeunternehmen',
    status: 'Abgeschlossen',
    description: 'Eine professionelle Webseite für ein lokales Garten- und Landschaftsbauunternehmen, die deren Dienstleistungen in Gartenpflege, Baumpflege und Landschaftsgestaltung präsentiert. Mit Service-Portfolios, saisonalen Angeboten und einem integrierten Kontaktsystem für Anfragen und Beratungstermine.',
    technologies: [],
    github: 'https://github.com/cs8-code/thegreenbros.git',
    icon: 'palette',
    image: '/greenbros_screenshot.png',
    featured: false,
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
    featured: false,
    imagePosition: 'right',
  },
];

// Re-export SOCIAL_LINKS from shared
export { SOCIAL_LINKS } from './shared';

export const SERVICES: Service[] = [
  {
    title: 'Software as a Service (SaaS)',
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
    title: 'Landing Pages & Unternehmenswebseiten',
    description: 'Professionelle Webseiten und konversionsstarke Landing Pages für Ihr Unternehmen. Von einfachen Landing Pages bis zu vollständigen Unternehmenswebseiten, optimiert für Performance und Conversions.',
    features: [
      'Responsive Design',
      'SEO-Optimierung',
      'Formular-Integration',
      'Performance-Optimierung',
      'Analytics-Tracking',
      'Content Management'
    ],
    icon: 'layout'
  },
  {
    title: 'Individuelle Dashboards & Admin-Panels',
    description: 'Leistungsstarke Dashboards und Admin-Panels, maßgeschneidert für Ihre Geschäftsanforderungen. Visualisieren Sie Daten, verwalten Sie Benutzer und steuern Sie Ihre Plattform mit intuitiven Oberflächen.',
    features: [
      'Echtzeit-Datenvisualisierung',
      'Benutzerverwaltung',
      'Analytics & Reporting',
      'Rollenbasierte Zugriffskontrolle',
      'Individuelle Metriken & KPIs',
      'Interaktive Diagramme & Grafiken'
    ],
    icon: 'barChart'
  },
  {
    title: 'E-Commerce-Lösungen',
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

// Re-export shared constants
export { CONTACT_EMAIL, SITE_TITLE, AUTHOR_NAME } from './shared';

export const HERO_CONTENT: HeroContent = {
  greeting: "Hallo, ich bin Cengiz",
  tagline: "Ich entwickle digitale Lösungen für lokale Unternehmen.",
  description: "Von der Idee bis zur maßgeschneiderten, funktionalen Webanwendung - Ich kombiniere technische Expertise mit kreativem Design um außergewöhnliche digitale Erlebnisse zu schaffen.",
  ctaButton: "Meine Arbeit"
};

export const SERVICES_CONTENT: ServicesContent = {
  title: "Was ich anbiete",
};

export const PROJECTS_CONTENT: ProjectsContent = {
  title: "Aktuelle Projekte",
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