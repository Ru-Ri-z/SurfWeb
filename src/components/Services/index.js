import React from "react";
import servicesList from "./servicesList";
import "./Services.scss";
const Services = () => {
  return (
    <div className="app__services-container" id="servicios">
      <div className="app__services-container-center">
        <div className="app__services-container-title">
          <h2>A set of services designed for you</h2>
        </div>
        <div className="app__services-container-cards">
          {servicesList.map((item, idx) => (
            <div className="app__services-container-card" key={idx}>
              <div>{item.img}</div>
              <h3>{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
