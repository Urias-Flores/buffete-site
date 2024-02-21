import { Link } from "@remix-run/react";
import Logo from "~/components/logo";
export default function Navigator (){


  return (
    <header>
      <div className='header'>
        <div className='logo_brand'>
          <img src="/favicon.ico" alt="logo" className='logo'/>
          <Logo/>
          <img src="/images/flag.png" alt="flag" className='flag'/>
        </div>
        <nav className='navigator'>
          <Link className='navigator_route' to='/'>Inicio</Link>
          <Link className='navigator_route' to='/aboutus'>Acerca de</Link>
          <Link className='navigator_route' to='/services'>Servicios</Link>
          <Link className='navigator_route' to='/contact'>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
