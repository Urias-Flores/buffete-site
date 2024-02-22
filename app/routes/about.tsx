import stylesAbout from '~/styles/about.css';

export function meta(){
  return [
    {
      title: 'Acerca de | Grupo Sosa Morales'
    }
  ]
}
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesAbout
    }
  ]
}

export default function about (){
  return (
    <main>
      <section className='container'>
        <h1 className='heading'>Grupos Sosa Morales</h1>
        <h3 className='subheading'>Fundado en 1992</h3>

        <p className='history'>
          Es una entidad legal Mercantil que nace en el año de 1992, formada con el fin de ofrecer
          servicios legales en las diferentes materias del derecho, procurando que las gestiones realizadas
          sean de esmero, calidad y eficiencia constante. También buscamos el equilibrio, salvaguardando los
          intereses de nuestros clientes sin olvidar los valores éticos, el respeto a los Colegas, la Sociedad
          civil , incluso aquellos grupos vulnerables que solicitan de nuestros servicios.
          Soñamos con trascender fuera de nuestras fronteras para dar apoyo a quienes lo requiriesen
          manteniendo los mismos estándares, gestionando las labores que nos confían sean de beneficio recíprocos.
          Sin olvidar esta expresión:
          “ LA OBRA MEJOR, ES LA QUE SE REALIZA, SIN LAS IMPACIENCIAS DEL ÉXITO INMEDIATO”.
        </p>


      </section>

      <section className='container'>
        <img className='banner' src="/images/about-banner.jpg" alt="banner"/>
      </section>

      <section className='information'>
        <div className='information_section'>
          <h4 className='section_title'>Misión</h4>

          <p className="section_text">
            Nuestra aspiración constante es brindar servicios Jurídicos confiables con propuestas contundentes,
            progresivas y funcionales, que garanticen la satisfacción y seguridad jurídica de nuestros representados.
          </p>
        </div>

        <div className='information_section'>
          <h4 className='section_title'>Visión</h4>

          <p className="section_text">
            En fidelidad con los intereses de nuestros representados, pretendemos ser dignos defensores
            de sus derechos.
          </p>
        </div>

        <div className='information_section'>
          <h4 className='section_title'>Objetivo</h4>

          <p className="section_text">
            Nuestro fin último es garantizarle a nuestros representados la defensa de sus intereses legales.
          </p>
        </div>
      </section>

      <section className='quote'>
        <p className='quote_simbol'> &ldquo; </p>
        <p className='quote_text'>
          “La obra mejor, es la que se realiza, <br/>
          sin las impaciencias <br/>
          del éxito inmediato”
        </p>
      </section>
    </main>
  )
}
