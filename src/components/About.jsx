import { skills } from "../data/skills";
import foto from "../assets/images/proyect.jpg";
import curriculum from "../assets/CV_Brian.pdf";
import curriculumEn from "../assets/CV_BrianEN.pdf";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="Page page-about" id="About">
      <h1 className="about__title">{t("About")}</h1>
      <main className="about__container">
        <section className="about__social">
          <h2 className="social__name">Brian Godoy</h2>
          <div className="social__mask-image">
            <img
              src={foto}
              alt="mine"
              className="social__img"
              decoding="async"
              loading="lazy"
            />
          </div>

          <div className="social__icons-container">
            <a
              href="https://github.com/brian33xd"
              className="social__icon"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/brian-godoy-432156199/"
              className="social__icon"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://twitter.com/Brian51965726"
              className="social__icon"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>

          <a
            href={t("About-cv") == "Download CV" ? curriculumEn : curriculum}
            download="Brian Godoy CV"
            className="social__curriculum"
          >
            {t("About-cv")}
          </a>
        </section>

        <section className="about__skills">
          <div className="about__social-description">
            <p className="social__description">{t("About-txt")}</p>
          </div>

          <div className="skills__container">
            <h3 className="skills__title">{t("About-stack")}</h3>

            <main className="skills__list">
              {skills.map((skill) => {
                return (
                  <div className="skills__skill" key={skill.id}>
                    <img
                      src={skill.id}
                      alt="skill"
                      className="skill__image"
                      decoding="async"
                      loading="lazy"
                    />
                    <h4 className="skill__name">{skill.name}</h4>
                  </div>
                );
              })}
            </main>
          </div>
        </section>
      </main>
    </div>
  );
};
