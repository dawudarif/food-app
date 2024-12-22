import { useTranslation } from "react-i18next";
import About from "../pages/About/About";
import BookTable from "../pages/BookTable/BookTable";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import { getTranslationLocales } from "../utils/getTranslationLocales";

const useTranslatedRoutes = ({ type = "all" }: { type?: "all" | "nav" }) => {
  const labels = getTranslationLocales({ type: "label" }) as string[];
  const { i18n, t } = useTranslation();
  const lng = i18n.language;

  const routeList = [
    {
      path: "/book-a-table",
      name: t("routes.bookTableBtn"),
      element: <BookTable />,
    },
  ];

  const navRoutes = [
    { path: "/", name: t("routes.home"), element: <Home /> },
    { path: "/about", name: t("routes.about"), element: <About /> },
    { path: "/menu", name: t("routes.menu"), element: <Menu /> },
    { path: "/contact", name: t("routes.contact"), element: <Contact /> },
  ];

  const allPaths = [...navRoutes, ...routeList].flatMap((route) =>
    labels.map((label) => ({
      ...route,
      path: `/${label}${route.path}`,
    }))
  );

  const navPaths = navRoutes.map((route) => ({
    ...route,
    path: `/${lng}${route.path}`,
  }));

  if (type === "nav") {
    return navPaths;
  } else {
    return allPaths;
  }
};

export default useTranslatedRoutes;
