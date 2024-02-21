import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Inicio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className='container'>
      <h1 className='heading'>Equipo grupo sosa morales</h1>

      <section className='team'>
        <div className='member'>
          <img src="/images/Marco_Sosa.webp" alt="menber" className='member_photo'/>
          <h3 className='member_name'>Marco Tulio Sosa Morales</h3>
          <p className='member_information'>Abogado y notario publico</p>
          <p className='member_information'>Director Grupo Sosa Morales</p>
        </div>

        <div className='member'>
          <img src="/images/Javier_Barahona.webp" alt="menber" className='member_photo'/>
          <h3 className='member_name'>Abog. Javier B. Viera</h3>
          <p className='member_information'>Bufete Barahona Viera</p>
          <p className='member_information'>La Ceiba, Atlantida, Honduras.</p>
        </div>

        <div className='member'>
          <img src="/images/Vivian_Sevilla.webp" alt="menber" className='member_photo'/>
          <h3 className='member_name'>Abog. Vivian M. Sevilla</h3>
          <p className='member_information'>Firma Legal Sevilla</p>
          <p className='member_information'>Tela, Atlantida, Honduras</p>
        </div>

        <div className='member'>
          <img src="/images/Luis_Chavez.webp" alt="menber" className='member_photo'/>
          <h3 className='member_name'>Abog. Luis A. Chavez</h3>
          <p className='member_information'>Bufete Soluciones Juridicas</p>
          <p className='member_information'>Tela, Atlantida, Honduras</p>
        </div>
      </section>

      <h2 className='heading'>Servicios que ofrece Grupo Sosa Morales</h2>

      <section className='services'>
        <div className='service'>
          <p className='service_number'>1</p>
          <hr className='number_line'/>
          <p className='service_title'>Trámites no Contencioso</p>
          <Link className='service_link' to={'/tramites-no-contenciosos'}>Más información</Link>
        </div>

        <div className='service'>
        <p className='service_number'>2</p>
          <hr className='number_line'/>
          <p className='service_title'>Trámites Administrativos</p>
          <Link className='service_link' to={'/tramites-no-contenciosos'}>Más información</Link>
        </div>

        <div className='service'>
        <p className='service_number'>3</p>
          <hr className='number_line'/>
          <p className='service_title'>Escrituras Públicas</p>
          <Link className='service_link' to={'/tramites-no-contenciosos'}>Más información</Link>
        </div>

        <div className='service'>
          <p className='service_number'>4</p>
          <hr className='number_line'/>
          <p className='service_title'>Documentos Privados</p>
          <Link className='service_link' to={'/tramites-no-contenciosos'}>Más información</Link>
        </div>
      </section>
    </main>
  );
}
