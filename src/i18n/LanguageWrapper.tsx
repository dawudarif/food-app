import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getTranslationLocales } from "../lib/getTranslationLocales";

export const LanguageWrapper = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const content = document.getElementById("root");
  const languageLabels = getTranslationLocales({
    type: "label",
  }) as string[];

  React.useEffect(() => {
    if (lng === "ur" || lng === "ar") {
      content?.classList.add("urdu");
    } else {
      content?.classList.remove("urdu");
    }
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
    } else if (!lng) {
      const savedLanguage = localStorage.getItem("language") || "en";
      i18n.changeLanguage(savedLanguage);
    }
  }, [lng, i18n]);

  React.useEffect(() => {
    const currentLanguage = i18n.language;
    const matchedLanguage = languageLabels.find((lang) =>
      pathname.startsWith(`/${lang}`)
    );

    if (!matchedLanguage) {
      const newPath = `/${currentLanguage}${pathname}`;
      navigate(newPath, { replace: true });
    } else if (matchedLanguage !== currentLanguage) {
      const newPath = pathname.replace(
        `/${matchedLanguage}`,
        `/${currentLanguage}`
      );
      navigate(newPath, { replace: true });
    }
  }, [i18n.language, pathname, navigate]);

  return <>{children}</>;
};
