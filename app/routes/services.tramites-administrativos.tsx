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

export default function servicesTramitesAdministrativos (){
  return (
    <main>
      <h1 className="heading">
          Trámites Administrativos
      </h1>

      <ul className="services">
        <li className="service">Carta Poder para tramites bancarios, registrales, municipales.</li>
        <li className="service">Autorización para salir del país.</li>
        <li className="service">Autorización para solicitar pasaporte.</li>
        <li className="service">Declaraciones Juradas.</li>
        <li className="service">Traspasos de Armas.</li>
        <li className="service">Traspasos de Vehículos/ Cambio de Propietario y obtención de nuevas placas.</li>
        <li className="service">Licencias Sanitaria.</li>
        <li className="service">Licencia Ambiental.</li>
        <li className="service">Permiso de Operación de Negocios.</li>
        <li className="service">Permiso de Explotación.</li>
        <li className="service">Autorización de salida del país de Vehículo.</li>
        <li className="service">Apostilla, Autentica y Traducción de documentos.</li>
        <li className="service">Residencia y Permiso migratorio.</li>
        <li className="service">Naturalización en Honduras.</li>
        <li className="service">Legalización de documentos en Honduras.</li>
        <li className="service">Solicitud de Dominio Pleno.</li>
        <li className="service">Obtención de documentos en Registro Nacional de las Personas.</li>
        <li className="service">Autentica de copias y de firmas.</li>
      </ul>
    </main>
  )
}
