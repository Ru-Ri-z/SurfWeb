import React from "react";
import "./About.scss";
import "../Button/Button.scss"
import imageabout from "../../assets/jan-majer-38WeNpygZts-unsplash.webp";
const About = () => {
  return (
    <div className="app__about-container" id="nosotros">
      <div className="app__about-container-data">
        <h2>Nosotros</h2>
        <p>
          SmC+ is a digital policy strategy firm focused and based in Latin
          America.
        </p>
        <p>
          SmC+ is today serving global technology companies and international
          organizations to understand and act in the complex regional policy
          scene.{" "}
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
      <div className="app__about-container-image">
        <img src={imageabout} alt="about" />
      </div>
    </div>
  );
};

export default About;
