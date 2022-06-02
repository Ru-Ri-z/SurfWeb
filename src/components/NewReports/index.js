import React from "react";
import "./NewReports.scss";
import pdf from "../../assets/pdfs/compraspublicas.pdf";
import cross from "../../assets/cross-green.png";
const NewReport = ({ item }) => {
  return (
    <div className="app__highlighted-reports-container" id="reportes">
      <img src={cross} alt="cross"/>
      <div className="app__highlighted-reports-title">
        <h2>
          New <span>Report</span>
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
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="compraspublicas.pdf"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewReport;
