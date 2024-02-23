import { useState } from "react";

import stylesContact from '~/styles/contact.css';

export function meta(){
  return (
    [
      { title: 'Contacto | Grupo Sosa Morales' },
      { name: "description", content: "Bienvenido al sitio oficial de Grupo Sosa Morales" },
      { charset: 'UTF-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ]
  )
}

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
    <main>
      <h1 className="heading">
        Contáctanos
      </h1>

      <h3 className='subheading'>
        Para tus consultas llena el siguiente formulario:
      </h3>
      
      <div className="container">
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
      </div>
    </main>
  )
}
