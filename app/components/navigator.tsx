import { Link } from "@remix-run/react";
import Logo from "~/components/logo";
import {useState} from "react";
export default function Navigator (){
  const [showServices, setShowServices] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

        <img 
          src="/images/menu.svg"
          alt="menu" 
          className={`menu_icon ${ showMenu && 'active' }`}
          onClick={ () => { setShowMenu(!showMenu) }}
        />

        <nav className={`navigator ${ showMenu && 'active'}`}>
          <Link className='navigator_route' to='/' onClick={ () => { setShowMenu(false) }}>Inicio</Link>
          <Link className='navigator_route' to='/about' onClick={ () => { setShowMenu(false) }}>Acerca de</Link>
          <div className='navigator_route'>
            <div className='navigator_route_services'>
              <p
                onClick={ () => {setShowServices(!showServices)}}
                onMouseEnter={ () => {setShowServices(true)}}
                onMouseLeave={ () => {hideServices()}}
              >
                Servicios
              </p>

              <img src="/images/chevron-down.svg" alt="chevron" className={`chevron ${ showServices && 'active' }`}/>
            </div>

            <ul
              className={`nav_services ${showServices ? 'active' : ''}` }
            >
              <li><Link className='nav_service' to='/services/tramites-no-contenciosos' onClick={ () => { setShowMenu(false) }}>Trámites no contenciosos</Link></li>
              <li><Link className='nav_service'  to='/services/tramites-administrativos' onClick={ () => { setShowMenu(false) }}>Trámites administrativos</Link></li>
              <li><Link className='nav_service'  to='/services/escrituras-publicas' onClick={ () => { setShowMenu(false) }}>Escrituras públicas</Link></li>
              <li><Link className='nav_service'  to='/services/documentos-privados' onClick={ () => { setShowMenu(false) }}>Documentos privados</Link></li>
              <li><Link className='nav_service'  to='/services/representaciones-procesales' onClick={ () => { setShowMenu(false) }}>Representaciones procs.</Link></li>
            </ul>
          </div>
          <Link className='navigator_route' to='/contact' onClick={ () => { setShowMenu(false) }}>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
