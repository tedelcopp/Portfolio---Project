import React, { Component } from "react";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <h1>Some of my projects</h1>
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
                    <div className="portfolio-card-content">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <p>
                        • <u>Stack:</u> {item.stack}
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
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
