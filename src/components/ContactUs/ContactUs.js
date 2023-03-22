import React, { Component } from "react";
import style from "./ContactUs.css";

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below!
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets" />
        </div>
      </section>
    );
  }
}
