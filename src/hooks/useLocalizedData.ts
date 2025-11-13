import { useLanguage } from '../context/LanguageContext';
import * as enData from '../constants/data';
import * as deData from '../constants/data.de';
import { PROJECT_IMAGES } from '../constants/projectImages';

export function useLocalizedData() {
  const { language } = useLanguage();
  
  const data = language === 'de' ? deData : enData;
  
  // Merge language-specific project data with language-independent images
  const projects = data.PROJECTS.map((p) => ({
    ...p,
    // prefer shared images by stable project id, fall back to legacy `image` if present
    images: PROJECT_IMAGES[p.id] ?? (('image' in p && p.image) ? [p.image as string] : []),
  }));

  return {
    navItems: data.NAV_ITEMS,
    technologies: data.TECHNOLOGIES,
    projects,
    socialLinks: data.SOCIAL_LINKS,
    services: data.SERVICES,
    contactEmail: data.CONTACT_EMAIL,
    siteTitle: data.SITE_TITLE,
    authorName: data.AUTHOR_NAME,
    heroContent: data.HERO_CONTENT,
    servicesContent: data.SERVICES_CONTENT,
    projectsContent: data.PROJECTS_CONTENT,
    contactContent: data.CONTACT_CONTENT,
    footerContent: data.FOOTER_CONTENT,
  };
}