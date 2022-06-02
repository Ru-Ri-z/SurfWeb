import React from "react";
import "./FeaturedReports.scss";
import pdfES from "../../assets/pdfs/nuevasdinamicasES.pdf";
import pdfEN from "../../assets/pdfs/nuevasdinamicasEN.pdf";
import pdfExPOR from "../../assets/pdfs/executivesumPor.pdf";
import pdfExES from "../../assets/pdfs/executivesumES.pdf";
import pdfExEn from "../../assets/pdfs/executivesumEN.pdf";
const FeaturedReport = ({ item }) => {
  return (
    <div className="app__featured-reports-container" id="reportes">
      <div className="app__highlighted-reports-title">
        <h2>
          Featured <span>Report</span>
        </h2>
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
          <div className="app__highlighted-reports-slider-paragraphs">
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
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FeaturedReport;
