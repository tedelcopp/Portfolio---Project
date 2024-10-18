import React, { Component } from "react";
import { FaDatabase, FaReact } from "react-icons/fa";

export default class Skills extends Component {
  render() {
    return (
      <section className="tech-section">
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
              Experiencia con HTML, CSS, React, React-Redux, NextJS, TypeScript
              y Tailwind.
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <FaDatabase />
            </div>
            <h3>Back-End</h3>
            <p>Experiencia con Node, Express, SQL y no-SQL.</p>
          </div>
        </div>
      </section>
    );
  }
}
