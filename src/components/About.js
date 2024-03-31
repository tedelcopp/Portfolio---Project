import React, { Component } from 'react';

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
        <div className="eleven columns main-col centered">
          <div className="about-me">
            <h2>ABOUT ME</h2>
            <div className="profile-pic-container">
              <img className="profile-pic" src="images/profileprofile.png" alt="" />
            </div>
            <p>Hello!<span className="wave">👋</span>{resumeData.aboutme1} </p>
            <p>{resumeData.aboutme2}</p>
          </div>
                </div>
   </div>
      </section>
    );
  }
}
