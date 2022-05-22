import React, { useState } from "react";
import "./Navbar.scss";
import NavbarList from "./NavbarList";
import Logo from "../../assets/svgs/logo/Logo";
import { Squash as Hamburger } from "hamburger-react";
import useGetScrollPosition from "../../hooks/useGetScrollPosition";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const scroll = useGetScrollPosition();
  return (
    <nav className={`app__navbar ${scroll > 30 && "scroll-navbar"}`}>
      <div className="app__navbar-logo">
        <a href="#home">
        <Logo />
        </a>
      </div>
      <ul className="app__navbar-links ">
        {NavbarList.map((item) => (
          <li className="app__flex p-text app__li-nav" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
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
              <a href={`#${item}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
