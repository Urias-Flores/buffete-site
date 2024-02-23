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
  const [name, setName] = useState('')
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
        <input type="text" placeholder='Nombre' value={name} onChange={(e) => { setName( e.target.value ) }}/>
        <input type="text" placeholder='Correo Electroncio' value={email} onChange={(e) => { setEmail(e.target.value) }}/>

        <input type="text" placeholder='Teléfono' value={phone} onChange={(e) => { setPhone(e.target.value) }}/>
        <textarea
          name="message"
          id="message"
          placeholder='Escribe tu mensaje aqui'
          value={message}
          onChange={(e) => { setMessage(e.target.value) }}
        >
        </textarea>

        <input type="submit" value='Enviar'/>
      </form>
    </main>
  )
}
