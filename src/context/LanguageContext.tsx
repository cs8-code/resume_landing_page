import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Respect an explicit user choice if they already set a language.
    // If they never set a language in this browser, default to German ('de').
    const savedLanguage = localStorage.getItem('language');
    const userSetFlag = localStorage.getItem('languageSetByUser') === 'true';

    if (userSetFlag) {
      return (savedLanguage === 'de' || savedLanguage === 'en') ? (savedLanguage as Language) : 'de';
    }

    // No explicit user preference found — default to German.
    return 'de';
  });

  const setLanguageWithLog = (lang: Language) => {
    localStorage.setItem('language', lang);
    // Mark that the user explicitly chose a language so we respect it on future loads.
    localStorage.setItem('languageSetByUser', 'true');
    // Update HTML lang attribute
    document.getElementById('html-root')?.setAttribute('lang', lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageWithLog }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}