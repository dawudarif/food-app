import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const LanguageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { i18n } = useTranslation();
  const { lng } = useParams();

  React.useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
    } else if (!lng) {
      const savedLanguage = localStorage.getItem("language") || "en";
      i18n.changeLanguage(savedLanguage);
    }
  }, [lng, i18n]);

  return <>{children}</>;
};
