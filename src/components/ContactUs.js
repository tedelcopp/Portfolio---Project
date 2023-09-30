import React, { Component } from 'react';
import { Resend } from 'resend'; 

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
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const resend = new Resend('re_7iGEvUNt_LMpHSZqfMnUVSpeiNmwRn37B');

    const emailData = {
      from: 'Acme <onboarding@resend.dev>',
      to: ['tomas.edelcopp@gmail.com'], // Reemplaza con la dirección de correo deseada
      subject: 'Mensaje desde el formulario de contacto',
      html: `<p>Nombre: ${this.state.name}</p><p>Email: ${this.state.email}</p><p>Mensaje: ${this.state.message}</p>`,
    };

    try {
      // Envía el correo electrónico
      const data = await resend.emails.send(emailData);

      // Actualiza el estado para mostrar un mensaje de éxito
      this.setState({
        successMessage: 'El correo se ha enviado con éxito.',
        errorMessage: '', // Limpia cualquier mensaje de error anterior
      });

      // Puedes hacer más cosas con "data" si es necesario
      console.log(data);
    } catch (error) {
      // Maneja los errores y muestra un mensaje de error
      this.setState({
        errorMessage: 'Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.',
        successMessage: '', // Limpia cualquier mensaje de éxito anterior
      });

      console.error(error);
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
              <form className="contact-form" onSubmit={this.handleSubmit}>

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

                {this.state.successMessage && (
                  <div className="alert alert-success">{this.state.successMessage}</div>
                )}
                {this.state.errorMessage && (
                  <div className="alert alert-danger">{this.state.errorMessage}</div>
                )}

<div className="text-center">
  <button type="submit" className="btn btn-primary send-button">
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
