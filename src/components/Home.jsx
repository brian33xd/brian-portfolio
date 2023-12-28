
import { Link } from 'react-router-dom'
import profile from '../assets/icons/profile.svg'
export const Home = () => {
  return (
    <div className='Page Page-home'>
      <header className="home__header">
        <div className='home__image-cont'>
          <img src={profile} alt="profile" className='home__img' />
        </div>
      </header>

      <section className="home__title">
        <h3 className='home-portfolio'>Portfolio Web</h3>
        <h2 className='home-name'>Brian Godoy</h2>
        <h1 className='home-description'>Desarrollador Web Full Stack</h1>
      </section>

      <footer className="home__footer">
        <div className="home__buttons">
          <Link to='/Work' className="home__work home__button">Proyectos</Link>
          <Link to='/Contact' className="home__contact home__button">Contactar</Link>
        </div>
      </footer>
    </div>
  )
}
