import React, { Component } from "react";
import { FaDatabase, FaReact } from "react-icons/fa";

export default class Skills extends Component {
  render() {
    return (
      <section id="skills" className="tech-section">
        <h1>Tecnologías</h1>
        <p>
          Trabajo con una variedad de tecnologías en el mundo del Desarrollo
          Web, desde el FrontEnd hasta el BackEnd.
        </p>

        <div className="tech-categories">
          <div className="tech-card">
            <div className="tech-icon">
              <FaReact />
            </div>
            <h3>Front-End</h3>
            <p>
              Desarrollo enfocado en la <strong>experiencia de usuario</strong>,
              aplicando principios básicos de <strong>UX/UI</strong> para lograr
              interfaces claras y accesibles. Trabajo con <strong>React</strong>{" "}
              y <strong>Next.js</strong>, usando <strong>TypeScript</strong> y{" "}
              <strong>Tailwind CSS</strong> para mantener un código organizado y
              estilos consistentes. Además, consumo <strong>APIs REST</strong>{" "}
              para integrar datos de forma eficiente. Me enfoco en que cada
              vista sea intuitiva y funcional al usuario.
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <FaDatabase />
            </div>
            <h3>Back-End</h3>
            <p>
              Experiencia en desarrollo de <strong>APIs</strong> y lógica de
              servidor utilizando
              <strong> Node.js</strong> y <strong>Express</strong>. Trabajo con
              <strong> bases de datos relacionales (SQL)</strong> como{" "}
              <strong>PostgreSQL</strong> y<strong> MySQL</strong>, aplicando
              buenas prácticas de estructuración y seguridad. Actualmente estoy
              sumando experiencia en{" "}
              <strong>infraestructura en Oracle Cloud</strong>, configurando{" "}
              <strong>servidores</strong>, <strong>servicios</strong> y
              <strong>bases de datos</strong> para entornos productivos.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
