import React, { useState } from "react";
import "./Navbar.scss";
import NavbarList from "./NavbarList";
import Logo from "../../assets/svgs/logo/Logo";
import { Squash as Hamburger } from "hamburger-react";
import useGetScrollPosition from "../../hooks/useGetScrollPosition";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
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
        {NavbarList.map((item) => (
          <li className="app__flex p-text app__li-nav" key={`link-${item}`}>
            <Link to={`/#${item}`}>{item}</Link>
          </li>
        ))}
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
