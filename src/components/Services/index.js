import React from "react";
import "./Services.scss";
import Brain from "../../assets/svgs/services/Brain";
import Table from "../../assets/svgs/services/Table";
import Waves from "../../assets/svgs/services/Waves";
import Surf from "../../assets/svgs/services/Surf";
const Services = () => {
  return (
    <div className="app__services-container" id="servicios">
      <div className="app__services-container-center">
        <div className="app__services-container-title">
          <h2>
            A set of services <span>designed for you</span>
          </h2>
        </div>
        <div className="app__services-container-cards">
          <div className="app__services-container-card">
            <div>
              <Brain />
            </div>
            <h3>Insights & regional intelligence</h3>
          </div>
          <div className="app__services-container-card">
            <div>
              <Table />
            </div>
            <h3>Coaching</h3>
          </div>
          <div className="app__services-container-card">
            <div>
              <Waves />
            </div>
            <h3>Localized advocacy support</h3>
          </div>
          <div className="app__services-container-card">
            <div>
              <Surf />
            </div>
            <h3>Positioning strategy</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
