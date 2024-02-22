import { useState } from "react";

import stylesContact from '~/styles/contact.css';

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesContact
    }
  ]
}

export default function contact (){
  const [name, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  return (
    <main className='container'>
      <h1 className="heading">
        Contáctanos
      </h1>

      <h3 className='subheading'>
        Para tus consultas llena el siguiente formulario:
      </h3>

      <img src="/images/about-banner.jpg" alt="banner" className='banner_image'/>

      <form className='form' action="post">
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Correo Electroncio'/>

        <input type="text" placeholder='Teléfono'/>
        <textarea
          name="message"
          id="message"
          placeholder='Escribe tu mensaje aqui'>
        </textarea>

        <input type="submit" value='Enviar'/>
      </form>
    </main>
  )
}
