import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import "./styles/globals.scss";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

export const routes = [
  { path: "/", name: "home", element: <Home /> },
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
