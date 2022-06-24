import React from "react";
import backgroundImage from "../../assets/coverpageimg.webp";
import backgroundImageMobile from "../../assets/mobile.webp";
import "./HeaderCarousel.scss";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import video2 from "../../assets/video1.mov";
import SlidePrevButton from "./SlidePrevButton";
import SlideNextButton from "./SlideNextButton";
import SocialOne from "../../assets/svgs/social/SocialOne";
import SocialTwo from "../../assets/svgs/social/SocialTwo";
import SocialThree from "../../assets/svgs/social/SocialThree";
const HeaderCarousel = () => {
  const { width } = useWindowsDimensions();
  return (
    <div className="app__header-container" id="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "100%" }}>
          <img
            src={backgroundImage}
            alt="MDN"
            className="app__header-image-big-carousel"
          />

          {width < 1024 && <h2>Surf the Latam Digital Policy Scene</h2>}
          <div className="app__social-media-icons">
            <a href="#">
              <SocialOne />
            </a>
            <a
              href="https://www.linkedin.com/company/smcplus/"
              rel="nooponer noreferrer"
              target="_blank"
            >
              <SocialTwo />
            </a>
            <a
              href="https://twitter.com/SMCplus"
              rel="nooponer noreferrer"
              target="_blank"
            >
              <SocialThree />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <video
            src={video2}
            autoPlay
            controls
            loop
            muted
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "black",
              objectFit: "fill",
            }}
          />
        </SwiperSlide>
        <SlidePrevButton />
        <SlideNextButton />
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
