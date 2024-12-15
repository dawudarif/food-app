import { Fragment } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import useTranslatedRoutes from "./hooks/useTranslatedRoutes";
import { LanguageWrapper } from "./i18n/LanguageWrapper";
import "./styles/globals.scss";

function App() {
  const routes = useTranslatedRoutes({ nav: false });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LanguageWrapper />} />
        {routes.map((item, index) => {
          return (
            <Fragment key={index}>
              <Route
                path={"/:lng" + item.path}
                element={<LanguageWrapper>{item.element}</LanguageWrapper>}
              />
            </Fragment>
          );
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
