import {Link} from "@remix-run/react";

export default function Footer (){
  return (
    <footer className='footer'>
      <div className='enterprise'>
        <p className='enterprise_name'>Grupo Sosa Morales</p>
        <p className='enterprise_information'>Política de privacidad</p>
        <p className='enterprise_copyrigth'>&copy;creado por Compcel.com</p>
      </div>

      <div className="contact">
        <p className="contact_address">
          Edificio Grinsom, Primera Planta, Avenida Honduras, dos cuadras y media al Sur del Parque Central, Barrio El
          Centro, Tela, Departamento de Atlántida, Honduras, C.A
        </p>
        <p className="contact_email">grupolegal2002@yahoo.com</p>
        <p className="contact_phone">9992-9385/ 2448-1042</p>
      </div>

      <div className="contact_simbols">
        <Link to='https://wa.me/50499929385'>
          <img src="/images/phone.svg" alt="phone"/>
        </Link>
        <Link to='mailto:grupolegal@yahoo.com'>
          <img src="/images/mail.svg" alt="email"/>
        </Link>
      </div>
    </footer>
  )
}
