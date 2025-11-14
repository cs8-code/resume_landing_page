import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const nextLanguage = language === 'en' ? 'de' : 'en';
  const buttonLabel = `Switch language to ${nextLanguage === 'en' ? 'English' : 'Deutsch'}`;

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors font-mono tracking-wider"
      aria-label={buttonLabel}
    >
      {language === 'en' ? 'DE' : 'EN'}
    </button>
  );
}