import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./globals.scss";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/contact",
    element: <Contact />,
  },
];

function App() {
  return (
    <Routes>
      {routes.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />;
      })}
    </Routes>
  );
}

export default App;
