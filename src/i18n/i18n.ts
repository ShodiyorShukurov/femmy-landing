// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Agar detektor tilni topa olmasa, 'uz' ga qaytsin
    fallbackLng: 'uz', 
    
    // Brauzer tili detektorining tartibi va keshini sozlaymiz
    detection: {
      order: [
        'localStorage', // Birinchi localStorage ni tekshirsin
        'cookie',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['localStorage'], // Tanlangan tilni localStorage da saqlasin
      lookupLocalStorage: 'selectedLanguage', // localStorage da qaysi kalitni qidirish
    },

    backend: {
      loadPath: '/locales/{{lng}}.json',
    },

    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ru', 'uz'],
    nonExplicitSupportedLngs: true,
    // debug: process.env.NODE_ENV === 'development',
  });

export default i18n;