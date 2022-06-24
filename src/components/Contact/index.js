import React from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Contact = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
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
    <div className="app__contact-container" id="contact">
      <div className="app__contact-container-image"></div>
      <div className="app__contact-container-data">
        <div className="app__contact-container-form">
          <motion.h2
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? "translate(0%)" : "translate(10%)",
            }}
            transition={{ duration: 0.5, delay:0.4 }}
          >
            Contact
          </motion.h2>
          <form className="app__contact-form" onSubmit={onSubmit}>
            <input placeholder="Nombre" name="user_name" />
            <input placeholder="Email" name="user_email" />
            <textarea placeholder="Consulta" name="message"></textarea>
            <div></div>
            <input type="submit" value="Enviar" style={{ cursor: "pointer" }} />
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
