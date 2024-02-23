import styleService from '~/styles/services.css'

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
      href: styleService
    }
  ]
}

export default function servicesTramitesNoContenciosos (){
  return (
    <main>
      <h1 className="heading">
          Tramites no Contenciosos
      </h1>

      <ul className='services'>
        <li className='service'>Rectificación de inscripciones en el Registro Civil.</li>
        <li className='service'>Patrimonio familiar.</li>
        <li className='service'>Habilitación para comparecer en juicio.</li>
        <li className='service'>Emancipación voluntaria.</li>
        <li className='service'>Habilitación de edad.</li>
        <li className='service'>Información ad-perpetuam.</li>
        <li className='service'>Divorcio por mutuo consentimiento.</li>
        <li className='service'>Inventarios solemnes.</li>
        <li className='service'>La separación de hecho.</li>
        <li className='service'>Conciliación y arbitraje.</li>
        <li className='service'>Autorización para contraer segundas y ulteriores nupcias.</li>
        <li className='service'>Autorización para enajenar bienes de menores.</li>
        <li className='service'>Deslinde y amojonamiento.</li>
        <li className='service'>Celebración de matrimonios.</li>
        <li className='service'>Calificación de edad.</li>
        <li className='service'>Cesación de comunidad.</li>
        <li className='service'>Partición de bienes.</li>
      </ul>
    </main>
  )
}
