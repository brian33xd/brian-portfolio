import { DarkTheme } from "./components/DarkTheme";
import { PrincipalRouter } from "./router/PrincipalRouter";
import { useRef, useState } from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import es from "./i18n/es.json";

function App() {
  const [idioma, setIdioma] = useState("es");
  i18next.use(initReactI18next).init({
    lng: idioma,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });

  const cursor = useRef();

  const movingCursor = (e) => {
    let posY = e.clientY;
    let posX = e.clientX;

    cursor.current.style.left = `${posX - 13}px`;
    cursor.current.style.top = `${posY - 10}px`;
  };
  return (
    <div className="Main" onMouseMove={movingCursor}>
      <div className="Main__cursor" ref={cursor}></div>
      <div
        className={idioma == "es" ? "nav__idioma" : "nav__idioma ENGLISH"}
        onClick={() => {
          idioma == "es" ? setIdioma("en") : setIdioma("es");
        }}
      >
        <span className="idioma_ES">ES</span>
        <span className="idioma_EN">EN</span>
      </div>
      <PrincipalRouter />

      <DarkTheme />
    </div>
  );
}

export default App;
