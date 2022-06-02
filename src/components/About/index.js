import React from "react";
import "./About.scss";
import "../Button/Button.scss";
import Monitor from "../../assets/svgs/about/Monitor";
import Pencil from "../../assets/svgs/about/Pencil";
import Eye from "../../assets/svgs/about/Eye";
const About = () => {
  return (
    <div className="app__about-container" id="nosotros">
      <div className="app__about-container-data">
        <h2>
          About <span>us</span>
        </h2>
        <p>
          SmC+ is a digital policy strategy firm focused and based in Latin
          America. SmC+ is today serving global technology companies and
          international organizations to understand and act in the complex
          regional policy scene.{" "}
        </p>
        <a
          className="button"
          href="https://twitter.com/search?q=%23SurfTheLatamDigitalPolicyScene&src=typed_query"
          rel="nooponer noreferrer"
          target="_blank"
        >
          Follow #SurfTheLatamDigitalPolicyScene
        </a>
      </div>
      <div className="app__about-container-description">
        <div>
          <div>
            <Monitor />
            <p>
              Experts in digital public affairs with high-level access to
              regional decision- makers on public policy and strategy
            </p>
          </div>
          <div>
            <Pencil />
            <p>
              Brief and visual reports supported by the possibility to access to
              exclusive primary information
            </p>
          </div>
          <div>
            <Eye />
            <p>
              High experience in managing the public agenda of national trade
              associations and multilateral organizations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
