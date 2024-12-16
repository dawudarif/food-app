import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { getTranslationLocales } from "../utils/getTranslationLocales";

const labels = getTranslationLocales({ type: "label" }) as string[];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    supportedLngs: [...labels],
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    detection: {
      order: ["path", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
