import React from "react";
import "./ServicesExtended.scss";
import servicesExtended from "../../utils/constants/servicesExtended";
const ServicesExtended = () => {
  return (
    <div>
      {servicesExtended.map((item, idx) => (
        <div
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.backImage})`,
          }}
          key={idx}
          className="service-extended-container"
        >
          <div>
            <div className="service-extended-title">
              <h2>{item.title}</h2>
            </div>
            <div className="service-extended-descriptions">
              {item.descriptions.map((description, idx) => (
                <div key={idx}>
                  <h5>{description.title}</h5>
                  <p>{description.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesExtended;
