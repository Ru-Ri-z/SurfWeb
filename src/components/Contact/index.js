import React from "react";
import imageContact from "../../assets/contactimage.webp";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="app__contact-container" id="contacto">
      <div className="app__contact-container-image">
        <img src={imageContact} alt="contact" />
      </div>
      <div className="app__contact-container-data">
        <div className="app__contact-container-form">
          <h2>Contact</h2>
          <form className="app__contact-form">
            <input placeholder="Nombre" />
            <input placeholder="Email" />
            <textarea placeholder="Consulta"></textarea>
            <div></div>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
