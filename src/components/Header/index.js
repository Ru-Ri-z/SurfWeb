import React from "react";
import backgroundImage from "../../assets/coverpageimg.webp";
import backgroundImageMobile from "../../assets/mobile.webp";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Header.scss";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
const Header = () => {
  const { width } = useWindowsDimensions();
  return (
    <div className="app__header-container" id="home">
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
          <FaFacebookF size={30} color="#fff" />
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
    </div>
  );
};

export default Header;
