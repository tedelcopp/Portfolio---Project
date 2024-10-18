import React, { Component } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendEmail = async (e) => {
    e.preventDefault();

    const nameError = !this.state.name ? "Por favor, ingresa tu nombre." : "";
    const emailError = !this.state.email
      ? "Por favor, ingresa tu correo electrónico."
      : "";
    const messageError = !this.state.message
      ? "Por favor, ingresa tu mensaje."
      : "";

    if (nameError || emailError || messageError) {
      return toast.error("Por favor, completa todos los campos.");
    }

    if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      return toast.error(
        "Por favor, introduce una dirección de correo electrónico válida."
      );
    }

    const emailData = {
      user_name: this.state.name,
      user_email: this.state.email,
      message: this.state.message,
    };

    try {
      await emailjs.send(
        "service_378vtrg",
        "template_odpoh9i",
        emailData,
        "THDtUsAxnateC4RGm"
      );

      toast.success("Tu correo fue enviado con éxito!");

      this.setState({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar tu correo!", error);
      toast.error(
        "Hubo un error al enviar el correo. Por favor, inténtalo de nuevo!."
      );
    }
  };

  render() {
    return (
      <section id="contact" className="contact-section">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p
                className="lead"
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif ",
                  textTransform: "uppercase",
                }}
              >
                Contacto{" "}
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
                    placeholder="Hola Tomás,hablemos!"
                    rows="5"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary send-button">
                    Enviar
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
