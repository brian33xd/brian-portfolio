
import { useState } from 'react'
import getintouch from '../assets/images/getinTouch.svg'
export const Contact = () => {
  const [Name, setName] = useState(false)
  const [Email, setEmail] = useState(false)
  const [Message, setMessage] = useState(false)
  const desactivarLabel = (e, state) => {
    let input = e.target.value.length
    if (input >= 1) {
      state(true)
    } else {
      state(false)
    }

  }

  return (
    <div className='Page page-contact'>

      <h1 className='contact__title'>Contactame.</h1>


      <div className="contact__main">
        <section className="contact__cta">
          <img src={getintouch} alt="contact" className='contact__image' />
        </section>
        <section className='contact__form-container'>
          <form target="_blank" className='contact__form' action="https://formspree.io/f/xjvnvvyp"
            method="POST">
            <div className='form__person'>
              <section className='form__label-container'>
                <input type="text" className='form__input' name='name' id='nombre' onChange={((e) => {
                  desactivarLabel(e, setName)
                })} required />
                {Name ? <label htmlFor="nombre" className='form__label label-active'>Nombre</label> : <label htmlFor="nombre" className='form__label'>Nombre</label>}


              </section>
              <section className='form__label-container'>
                <input type="text" className='form__input' name='email' id='email' onChange={((e) => {
                  desactivarLabel(e, setEmail)
                })} required />
                {Email ? <label htmlFor="email" className='form__label label-active'>Email</label> : <label htmlFor="nombre" className='form__label'>Email</label>}


              </section>
            </div>

            <div className='form__label-container'>
              <textarea className='form__input form__input-textarea' name='mensaje' id='mensaje' onChange={(e => {
                desactivarLabel(e, setMessage)
              })} required></textarea>

              {Message ? <label htmlFor="mensaje" className='form__label form__label-textarea label-active-textarea'>Mensaje</label> : <label htmlFor="mensaje" className='form__label form__label-textarea'>Mensaje</label>}



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
