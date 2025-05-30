// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// localStorage dan tilni yuklash funksiyasini ajratib olamiz
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') { // Faqatgina brauzer muhitida ishlasin
    return localStorage.getItem('selectedLanguage');
  }
  return null; // Server muhitida null qaytaramiz
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Initial tilni getInitialLanguage funksiyasidan olamiz
    // Agar getInitialLanguage null qaytarsa (ya'ni serverda bo'lsa), 'en' ni ishlatamiz
    fallbackLng: getInitialLanguage() || 'en',
    // debug: process.env.NODE_ENV === 'development'
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },

    detection: {
      order: [
        'cookie',
        'localStorage', // LanguageDetector tomonidan ishlatiladi, u xavfsiz tarzda foydalanadi
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['cookie'], // Agar foydalanuvchi tilni o'zgartirsa, uni cookie'da saqlash tavsiya etiladi
    },

    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ru', 'uz'],
    nonExplicitSupportedLngs: true,
  });

export default i18n;