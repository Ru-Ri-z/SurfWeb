import React from "react";
import "./HighlightedReports.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import highlightedReportsList from "./highlitedReportsList";
import SlideNextButton from "./SlideNextButton";
const HighlightedReports = () => {
  return (
    <div className="app__highlighted-reports-container" id="reportes">
      <div className="app__highlighted-reports-title">
        <h2>Reportes destacados</h2>
      </div>
      <div className="app__slider-container-reports">
        <Swiper pagination={false} modules={[Pagination]} className="mySwiper" loop={true}>
          {highlightedReportsList.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="app__highlighted-reports-slider" key={idx}>
                <div className="app__highlighted-reports-slider-frame">
                  <iframe
                    src={item.url}
                    width="295"
                    height="412"
                    allow="autoplay"
                    title={`frame${idx}`}
                  ></iframe>
                </div>
                <div className="app__highlighted-reports-slider-paragraphs">
                  {item.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SlideNextButton />
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default HighlightedReports;
