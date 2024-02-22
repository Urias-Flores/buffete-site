import stylesServices from '~/styles/services.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesServices
    }
  ]
}

export default function servicesEscriturasPublicas (){
  return (
      <main>
          <h1 className="heading">
              Escrituras Públicas
          </h1>

          <ul className="services">
              <li className="service">Poder Para pleitos.</li>
              <li className="service">Poder de Representación.</li>
              <li className="service">Poder de Administración.</li>
              <li className="service">Compra Venta.</li>
              <li className="service">Protocolizaciones de sociedades.</li>
              <li className="service">Constitución de Sociedades.</li>
              <li className="service">Constitución de Comerciante Individual.</li>
              <li className="service">Actas Notariales.</li>
              <li className="service">Reconocimiento de Menores.</li>
              <li className="service">Cancelaciones de Hipotecas.</li>
              <li className="service">Propiedad en Condominio.</li>
              <li className="service">Reunión o agrupación de lotes.</li>
              <li className="service">Individualización de inmuebles.</li>
              <li className="service">Donaciones.</li>
              <li className="service">Testamento.</li>
              <li className="service">Notarizaciones.</li>
              <li className="service">Tramites Administrativos.</li>
          </ul>
      </main>
  )
}
