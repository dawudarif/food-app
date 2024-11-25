import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import useTranslatedRoutes from "./hooks/useTranlatedRoutes";
import { LanguageWrapper } from "./i18n/LanguageWrapper";
import "./styles/globals.scss";

function App() {
  const routes = useTranslatedRoutes();
  const { i18n } = useTranslation();

  return (
    <>
      <Header />
      <Routes>
        {routes.map((item, index) => {
          return (
            <Fragment key={index}>
              <Route
                path={item.path}
                element={
                  <Navigate to={"/" + i18n.language + item.path} replace />
                }
              />
              <Route
                path={"/:lng" + item.path}
                element={<LanguageWrapper>{item.element}</LanguageWrapper>}
              />
            </Fragment>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
