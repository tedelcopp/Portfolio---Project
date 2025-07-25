import React, { Component } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

export default class Social extends Component {
  render() {
    return (
      <div className="social-contact-container">
        <h2 className="social-title">+ Información</h2>
        <div className="social-contact-icons">
          <a
            href="https://www.linkedin.com/in/edelcopp/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tedelcopp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="mailto:tomas.edelcopp@gmail.com"
            className="social-icon gmail"
            aria-label="Email"
          >
            <SiGmail />
          </a>
        </div>
        <div className="social-contact-resume">
          <a
            href="https://drive.google.com/file/d/1U-Xdhn-67EGOmCacs3BN47TGMUkRyOUZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-contact-resume-link cv-button"
          >
            Curriculum Vitae
          </a>
        </div>
      </div>
    );
  }
}
