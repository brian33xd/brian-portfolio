import { skills } from '../data/skills'
import foto from '../assets/images/proyect.jpg'

export const About = () => {

  return (
    <div className='Page page-about' id='About'>
      <h1 className='about__title'>About me.</h1>
      <main className='about__container'>
        <section className="about__social">
          <h2 className='social__name'>Brian Godoy</h2>
          <div className="social__mask-image">
            <img src={foto} alt="mine" className='social__img'
              decoding='async'
              loading='lazy' />
          </div>

          <div className="social__icons-container">
            <a href="https://github.com/brian33xd" className='social__icon' target="_blank" rel='noreferrer'>
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/brian-godoy-432156199/" className='social__icon' target="_blank" rel='noreferrer'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://twitter.com/Brian51965726" className='social__icon' target="_blank" rel='noreferrer'>
              <ion-icon name="logo-twitter"></ion-icon></a>
          </div>

          <a href="" className='social__curriculum'>
            Download Resume </a>
        </section >


        <section className="about__skills">
          <div className='about__social-description'>
            <p className='social__description'>Mi principal objetivo en la industria de la programación es crecér profesionalmente, aportar mi conocimiento para crear y mejorar/optimizar proyectos web con nuevas funcionalidades
              que le simplifiquen a la gente el uso de estos.</p>


          </div>

          <div className="skills__container">
            <h3 className='skills__title'>My Skills</h3>

            <main className="skills__list">

              {
                skills.map(skill => {

                  return (
                    <div className='skills__skill' key={skill.id}>
                      <img src={skill.id}
                        alt="skill"
                        className='skill__image'
                        decoding='async'
                        loading='lazy' />
                      <h4 className='skill__name'>{skill.name}</h4>
                    </div>
                  )
                })

              }

            </main>
          </div>
        </section>
      </main>

    </div>
  )
}
