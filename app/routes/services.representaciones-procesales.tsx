import styleServices from '~/styles/services.css'

export function meta(){
  return (
    [
      { title: 'Servicios | Grupo Sosa Morales' },
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
      href: styleServices
    }
  ]
}

export default function servicesRepresentacionesProcesales (){
  return (
    <main>
      <h1 className="heading">Representación procesal</h1>

      <h3 className='service_subject'>Materia de familia</h3>
      <ul className="services">
        <li className="service">Demandas de Divorcio</li>
        <li className="service">Demandas de Alimentos</li>
        <li className="service">Demandas de Patria Potestad</li>
        <li className="service">Demandas en Materia de Familia en General</li>
      </ul>

      <h3 className="service_subject">Materia penal</h3>
      <ul className="services">
        <li className="service">Representación legal en cada Proceso Penal contemplado en nuestras leyes</li>
      </ul>


      <h3 className="service_subject">Materia civil</h3>
      <ul className="services">
        <li className="service">Demandas civiles en general</li>
      </ul>
    </main>
  )
}
