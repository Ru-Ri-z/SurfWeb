import React from "react";
import backgroundImage from "../../assets/coverpageimg.webp";
import backgroundImageMobile from "../../assets/mobile.webp";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./HeaderCarousel.scss";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import video2 from "../../assets/video1.mov";
import SlidePrevButton from "./SlidePrevButton";
import SlideNextButton from "./SlideNextButton";
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
        <SwiperSlide>
          <picture style={{ margin: 0, padding: 0 }}>
            <source srcSet={backgroundImage} media="(min-width: 1024px)" />
            <img
              src={backgroundImageMobile}
              alt="MDN"
              className="app__header-image-big"
            />
          </picture>
          {width < 1024 && <h2>Surf the Latam Digital Policy Scene</h2>}
          <div className="app__social-media-icons">
            <a href="#">
              <MdEmail size={30} color="#fff" />
            </a>
            <a
              href="https://www.linkedin.com/company/smcplus/"
              rel="nooponer noreferrer"
              target="_blank"
            >
              <FaLinkedinIn size={30} color="#fff" />
            </a>
            <a
              href="https://twitter.com/SMCplus"
              rel="nooponer noreferrer"
              target="_blank"
            >
              <FaTwitter size={30} color="#fff" />
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
            style={{ width: "100%", height: "100vh", backgroundColor: "black" }}
          />
        </SwiperSlide>
        <SlidePrevButton />
        <SlideNextButton />
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
