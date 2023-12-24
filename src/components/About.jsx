import { skills } from '../data/skills'
import foto from '../assets/images/photo.jpeg'

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
             loading='lazy'/>
          </div>

          <div className="social__icons-container">
            <a href="" className='social__icon'>
            <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="" className='social__icon'>
            <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="" className='social__icon'>
              <ion-icon name="logo-twitter"></ion-icon></a>
          </div>

          <a href="" className='social__curriculum'> 
           Download Resume </a>
          </section >
         

          <section className="about__skills">
          <div className='about__social-description'>
            <p className='social__description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit culpa dolorum accusamus, possimus tenetur sed, minus porro illum exercitationem amet voluptate provident, magni labore? Nulla maxime ut</p>
            
            <p className='social__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ipsam perspiciatis quisquam!</p>
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
                       loading='lazy'/>
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
