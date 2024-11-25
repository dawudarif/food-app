import React from "react";
import { useTranslation } from "react-i18next";

const RTLProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const direction = process.env.ENABLE_RTL
      ? i18n.language === "ar" || i18n.language === "ur"
        ? "rtl"
        : "ltr"
      : "ltr";
    document.documentElement.setAttribute("dir", direction);
  }, [i18n.language]);

  return <>{children}</>;
};

export default RTLProvider;
