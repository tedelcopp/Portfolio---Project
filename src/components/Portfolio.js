import React, { Component } from "react";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

export default class Portfolio extends Component {
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
      "NextJS",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "DBeaver",
      "TypeScript",
      "React Hot Toast",
      "React Lucide",
      "WordPress",
      "Landing Page",
      "frontend",
      "backend",
      "navegación",
      "optimización",
      "notificaciones",
      "iconografía",
      "modular",
      "escalable",
      "freelance",
      "compatibilidad",
      "experiencia del usuario",
      "estructura",
      "visualización",
      "diseño moderno",
      "acciones estratégicas",
      "conversión",
      "Hot",
      "Toast",
      "Lucide",
    ];

    return (
      <section id="portfolio">
        <h1>Proyectos</h1>
        <div className="portfolio-wrapper">
          <div className="portfolio-card-container">
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={`portfolio-card ${
                      key === 3 ? "bottom-card" : ""
                    }`}
                  >
                    <img
                      src={item.imgurl}
                      alt={item.name}
                      className="portfolio-card-img"
                    />
                    <section id="skills">
                      <div className="portfolio-card-content">
                        <h2>{item.name}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: highlightKeywords(
                              item.description,
                              keywords
                            ),
                          }}
                        />
                        <div className="portfolio-footer">
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                "• <u>Tecnologías:</u> " +
                                highlightKeywords(item.stack, keywords),
                            }}
                          />

                          <div className="portfolio-button-container">
                            <a
                              href={item.urlgithub}
                              className="portfolio-button"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub />
                            </a>
                            {item.urldeploy ? (
                              <a
                                href={item.urldeploy}
                                className="portfolio-button"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <GrDeploy />
                              </a>
                            ) : (
                              <button
                                className="portfolio-button blocked-button"
                                disabled
                              >
                                <GrDeploy />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
