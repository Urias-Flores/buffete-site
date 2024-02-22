import { Link } from "@remix-run/react";
import Logo from "~/components/logo";
import {useState} from "react";
export default function Navigator (){
  const [showServices, setShowServices] = useState(false);
  const hideServices = () => {
    setTimeout(() => {
      setShowServices(false)
    }, 1000)
  };

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
          <Link className='navigator_route' to='/about'>Acerca de</Link>
          <div className='navigator_route'>
            <p
              onMouseEnter={ () => {setShowServices(true)}}
              onMouseLeave={ () => {hideServices()}}
            >
              Servicios
            </p>
            <ul
              className={`nav_services ${showServices ? 'active' : ''}` }
            >
              <li><Link className='nav_service' to='/services/tramites-no-contenciosos'>Trámites no contenciosos</Link></li>
              <li><Link className='nav_service'  to='/services/tramites-administrativos'>Trámites administrativos</Link></li>
              <li><Link className='nav_service'  to='/services/escrituras-publicas'>Escrituras públicas</Link></li>
              <li><Link className='nav_service'  to='/services/documentos-privados'>Documentos privados</Link></li>
              <li><Link className='nav_service'  to='/services/representaciones-procesales'>Representaciones procesales</Link></li>
            </ul>
          </div>
          <Link className='navigator_route' to='/contact'>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
