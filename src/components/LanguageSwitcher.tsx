import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  console.log('LanguageSwitcher rendering with language:', language);

  return (
    <button
      type="button"
      onClick={() => {
        console.log('Click detected');
        setLanguage(language === 'en' ? 'de' : 'en');
      }}
      className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors font-mono tracking-wider"
    >
      {language === 'en' ? 'DE' : 'EN'}
    </button>
  );
}