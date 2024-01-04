import { proyects } from "../data/proyects";
import back from "../assets/icons/profile.svg";
import { categorias } from "./helper/categorias";
import { useTranslation } from "react-i18next";
export const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="Page page-work">
      <main className="work__proyects-container">
        <h1 className="work__title">{t("Proyects")}</h1>
        {proyects.map((proyect) => {
          return (
            <article key={proyect.id} className="work__proyect">
              <section className="proyect__mask">
                <img
                  src={proyect.imagen}
                  alt="Proyect-img"
                  className="proyect__img"
                />
              </section>

              <section className="proyect__info">
                <div className="proyect__links">
                  <a
                    href={proyect.url}
                    className="proyect__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit <ion-icon name="open-outline"></ion-icon>
                  </a>
                  <a
                    href={proyect.github}
                    className="proyect__link proyect__link-github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github <ion-icon name="logo-github"></ion-icon>
                  </a>
                </div>
                <h3 className="proyect__title">{proyect.nombre}</h3>
                <p className="proyect__description">{proyect.descripcion}</p>
                <div className="proyect__categories-mask">
                  {categorias(proyect.categorias)}
                </div>
              </section>
            </article>
          );
        })}
      </main>
    </div>
  );
};
