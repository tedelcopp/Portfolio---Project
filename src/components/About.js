import React, { Component } from 'react';

export default class About extends Component {
  handleLinkClick = (event) => {
    const links = document.querySelectorAll('.contact-details a');
    links.forEach((link) => link.removeAttribute('data-active'));
    event.target.setAttribute('data-active', 'true');
  };

  render() {
    let resumeData = this.props.resumeData;
    const linkStyle = {
      fontSize: '20px',
    };

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col centered">
            <div className="about-me">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
            </div>
            <div className="contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br />
                <span>{resumeData.address}</span>
                <br />
                <a
                  href={resumeData.socialLinks[2].url}
                  className="gmail-link"
                  data-active="false"
                  onClick={this.handleLinkClick}
                  target="_blank"
                >
                  <i className={resumeData.socialLinks[2].className} style={linkStyle}></i>
                </a>
                <a
                  href={resumeData.socialLinks[0].url}
                  className="linkedin-link"
                  data-active="false"
                  onClick={this.handleLinkClick}
                  target="_blank"
                >
                  <i className={resumeData.socialLinks[0].className} style={linkStyle}></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
