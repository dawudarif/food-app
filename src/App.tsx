import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import "./styles/globals.scss";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Pages from "./pages/Pages";

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
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
