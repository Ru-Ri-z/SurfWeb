import React from "react";
import "./FeaturedReports.scss";
import pdfES from "../../assets/pdfs/nuevasdinamicasES.pdf";
import pdfEN from "../../assets/pdfs/nuevasdinamicasEN.pdf";
import pdfExPOR from "../../assets/pdfs/executivesumPor.pdf";
import pdfExES from "../../assets/pdfs/executivesumES.pdf";
import pdfExEn from "../../assets/pdfs/executivesumEN.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const FeaturedReport = ({ item }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const [paraRef, paraInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="app__featured-reports-container" id="reportes">
      <div className="app__highlighted-reports-title">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Featured <span>Report</span>
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
            ref={titleRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <h3>{item.title}</h3>
            {item.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <div>
              <a
                href={pdfES}
                target="_blank"
                rel="noopener noreferrer"
                download="nuevasdinamicasES.pdf"
              >
                Full report Spanish
              </a>
              <a
                href={pdfEN}
                target="_blank"
                rel="noopener noreferrer"
                download="nuevasdinamicasEN.pdf"
              >
                Full report English
              </a>
              <a
                href={pdfExPOR}
                target="_blank"
                rel="noopener noreferrer"
                download="nuevasdinamicasPOR.pdf"
              >
                Executive Summary Portuguese
              </a>
              <a
                href={pdfExES}
                target="_blank"
                rel="noopener noreferrer"
                download="executivesumES.pdf"
              >
                Executive Summary Spanish
              </a>
              <a
                href={pdfExEn}
                target="_blank"
                rel="noopener noreferrer"
                download="executivesumEN.pdf"
              >
                Executive Summary English
              </a>
            </div>
            <div >
              <a
                href="/other-reports"
                target="_blank"
                rel="nooponer noreferrer"
                style={{
                  width:"200px",
                  display:"inline",
                  border: "2px solid white",
                  color: "white",
                  backgroundColor: "transparent",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                More reports
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FeaturedReport;
