import React, { Component } from 'react';
import { FaHeart } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <h1> Made with <FaHeart style={{ color: 'red' }} /> by Tomás Edelcopp</h1>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item, key)=>{
                  return(
                    <li key={key}>
                      <a href={item.url}>
                      <i className={item.className} />
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}
