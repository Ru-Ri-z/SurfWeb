import React from "react";
import "./AboutCeo.scss";
import "../Button/Button.scss";
import imageCeo from "../../assets/imageCeo.png";
import cross from "../../assets/cross.png";
import { motion } from "framer-motion";
const AboutCeo = () => {
  return (
    <div className="app__about-containerCeo" id="nosotros">
      <div className="app__about-container-imageCeo">
        <div>
          <img src={imageCeo} alt="ceo" />
          <motion.img
            initial={{ top: "0%", right: "30%", opacity:0 }}
            whileInView={{ top: "70%", right: "30%", opacity:1 }}
            transition={{
              default: { duration: 1.5, ease:"easeInOut" },
            }}
            src={cross}
            alt="ceo"
            className="cross"
          />
        </div>
      </div>
      <div className="app__about-container-dataCeo">
        <h2>
          About <span>Sebastian</span>
        </h2>
        <p>
          Sebastian Cabello is the Founder and CEO of SmC+. He is an
          accomplished expert with vast experience driving collective action,
          public-private partnerships and technology and public policy advocacy
          in Latin America.
        </p>
        <p>
          SmC+ is a newly established firm providing policy consulting services
          to the Inter-American Bank (IDB), the Latin American Internet
          Association (ALAI) as well as key regional players like Microsoft,
          Google, Facebook, Cisco and American Tower.F
        </p>
        <p>
          Between 2010 and end-2018, he was Head of Latin America at the GSMA,
          the global association of the mobile industry, and led the
          organization’s advocacy activities in the region. Under that tenure,
          he was a Member of the National Committee on Spectrum of Colombia and
          the Latin American Internet for All Advisory Committee of the World
          Economic Forum.
        </p>
        <p>
          He holds a “Licenciado” degree in Economics and a Master in
          International Affairs from UC San Diego and has been a Fulbright
          scholar. He is also research fellow at the Center for Technology and
          Society (CeTyS) at Universidad de San Andres, Argentina.
        </p>
      </div>
    </div>
  );
};

export default AboutCeo;
