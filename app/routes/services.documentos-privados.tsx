import stylesServices from '~/styles/services.css'

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
      href: stylesServices
    }
  ]
}

export default function servicesDocumentosPrivados ({}){
  return (
    <main>
      <h1 className="heading">
        Documentos privados
      </h1>

      <ul className="services">
        <li className="service">Documentos privados de Terrenos, en caso de no tener o haberlo extraviado.</li>
        <li className="service">Contratos de Arrendamientos.</li>
        <li className="service">Cesión de Derechos</li>
        <li className="service">Contrato privado de compra venta</li>
        <li className="service">Contrato privado de paso de servidumbre</li>
        <li className="service">Documentos privados en general</li>
        <li className="service">Tramites Administrativos</li>
      </ul>
    </main>
  )
}
