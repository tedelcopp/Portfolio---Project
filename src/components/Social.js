import React, { Component } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

export default class Social extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="contact-details-container">
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="social-buttons">
            <button className="social-button linkedin-link">
              <a
                href="https://www.linkedin.com/in/edelcopp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-link" />
              </a>
            </button>
            <button className="social-button github-link">
              <a
                href="https://github.com/tedelcopp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="social-link" />
              </a>
            </button>
            <button className="social-button gmail-link">
              <a href="mailto:tomas.edelcopp@gmail.com">
                <SiGmail className="social-link" />
              </a>
            </button>
          </div>
          <div className="resume-button">
            <button className="jumping">
              <a
                href="https://drive.google.com/file/d/1u-iyRovLAIHLdCFwxu7pTqVXfgY4fkjn/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out my resume!
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
