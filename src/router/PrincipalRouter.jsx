import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "../components/Home.jsx";
import { About } from "../components/About.jsx";
import { Work } from "../components/Work.jsx";
import { Contact } from "../components/Contact.jsx";
import { useTranslation } from "react-i18next";

export const PrincipalRouter = () => {
  const { t } = useTranslation();

  const red = useRef();
  const blue = useRef();
  const violet = useRef();
  const green = useRef();

  const [active, setActive] = useState(true);

  useEffect(() => {
    red.current.style = "--clr: #FF4545";
    blue.current.style = "--clr: #3E84F0";
    violet.current.style = "--clr: #BB2BE2";
    green.current.style = "--clr: #3EDE25";
  }, []);
  return (
    <BrowserRouter>
      <nav className={active ? "nav__menu" : "nav__menu show"}>
        <div
          className="nav-close-open"
          onClick={() => setActive(!active)}
        ></div>

        <ul className="menu">
          <li className="menu__option">
            <NavLink
              to="/Inicio"
              className={({ isActive }) =>
                isActive ? "activado menu__option-link" : "menu__option-link"
              }
            >
              <div className="menu__option-icon" ref={red}>
                <ion-icon name="home-outline"></ion-icon>
              </div>

              <span className="menu__option-name">{t("Home")}</span>
            </NavLink>
          </li>
          <li className="menu__option">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "activado menu__option-link" : "menu__option-link"
              }
            >
              <div className="menu__option-icon" ref={violet}>
                <ion-icon name="person-outline"></ion-icon>
              </div>
              <span className="menu__option-name">{t("Skills")}</span>
            </NavLink>
          </li>
          <li className="menu__option">
            <NavLink
              to="/Work"
              className={({ isActive }) =>
                isActive ? "activado menu__option-link" : "menu__option-link"
              }
            >
              <div className="menu__option-icon" ref={blue}>
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>
              <span className="menu__option-name">{t("Work")}</span>
            </NavLink>
          </li>

          <li className="menu__option">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "activado menu__option-link" : "menu__option-link"
              }
            >
              <div className="menu__option-icon" ref={green}>
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <span className="menu__option-name">{t("Call")}</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className="main__content">
        <Routes>
          <Route path="/" element={<Navigate to="/Inicio" />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
