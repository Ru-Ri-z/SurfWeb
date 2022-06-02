import React from "react";
import "./Clients.scss";
import clientsImg from "../../assets/clientes.png";
const Clients = () => {
  return (
    <div className="clients-container">
      <h2>
        Some of the<span> clients we served</span>
      </h2>
      <div className="clients-container-image">
        <img src={clientsImg} alt="clients" />
      </div>
    </div>
  );
};

export default Clients;
