import React, { useState } from "react";
import "./Team.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import teamList from "./teamList";
import SlideNextButton from "./SlideNextButton";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import SlidePrevButton from "./SlidePrevButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Team = () => {
  const [active, setActive] = useState(0);
  const { width } = useWindowDimensions();
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="app__team-container">
      <div className="app__team-title-container">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Our <span>Team</span>
        </motion.h2>
      </div>
      <div className="app__team-slider-container">
        <Swiper
          slidesPerView={width > 1024 ? 4 : 1}
          spaceBetween={30}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {teamList.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="app__team-slider-card"
                onMouseEnter={() => setActive(idx)}
              >
                <div className="app__team-slider-card-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="app__team-slider-card-data">
                  <h3 className={`app__team-slider-card-data-title`}>
                    {item.name}
                  </h3>
                  <p
                    className={`app__team-slider-card-data-desc ${
                      width < 1024 && "show-slider-desc"
                    } ${active === idx && "show-slider-desc"}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SlidePrevButton />
          <SlideNextButton />
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
