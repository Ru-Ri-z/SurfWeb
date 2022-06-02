import React from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_136b6f5",
        "template_4p3lzqi",
        e.target,
        "Ydazqgf9SjOwUG1TN"
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success("¡Consulta enviada correctamente!");
          return;
        }
        throw new Error("Ocurrio un error");
      })
      .catch((error) => {
        toast.error("Ocurrio un error. Intente nuevamente.");
      });
  };

  return (
    <div className="app__contact-container" id="contacto">
      <div className="app__contact-container-image">
      </div>
      <div className="app__contact-container-data">
        <div className="app__contact-container-form">
          <h2>Contact</h2>
          <form className="app__contact-form" onSubmit={onSubmit}>
            <input placeholder="Nombre" name="user_name" />
            <input placeholder="Email" name="user_email" />
            <textarea placeholder="Consulta" name="message"></textarea>
            <div></div>
            <input type="submit" value="Enviar" style={{ cursor:"pointer" }}/>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
