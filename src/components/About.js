import React, { Component } from "react";

export default class About extends Component {
  handleLinkClick = (event) => {
    const links = document.querySelectorAll(".contact-details a");
    links.forEach((link) => link.removeAttribute("data-active"));
    event.target.setAttribute("data-active", "true");
  };

  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="about">
        <div className="row">
          <div className="eleven columns main-col centered">
            <div className="about-me">
              <h2>SOBRE MÍ</h2>
              <div className="profile-pic-container">
                <img
                  className="profile-pic"
                  src="images/profileprofile.png"
                  alt=""
                />
              </div>
              <p>
                Hola! 👋 Mi nombre es{" "}
                <span className="highlight">Tomás Edelcopp</span>. Nací en
                <span className="highlight"> Buenos Aires, Argentina</span>. En{" "}
                <span className="highlight">2022</span> comencé a formarme de
                manera autodidacta en el código, y al poco tiempo, completé un{" "}
                <span className="highlight">
                  bootcamp intensivo en desarrollo web
                </span>
                . Actualmente curso el segundo año de la{" "}
                <span className="highlight">
                  Tecnicatura Superior en Desarrollo de Software
                </span>
                , con el objetivo de seguir ampliando mis conocimientos y
                consolidar mi perfil profesional.
              </p>

              <p>
                Comence mis primeros pasos como desarrollador{" "}
                <span className="highlight">freelance</span>, trabajando en
                proyectos personales como{" "}
                <span className="highlight">Finanzas Ya!</span> y{" "}
                <span className="highlight">Darwin Studio Code</span>, donde
                pude aplicar mis conocimientos de forma práctica y asumir cada
                etapa del desarrollo por mi cuenta. Estas experiencias fueron
                clave para desarrollar autonomía, adaptarme a distintos
                contextos y fortalecer mis habilidades blandas, especialmente en
                la comunicación con clientes, la gestión de requerimientos y la
                organización del trabajo. Actualmente, ademas de mi trabajo como{" "}
                <span className="highlight">desarrollador backend</span> en{" "}
                <span className="highlight">RethinkTheWay</span>, continúo
                trabajando como <span className="highlight">freelancer</span>{" "}
                para empresas en proyectos puntuales, como los realizados para{" "}
                <span className="highlight">Garden Productions</span>, una
                empresa argentina con clientes en{" "}
                <span className="highlight">Estados Unidos</span>. En estos
                entornos colaboro junto a otros profesionales y sigo
                consolidando mis conocimientos en contextos técnicos reales,
                incorporando nuevas herramientas y buenas prácticas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
