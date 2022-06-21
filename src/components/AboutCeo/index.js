import React from "react";
import "./AboutCeo.scss";
import "../Button/Button.scss";
import imageCeo from "../../assets/imageCeo.png";
import cross from "../../assets/cross.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Monitor from "../../assets/svgs/about/Monitor";
import Pencil from "../../assets/svgs/about/Pencil";
import Eye from "../../assets/svgs/about/Eye";
const AboutCeo = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="about-section">
      <div className="app__about-container" id="about" ref={titleRef}>
        <div className="app__about-container-data">
          <motion.h2
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? "translate(0%)" : "translate(-10%)",
            }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            About <span>us</span>
          </motion.h2>
          <motion.p
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            SmC+ is a digital policy strategy firm focused and based in Latin
            America. SmC+ is today serving global technology companies and
            international organizations to understand and act in the complex
            regional policy scene.{" "}
          </motion.p>
          <motion.a
            className="button"
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            href="https://twitter.com/search?q=%23SurfTheLatamDigitalPolicyScene&src=typed_query"
            rel="nooponer noreferrer"
            target="_blank"
          >
            Follow #SurfTheLatamDigitalPolicyScene
          </motion.a>
        </div>
        <div className="app__about-container-description">
          <motion.div
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
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
                Brief and visual reports supported by the possibility to access
                to exclusive primary information
              </p>
            </div>
            <div>
              <Eye />
              <p>
                High experience in managing the public agenda of national trade
                associations and multilateral organizations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="app__about-containerCeo" id="nosotros" ref={titleRef}>
        <div className="app__about-container-imageCeo">
          <div>
            <img src={imageCeo} alt="ceo" />
            <motion.img
              initial={{ top: "0%", right: "30%", opacity: 0, rotate: 0 }}
              whileInView={{ top: "70%", right: "30%", opacity: 1 }}
              animate={{ rotate: 360 }}
              transition={{
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease:"linear"
                },
                default: { duration: 1.5, ease: "easeInOut" },
              }}
              src={cross}
              alt="ceo"
              className="cross"
            />
          </div>
        </div>
        <div className="app__about-container-dataCeo">
          <motion.h2
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? "translate(0%)" : "translate(10%)",
            }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            About <span>Sebastian</span>
          </motion.h2>
          <motion.p
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Sebastian Cabello is the Founder and CEO of SmC+. He is an
            accomplished expert with vast experience driving collective action,
            public-private partnerships and technology and public policy
            advocacy in Latin America.
          </motion.p>
          <motion.p
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            SmC+ is a newly established firm providing policy consulting
            services to the Inter-American Bank (IDB), the Latin American
            Internet Association (ALAI) as well as key regional players like
            Microsoft, Google, Facebook, Cisco and American Tower.F
          </motion.p>
          <motion.p
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Between 2010 and end-2018, he was Head of Latin America at the GSMA,
            the global association of the mobile industry, and led the
            organization’s advocacy activities in the region. Under that tenure,
            he was a Member of the National Committee on Spectrum of Colombia
            and the Latin American Internet for All Advisory Committee of the
            World Economic Forum.
          </motion.p>
          <motion.p
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            He holds a “Licenciado” degree in Economics and a Master in
            International Affairs from UC San Diego and has been a Fulbright
            scholar. He is also research fellow at the Center for Technology and
            Society (CeTyS) at Universidad de San Andres, Argentina.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutCeo;
