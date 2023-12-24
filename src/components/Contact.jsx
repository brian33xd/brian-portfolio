
import getintouch from '../assets/images/getinTouch.svg'
export const Contact = () => {
  return (
    <div className='Page page-contact'>
        
          <h1 className='contact__title'>Contactame.</h1>
      

        <div className="contact__main">
          <section className="contact__cta">
            <img src={getintouch} alt="contact" className='contact__image'/>
          </section>
          <section className='contact__form-container'>
          <form className='contact__form'>
            <div className='form__person'>
            <section className='form__label-container'>
            <input type="text"  className='form__input' id='nombre'/>
            <label htmlFor="nombre" className='form__label'>Nombre</label>
            
            </section>
            <section className='form__label-container'>
            <input type="text" className='form__input' id='apellido'/>
              <label htmlFor="apellido" className='form__label'>Apellido</label>        
             
             </section>    
            </div>
            
            <div className='form__label-container'>
            <textarea className='form__input form__input-textarea' id='mensaje'></textarea>
            <label htmlFor="mensaje" className='form__label form__label-textarea'>Mensaje</label>
            
            
            </div>
            <button type='submit' className='form__input form__input-button'>Enviar</button>
          </form>
          </section>
        </div>

        <section className="contact__boxes">
          <div className='box'></div>
          <div className='box box-2'></div>
          <div className='box box-3'></div>
          <div className='box box-4'></div>
          <div className='box box-5'></div>
          <div className='box box-6'></div>
        </section>
    </div>
  )
}
