import { useTranslation } from "react-i18next";
import About from "../pages/About/About";
import BookTable from "../pages/BookTable/BookTable";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

const useTranslatedRoutes = ({ nav = true }: { nav?: boolean }) => {
  const { t } = useTranslation();

  const routeList = [
    {
      path: "/book-a-table",
      name: t("routes.bookTableBtn"),
      element: <BookTable />,
    },
  ];

  const navPaths = [
    { path: "/", name: t("routes.home"), element: <Home /> },
    { path: "/about", name: t("routes.about"), element: <About /> },
    { path: "/menu", name: t("routes.menu"), element: <Menu /> },
    { path: "/contact", name: t("routes.contact"), element: <Contact /> },
  ];

  if (nav) {
    return navPaths;
  } else {
    return [...navPaths, ...routeList];
  }
};

export default useTranslatedRoutes;
