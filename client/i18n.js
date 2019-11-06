import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enlang from './translations/enlang.json';
import rulang from './translations/rulang.json';
import eslang from './translations/eslang.json';
import zhlang from './translations/zhlang.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    keySeparator: '.',
    resources: {
      en: {
        translation: enlang,
      },
      es: {
        translation: eslang,
      },
      zh: {
        translation: zhlang,
      },
      ru: {
        translation: rulang,
      },
    },
  });

export default i18n;
