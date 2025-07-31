import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const highlightKeywords = (text, keywords) => {
      let result = text;
      keywords.forEach((keyword) => {
        const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
        result = result.replace(regex, "<strong>$1</strong>");
      });
      return result;
    };

    const keywords = [
      "Docker",
      "Linux",
      "PostgreSQL",
      "WhatsApp",
      "Baileys",
      "Evolution API",
      "Chatwoot",
      "Oracle Cloud",
      "WordPress",
      "Figma",
      "correo electrónico",
      "WooCommerce",
      "e-commerce",
      "base de datos",
      "catálogo",
      "reuniones",
      "reuniones periódicas",
      "inglés",
      "desarrollo web",
      "gestión de contenido",
      "trabajo colaborativo",
      "entorno profesional",
      "entorno internacional",
      "internacional",
      "soluciones digitales",
      "WordPress",
      "código personalizado",
      "proyectos propios",
      "requerimientos de clientes",
      "planificación",
      "entrega final",
      "diseño",
      "desarrollo",
      "contenido",
      "temas",
      "plugins",
      "diseño responsivo",
      "funcionalidades a medida",
      "carga de contenido",
      "optimización visual",
      "puesta en marcha",
      "comunicación fluida",
    ];

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Educación</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, key) => {
                return (
                  <div key={key} className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        <span className="specialization">
                          {item.specialization}
                        </span>
                        <span>&bull;</span>{" "}
                        <em className="date">
                          <strong className="specialization">
                            {item.MonthOfPassing} {item.YearOfPassing}
                          </strong>
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experiencia</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item, key) => {
                return (
                  <div key={key} className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        <span className="specialization">
                          {item.specialization}
                        </span>
                        <span>&bull;</span>{" "}
                        <em className="date">
                          <strong className="specialization">
                            {item.MonthOfLeaving} {item.YearOfLeaving}
                          </strong>
                        </em>
                      </p>
                      <p
                        style={{ color: "#000" }}
                        dangerouslySetInnerHTML={{
                          __html: highlightKeywords(
                            item.Achievements,
                            keywords
                          ),
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
