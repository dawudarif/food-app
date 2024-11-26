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
  const content = document.getElementById("root");

  console.log(lng);

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

  return <>{children}</>;
};
