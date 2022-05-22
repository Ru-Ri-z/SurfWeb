import React from "react";
import "./OtherReports.scss";
import otherReportsList from "./otherReportsList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import SlideNextButton from "../HighlightedReports/SlideNextButton";
const OtherReports = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="app__others-reports-container">
      <div className="app__others-reports-title">
        <h2>Reportes anteriores</h2>
      </div>
      <div className="app__slider-others-reports">
        <Swiper
          slidesPerView={width < 1024 ? 1 : 3}
          spaceBetween={30}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {otherReportsList.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="app__others-reports-slider-frame" key={idx}>
                <iframe
                  src={item}
                  width="295"
                  height="412"
                  allow="autoplay"
                  title={`frame${idx}`}
                  loading="lazy"
                ></iframe>
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

export default OtherReports;
