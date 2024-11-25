import { Fragment } from "react";
import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import { LanguageWrapper } from "./lib/LanguageWrapper";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Pages from "./pages/Pages";
import "./styles/globals.scss";

export const routes = [
  { path: "/", name: "home", element: <Home /> },
  { path: "/about", name: "about", element: <About /> },
  { path: "/menu", name: "menu", element: <Menu /> },
  { path: "/pages", name: "pages", element: <Pages /> },
  {
    path: "/contact",
    name: "contact",
    element: <Contact />,
  },
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((item, index) => {
          return (
            <Fragment key={index}>
              <Route
                path={item.path}
                element={<Navigate to={"/en" + item.path} replace />}
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
