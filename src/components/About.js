import React, { Component } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

export default class About extends Component {
  handleLinkClick = (event) => {
    const links = document.querySelectorAll('.contact-details a');
    links.forEach((link) => link.removeAttribute('data-active'));
    event.target.setAttribute('data-active', 'true');
  };

  render() {
    let resumeData = this.props.resumeData;
 
    return (
      <section id="about">
      <div className="row">
        <div className="eight columns main-col centered">
          <div className="about-me">
            <h2>About Me</h2>
            <p>Hello!<span className="wave">👋</span>{resumeData.aboutme1} </p>
            <div className="profile-pic-container">
              <img className="profile-pic" src="images/profileprofile.png" alt="" />
            </div>
            <p>{resumeData.aboutme2}</p>
          </div>
          <div className="about-master">
            <div className="contact-details">
              <h2>Contact Details</h2>
              <div className="social-links">
          
                <div>
                  <button>
                    <a className="linkedin-link" href="https://www.linkedin.com/in/edelcopp/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin /> 
                    </a>
                  </button>
                </div>
                <div>
                  <button>
                    <a  className="github-link" href="https://github.com/tedelcopp" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="social-link"/>
                    </a>
                  </button>
                </div>
                <div>
                  <button >
                    <a className="gmail-link" href="mailto:tomas.edelcopp@gmail.com">
                      <SiGmail className="social-link"/>
                    </a>
                  </button>
                </div>
                <div>
                  <button className="jumping">
                    <a href="https://drive.google.com/file/d/1u-iyRovLAIHLdCFwxu7pTqVXfgY4fkjn/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Check out my resume!
                    </a>
                  </button>
                </div>
                </div>
   </div>
              </div>
            </div>
          </div>
     
      </section>
    );
  }
}
