import { proyects } from '../data/proyects'
import back from '../assets/icons/profile.svg'
import { categorias } from './helper/categorias';
export const Work = (() => {



  return (
    <div className='Page page-work'>


        <main className="work__proyects-container">
        <h1 className='work__title'>Proyectos.</h1>
         {proyects.map(proyect => {
          return (
            <article key={proyect.id} className='work__proyect'>
             <section className='proyect__mask'>
              <img src={back} alt="back" className='proyect__img'/>
             </section>
             
            
             
             <section className="proyect__info">
              <div className="proyect__links">
                <a href={proyect.url} className="proyect__link">
                Visit <ion-icon name="open-outline"></ion-icon>
              </a>
              <a href={proyect.github} className='proyect__link proyect__link-github'>
                Github <ion-icon name="logo-github"></ion-icon>
              </a>
              
              </div>
              <h3 className='proyect__title'>{proyect.nombre}</h3>
              <p className='proyect__description'>{proyect.descripcion}</p>
             <div className='proyect__categories-mask'>
              {categorias(proyect.categorias)}
            
              </div>

              </section>
            </article>
          )
         })}
        </main>
    </div>
  )
});


