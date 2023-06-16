import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from './locales/en/en.json';
import ptTranslation from './locales/pt/pt.json';

// Configure i18next
i18n
.use(initReactI18next)
.init({
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation },
  },
  lng: 'pt', // Set the default language
  fallbackLng: 'pt', // Fallback language if translation for current language is missing
  interpolation: {
    escapeValue: false, // React already escapes content by default
  },
  detection: {
    order: ['redux'], // Detect language from Redux state
  },
});

export default i18n;