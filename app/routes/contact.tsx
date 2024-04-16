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

      <section className="address">
          <h1 className="heading">
              Encuentranos aqui
            </h1>

          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.4239911765508!2d-87.44862560596671!3d15.781582061195305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f687de6aa1465d1%3A0xbf9ba1a64076d3f1!2sGRUPO%20SOSA%20MORALES%20%26%20ASOCIADOS!5e0!3m2!1ses-419!2shn!4v1713305575485!5m2!1ses-419!2shn" 
          width="100%" 
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
          >
          </iframe>
        </section>
    </main>
  )
}
