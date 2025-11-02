import type { NavItem, Project, Technology, SocialLink, Service, HeroContent, AboutContent, ServicesContent, ProjectsContent, ContactContent, FooterContent } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Start' },
  { id: 'about', label: 'Über mich' },
  { id: 'services', label: 'Leistungen' },
  { id: 'projects', label: 'Projekte' },
  { id: 'contact', label: 'Kontakt' },
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
    title: 'Vernetzungsplattform für die Bauindustrie',
    description: 'Eine digitale Plattform, die Subunternehmer und Bauleiter vernetzt — verbindet Expertise mit Projekten und ermöglicht branchenweite Zusammenarbeit.',
    technologies: ['React', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS'],
    github: 'https://github.com/cs8-code/siportal.git',
    external: 'https://siportal.bolt.host/',
    icon: 'smartphone',
    image: '/siportal-screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    title: 'Webseite für Entrümpelungsdienste',
    description: 'Eine moderne Webseite für einen lokalen Entrümpelungsservice mit Leistungsbeschreibungen, Kundenreferenzen und einem Kontaktformular für Anfragen und Angebote.',
    technologies: [],
    external: 'https://cs8-code.github.io/spaceheroes/',
    icon: 'palette',
    image: '/spaceheroes_screenshot.png',
    featured: true,
    imagePosition: 'right',
  },
  {
    title: 'Webseite für Gartenbauservice',
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
  { href: 'mailto:cs8-code@gmail.com', icon: 'mail', label: 'E-Mail' },
];

export const SERVICES: Service[] = [
  {
    title: 'Unternehmenswebseiten',
    description: 'Professionelle Webseiten, maßgeschneidert für Ihre Geschäftsanforderungen. Klares Design, schnelle Performance und mobiloptimierte Layouts, die Ihre Marke hervorheben.',
    features: [
      'Individuelles Design',
      'Mobile Optimierung',
      'SEO-Optimierung',
      'Schnelle Ladezeiten',
      'Content Management',
      'Analytics-Integration'
    ],
    icon: 'globe'
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

export const CONTACT_EMAIL = 'cs8-code@gmail.com';
export const SITE_TITLE = 'cs8code';
export const AUTHOR_NAME = 'Cengiz Salihoglu';

export const HERO_CONTENT: HeroContent = {
  greeting: "Hallo, ich bin",
  tagline: "Ich entwickle maßgeschneiderte Webanwendungen für lokale Unternehmen im Ruhrgebiet.",
  description: "Ich bin Softwareentwickler und spezialisiere mich auf die Erstellung außergewöhnlicher digitaler Produkte. Aktuell konzentriere ich mich auf die Entwicklung moderner, barrierefreier und leistungsstarker Webanwendungen.",
  ctaButton: "Meine Arbeit ansehen"
};

export const ABOUT_CONTENT: AboutContent = {
  sectionNumber: "01",
  title: "Über Mich",
  paragraphs: [
    "Hallo! Ich bin Cengiz, ein Softwareentwickler aus Mülheim an der Ruhr. Ich unterstütze kleine Unternehmen im Ruhrgebiet dabei, moderne, zuverlässige und benutzerfreundliche Webseiten zu erstellen – vom Konzept bis zum fertigen Internetauftritt.",
    "Nach meinem Informatikstudium 2021 war ich als Softwareentwickler für Technologieunternehmen in Deutschland tätig, unter anderem für Capgemini und ALDI SÜD IT. Parallel dazu begann ich, kleine Webanwendungen zum Spaß zu entwickeln.",
    "Bis heute unterstütze ich kleine Unternehmen im Ruhrgebiet bei der Erstellung moderner, zuverlässiger und benutzerfreundlicher Webseiten – vom Konzept bis zum fertigen Internetauftritt. Dabei lege ich besonderen Wert auf sauberen Code, skalierbare Architektur und maßgeschneiderte Lösungen, die auf Ihr Unternehmen zugeschnitten sind. Ob Sie eine neue Webseite benötigen, bestehende Systeme erweitern möchten oder technische Beratung suchen, ich helfe Ihnen dabei, Ihr digitales Projekt effizient umzusetzen."
  ],
  techListLabel: "Hier sind einige Technologien, mit denen ich zuletzt gearbeitet habe:",
  imageAlt: "Cengiz Salihoglu"
};

export const SERVICES_CONTENT: ServicesContent = {
  sectionNumber: "02",
  title: "Was ich für Sie tun kann",
  subtitle: "Vom Konzept bis zur Veröffentlichung biete ich komplette Lösungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind"
};

export const PROJECTS_CONTENT: ProjectsContent = {
  sectionNumber: "03",
  title: "Meine aktuellsten Projekte",
  subtitle: ""
};

export const CONTACT_CONTENT: ContactContent = {
  sectionNumber: "04",
  title: "Kontakt",
  description: "Ich bin derzeit offen für neue Möglichkeiten und würde gerne von Ihrem Projekt hören. Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten, ich werde mich bemühen, Ihnen schnellstmöglich zu antworten!",
  email: "cs8-code@gmail.com",
  emailLabel: "Schreiben Sie mir"
};

export const FOOTER_CONTENT: FooterContent = {
  copyright: "© 2025 Cengiz Salihoglu. Alle Rechte vorbehalten.",
  builtWith: "Erstellt mit React & Tailwind CSS"
};