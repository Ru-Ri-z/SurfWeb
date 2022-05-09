import { React } from "react";
import { useSwiper } from "swiper/react";
import "./Team.scss";
import arrow from "../../assets/pngfind.com-scribble-png-330448.png";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className="arrow-container" onClick={() => swiper.slideNext()}>
      <img src={arrow} alt="arrow" />
    </div>
  );
}
