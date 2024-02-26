import type { MetaFunction } from "@remix-run/node";
import { Link, redirect } from "@remix-run/react";
import { useState } from "react";
import stylesMain from '~/styles/main.css';
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesMain
    }
  ]
}

export function meta(){
  return (
    [
      { title: 'Inicio | Grupo Sosa Morales' },
      { name: "description", content: "Bienvenido al sitio oficial de Grupo Sosa Morales" },
      { charset: 'UTF-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ]
  )
}

export default function Index() {
  const [memberShowed, setMemberShowed] = useState(1);

  const verifyMember = () => {
    const members = document.querySelectorAll('.member');
    const team = document.querySelector('.team');
    const teamRect = team.getBoundingClientRect();
    const teamLeft = teamRect.left;
    const teamRight = teamRect.right;

    // Iterar sobre cada miembro
    members.forEach(member => {
      const memberRect = member.getBoundingClientRect();
      if (
        memberRect.left >= teamLeft &&
        memberRect.right <= teamRight
      ) {
        setMemberShowed(parseInt(member.id.replace('member', '')));
      }
    });
  }

  return (
    <main>
      <div className='container'>
        <h1 className='heading'>Equipo grupo sosa morales</h1>

        <section className='group'>
          <div className="team_container">
            <Link to={`#member${ memberShowed - 1 }`} className={`${ memberShowed === 1 && 'hide'}`}>
              <img 
                src="/images/chevron-left.svg" 
                alt="chevron" 
                className="team_chevron"
                onClick={ () => { setMemberShowed(memberShowed - 1) }}
              />
            </Link>

            <div className="team" onScroll={ verifyMember }>
              <div className='member' id="member1">
                <img src="/images/Marco_Sosa.webp" alt="menber" className='member_photo'/>
                <div className="member_content">
                  <h3 className='member_name'>Marco Tulio Sosa Morales</h3>
                  <p className='member_information'>Abogado y notario publico</p>
                  <p className='member_information'>Director Grupo Sosa Morales</p>
                </div>
              </div>

              <div className='member' id="member2">
                <img src="/images/Javier_Barahona.webp" alt="menber" className='member_photo'/>
                <div className="member_content">
                  <h3 className='member_name'>Abog. Javier B. Viera</h3>
                  <p className='member_information'>Bufete Barahona Viera</p>
                  <p className='member_information'>La Ceiba, Atlantida, Honduras.</p>
                </div>
              </div>

              <div className='member' id="member3">
                <img src="/images/Vivian_Sevilla.webp" alt="menber" className='member_photo'/>
                <div className="member_content">
                  <h3 className='member_name'>Abog. Vivian M. Sevilla</h3>
                  <p className='member_information'>Firma Legal Sevilla</p>
                  <p className='member_information'>Tela, Atlantida, Honduras</p>
                </div>
              </div>

              <div className='member' id="member4">
                <img src="/images/Luis_Chavez.webp" alt="menber" className='member_photo'/>
                <div className="member_content">
                  <h3 className='member_name'>Abog. Luis A. Chavez</h3>
                  <p className='member_information'>Bufete Soluciones Juridicas</p>
                  <p className='member_information'>Tela, Atlantida, Honduras</p>
                </div>
              </div>
            </div>

            <Link to={`#member${ memberShowed + 1 }`}  className={`${ memberShowed === 4 && 'hide'}`}>
              <img 
                src="/images/chevron-rigth.svg" 
                alt="chevron" 
                className="team_chevron"
                onClick={ () => { setMemberShowed(memberShowed + 1) }}
              />
            </Link>
          </div>
          
          <div className="selected">
            <Link 
              className={`selected_point ${memberShowed === 1 && 'active'}`} 
              to='#member1' 
              onClick={() => { setMemberShowed(1) }}
              >
            </Link>
            <Link 
              className={`selected_point ${memberShowed === 2 && 'active'}`} 
              to='#member2' 
              onClick={() => { setMemberShowed(2) }}
              >
            </Link>
            <Link 
              className={`selected_point ${memberShowed === 3 && 'active'}`} 
              to='#member3' 
              onClick={() => { setMemberShowed(3) }}
              >
            </Link>
            <Link 
              className={`selected_point ${memberShowed === 4 && 'active'}`} 
              to='#member4' 
              onClick={() => { setMemberShowed(4) }}
              >
            </Link>
          </div>
        </section>

        

        <h2 className='heading'>Servicios que ofrece Grupo Sosa Morales</h2>

        <section className='services'>
          <div className='service'>
            <p className='service_number'>1</p>
            <hr className='number_line'/>
            <p className='service_title'>Trámites no Contencioso</p>
            <Link className='service_link' to={'/services/tramites-no-contenciosos'}>Más información</Link>
          </div>

          <div className='service'>
            <p className='service_number'>2</p>
            <hr className='number_line'/>
            <p className='service_title'>Trámites Administrativos</p>
            <Link className='service_link' to={'/services/tramites-administrativos'}>Más información</Link>
          </div>

          <div className='service'>
            <p className='service_number'>3</p>
            <hr className='number_line'/>
            <p className='service_title'>Escrituras Públicas</p>
            <Link className='service_link' to={'/services/escrituras-publicas'}>Más información</Link>
          </div>

          <div className='service'>
            <p className='service_number'>4</p>
            <hr className='number_line'/>
            <p className='service_title'>Documentos Privados</p>
            <Link className='service_link' to={'/services/documentos-privados'}>Más información</Link>
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
        <p className='phrase_text'>No hay abogado más <br/> elocuente que el corazón</p>
        <p className='phrase_autor'>Sylvain Maréchal (1788)</p>
      </section>
    </main>
  );
}
