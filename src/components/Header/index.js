import React from "react";
import backgroundImage from "../../assets/coverpageimg.webp";
import backgroundImageMobile from "../../assets/coverpageimgmobile.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Header.scss";
const Header = () => {
  return (
    <div className="app__header-container">
      <picture style={{ margin: 0, padding: 0 }}>
        <source srcSet={backgroundImage} media="(min-width: 768px)" />
        <img
          src={backgroundImageMobile}
          alt="MDN"
          className="app__header-image-big"
        />
      </picture>
      <div className="app__social-media-icons">
        <a href="#">
          <FaFacebookF size={30} color="#fff" />
        </a>
        <a href="https://www.linkedin.com/company/smcplus/" rel="nooponer noreferrer" target="_blank">
          <FaLinkedinIn size={30} color="#fff" />
        </a>
        <a href="https://twitter.com/SMCplus" rel="nooponer noreferrer" target="_blank">
          <FaTwitter size={30} color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default Header;
