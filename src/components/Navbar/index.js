import React, { useState } from "react";
import "./Navbar.scss";
import NavbarList from "./NavbarList";
import Logo from "../../assets/svgs/logo/Logo";
import { Squash as Hamburger } from "hamburger-react";
import useGetScrollPosition from "../../hooks/useGetScrollPosition";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const scroll = useGetScrollPosition();
  const location = useLocation();
  return (
    <nav
      className={`app__navbar ${scroll > 30 && "scroll-navbar"} ${
        location?.pathname === "/other-reports" && "scroll-navbar"
      }`}
    >
      <div className="app__navbar-logo">
        <Link to="/#home">
          <Logo />
        </Link>
      </div>
      <ul className="app__navbar-links ">
        <li className="app__flex p-text app__li-nav">
          <Link to={`/#home`}>Home</Link>
        </li>
        <li className="app__flex p-text app__li-nav">
          <Link to={`/#about`}>About us</Link>
        </li>
        <li className="app__flex p-text app__li-nav">
          <Link to={`/#services`}>Services</Link>
        </li>
        <div
          onMouseEnter={() => setDisplay(true)}
          onMouseLeave={() => setDisplay(false)}
          className="app__li-report"
        >
          <li className="app__flex p-text app__li-nav">
            <Link to={`/#reports`}>Reports</Link>
          </li>
          {display && (
            <div className={`app__li-report-dropdown`}>
              <Link
                to={`/#reports`}
                style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
              >
                NEW
              </Link>
              <a
                href="/other-reports"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
              >
                OTHERS
              </a>
            </div>
          )}
        </div>
        <li className="app__flex p-text app__li-nav">
          <Link to={`/#contact`}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger-container">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={32}
          color={isOpen ? "#ffffff" : "#ffffff"}
        />
      </div>
      <div
        className="app__navbar-menu"
        style={{ right: `${isOpen ? "0" : "-100%"}` }}
      >
        <ul>
          {NavbarList.map((item) => (
            <li key={item}>
              <Link to={`/#${item}`} onClick={() => setOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
