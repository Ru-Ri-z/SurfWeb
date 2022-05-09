import { React } from "react";
import { useSwiper } from "swiper/react";
import "./HighlightedReports.scss";
import arrow from "../../assets/arrow-purple.png";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div
      className="arrow-container-purple"
      onClick={() => swiper.slideNext()}
    >
      <img src={arrow} alt="arrow" />
    </div>
  );
}
