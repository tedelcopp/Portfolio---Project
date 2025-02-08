import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home" className="header">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Inicio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  Sobre mí
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Experiencia
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#skills">
                  Tecnologías
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Proyectos
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1>{resumeData.name}</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {resumeData.roleDescription}
              </h3>
              <hr />
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
