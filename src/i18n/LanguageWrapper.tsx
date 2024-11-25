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
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return <>{children}</>;
};
