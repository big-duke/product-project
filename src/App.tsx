import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>Изменить тему</button>
      </div>

      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>loading ... </div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />}></Route>
          <Route path="/" element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
