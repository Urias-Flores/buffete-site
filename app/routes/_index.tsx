import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import stylesMain from '~/styles/main.css';
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesMain
    }
  ]
}
export const meta: MetaFunction = () => {
  return [
    { title: "Inicio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <div className='container'>
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
      </div>

      <h3 className='heading'>Representación procesal procesos judiciales en Honduras</h3>

      <section className="process-s">
        <div className='process_container'>
          <div className='process'>
            <p className="process_number">1</p>
            <p className="process_title">Materia de Familia</p>
            <ol className='process_list'>
              <li>Demandas de divorcio</li>
              <li>Demandas de alimentos</li>
              <li>Demandas de patria potestad</li>
            </ol>
          </div>

          <div className='process'>
            <p className="process_number">2</p>
            <p className="process_title">Materia Penal</p>
            <ol className='process_list'>
              <li>Representación legal en cada proceso penal contemplado en nuestras leyes</li>
            </ol>
          </div>

          <div className='process'>
            <p className="process_number">3</p>
            <p className="process_title">Materia Penal</p>
            <ol className='process_list'>
              <li>Demandas de Pago</li>
            </ol>
          </div>
        </div>
      </section>

      <section className='phrase'>
        <Link className='phrase_contact' to='/contact'>Contáctanos</Link>
        <p className='phrase_apostrophe'>&ldquo;</p>
        <p className='phrase_text'>No hay abogado más elocuente que el corazón</p>
        <p className='phrase_autor'>Sylvain Maréchal (1788)</p>
      </section>

      <footer className='footer'>
        <div className='enterprise'>
          <p className='enterprise_name'>Grupo Sosa Morales</p>
          <p className='enterprise_information'>Política de privacidad</p>
          <p className='enterprise_copyrigth'>&copy;creado por Compcel.com</p>
        </div>

        <div className="contact">
          <p className="contact_address">
            Edificio Grinsom, Primera Planta, Avenida Honduras, dos cuadras y media al Sur del Parque Central, Barrio El Centro, Tela, Departamento de Atlántida, Honduras, C.A
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
    </main>
  );
}
