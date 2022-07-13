import React from "react";
import "./NewReports.scss";
import pdf from "../../assets/pdfs/compraspublicas.pdf";
import cross from "../../assets/cross-green.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const NewReport = ({ item }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });
  const [paraRef, paraInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <div className="app__highlighted-reports-container" id="reports">
      <motion.img
        src={cross}
        alt="cross"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            repeatDelay: 0,
          },
        }}
      />
      <div className="app__highlighted-reports-title">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          New <span>Report</span>
        </motion.h2>
      </div>
      <div className="app__slider-container-reports">
        <div className="app__highlighted-reports-slider">
          <div className="app__highlighted-reports-slider-frame">
            <iframe
              src={item.url}
              width="295"
              height="412"
              allow="autoplay"
              title={`frame1`}
              loading="lazy"
            ></iframe>
          </div>
          <motion.div
            className="app__highlighted-reports-slider-paragraphs"
            ref={paraRef}
            animate={{ opacity: paraInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3>{item.title}</h3>
            {item.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <div>
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="compraspublicas.pdf"
              >
                Download
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewReport;
