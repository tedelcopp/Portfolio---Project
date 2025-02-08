import React, { Component } from "react";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

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
                        <p>{item.description}</p>

                        <div className="portfolio-footer">
                          <p>
                            • <u>Tecnologías:</u> {item.stack}
                          </p>
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
