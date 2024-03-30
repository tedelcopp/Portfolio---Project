import React, { Component } from 'react';
import { PiCoffeeFill } from "react-icons/pi";
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendEmail = async (e) => {
    e.preventDefault();

    const nameError = !this.state.name ? 'Please enter your name.' : '';
    const emailError = !this.state.email ? 'Please enter your email.' : '';
    const messageError = !this.state.message ? 'Please enter your message.' : '';

    if (nameError || emailError || messageError) {
      return toast.error('Please fill in all the fields.');
    }

    if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      return toast.error('Please enter a valid email address.');
    }

    const emailData = {
      user_name: this.state.name,
      user_email: this.state.email,
      message: this.state.message,
    };

    try {
      await emailjs.send(
        'service_378vtrg',
        'template_odpoh9i',
        emailData,
        'THDtUsAxnateC4RGm'
      );

      toast.success('Your email was sent successfully!');

      this.setState({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending your email:', error);
      toast.error('There was an error sending the email. Please try again!.');
    }
  };

  render() {
    return (
      <section id="contact" className="contact-section">
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="lead" style={{ color: "#fff", fontFamily: "sans-serif " }}>
                Take a coffee, let's talk! <PiCoffeeFill className="pi-coffee-icon" />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <form className="contact-form" onSubmit={this.sendEmail}>
                <div className="form-group mx-auto">
                  <input
                    type="text"
                    name="name"
                    className="form-control custom-input-width"
                    placeholder="Tomás Edelcopp"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group mx-auto">
                  <input
                    type="email"
                    name="email"
                    className="form-control custom-input-width"
                    placeholder="tomas.edelcopp@gmail.com"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group mx-auto">
                  <textarea
                    name="message"
                    className="form-control custom-input-width"
                    placeholder="Hi!, I want to work with you.."
                    rows="5"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary send-button"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
