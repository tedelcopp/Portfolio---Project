import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      successMessage: '',
      errorMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // Limpiar los mensajes de error cuando se comienza a escribir
    if (this.state.errorMessage) {
      this.setState({ errorMessage: '' });
    }

    this.setState({ [name]: value });
  };

  sendEmail = async (e) => {
    e.preventDefault();

    const nameError = !this.state.name ? 'Please enter your name.' : '';
    const emailError = !this.state.email ? 'Please enter your email.' : '';
    const messageError = !this.state.message ? 'Please enter your message.' : '';

    if (nameError || emailError || messageError) {
      this.setState({
        errorMessage: 'Please fill in all the fields.',
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      this.setState({
        errorMessage: 'Please enter a valid email address.',
        successMessage: '',
      });
      return;
    }

    const emailData = {
      user_name: this.state.name,
      user_email: this.state.email,
      message: this.state.message,
    };

    try {
      const response = await emailjs.send(
        'service_378vtrg',
        'template_odpoh9i',
        emailData,
        'THDtUsAxnateC4RGm'
      );

      console.log('Respuesta de EmailJS:', response);

      this.setState({
        successMessage: 'Your email has been sent successfully! You will receive a response soon.',
        errorMessage: '',
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email via EmailJS:', error);

      this.setState({
        errorMessage: 'There was an error sending the email. Please try again.',
        successMessage: '',
      });
    }
  };

  render() {
    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="lead">
                Feel free to contact me for any work or suggestions below!
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
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group mx-auto">
                  <input
                    type="email"
                    name="email"
                    className="form-control custom-input-width"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group mx-auto">
                  <textarea
                    name="message"
                    className="form-control custom-input-width"
                    placeholder="Message"
                    rows="5"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>

                {this.state.errorMessage && (
                  <div className="custom-alert custom-alert-danger">
                    {this.state.errorMessage}
                  </div>
                )}

                {this.state.successMessage && (
                  <div className="custom-alert custom-alert-success">
                    {this.state.successMessage}
                  </div>
                )}

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
