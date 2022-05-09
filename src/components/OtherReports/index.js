import React from "react";
import "./OtherReports.scss";
import otherReportsList from "./otherReportsList";
const OtherReports = () => {
  return (
    <div className="app__others-reports-container">
      <div className="app__others-reports-title">
        <h2>Reportes anteriores</h2>
      </div>
      <div className="app__slider-others-reports">
        {otherReportsList.map((item, idx) => (
          <div className="app__others-reports-slider-frame" key={idx}>
            <iframe
              src={item}
              width="295"
              height="412"
              allow="autoplay"
              title={`frame${idx}`}
            ></iframe>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default OtherReports;
