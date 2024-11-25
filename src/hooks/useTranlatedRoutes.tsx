import React from "react";
import { useTranslation } from "react-i18next";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Pages from "../pages/Pages";

const useTranslatedRoutes = () => {
  const { t } = useTranslation();

  return [
    { path: "/", name: t("routes.home"), element: <Home /> },
    { path: "/about", name: t("routes.about"), element: <About /> },
    { path: "/menu", name: t("routes.menu"), element: <Menu /> },
    { path: "/pages", name: t("routes.pages"), element: <Pages /> },
    { path: "/contact", name: t("routes.contact"), element: <Contact /> },
  ];
};

export default useTranslatedRoutes;
