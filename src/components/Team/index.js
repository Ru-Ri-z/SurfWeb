import React, { useState } from "react";
import "./Team.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import teamList from "./teamList";
import SlideNextButton from "./SlideNextButton";
import useWindowDimensions from "../../hooks/useWindowsDimensions";

const Team = () => {
  const [active, setActive] = useState(0);
  const { width } = useWindowDimensions();
  return (
    <div className="app__team-container">
      <div className="app__team-title-container">
        <h2>Team</h2>
      </div>
      <div className="app__team-slider-container">
        <Swiper
          slidesPerView={width > 480 ? 3 : 1}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {teamList.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="app__team-slider-card"
                onMouseEnter={() => setActive(idx)}
                // onMouseLeave={() => setActive(0)}
              >
                <div className="app__team-slider-card-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="app__team-slider-card-data">
                  <h3
                    className={`app__team-slider-card-data-title ${
                      active === idx && "change-slider-title"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <div
                    className={`app__team-slider-separator ${
                      active === idx && "change-slider-separator"
                    }`}
                  />
                  <p
                    className={`app__team-slider-card-data-desc ${
                      width < 480 && "show-slider-desc"
                    } ${active === idx && "show-slider-desc"}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SlideNextButton />
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
