import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
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
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
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
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>Habilidades</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="skills">
              <div className="skills__skill">HTML5</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Redux</div>
              <div className="skills__skill">Node.js</div>
              <div className="skills__skill">Express</div>
              <div className="skills__skill">PostgreSQL</div>
              <div className="skills__skill">MongoDB</div>
              <div className="skills__skill">Sequelize</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">MySQL</div>
              <div className="skills__skill">Vue.js</div>
              <div className="skills__skill">MUI</div>
              <div className="skills__skill">Vite</div>
              <div className="skills__skill">Python</div>
              <div className="skills__skill">Next.js</div>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}
