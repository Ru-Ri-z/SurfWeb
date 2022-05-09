import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HighlightedReports from "../components/HighlightedReports";
import Navbar from "../components/Navbar";
import OtherReports from "../components/OtherReports";
import Services from "../components/Services";
import SocialMedia from "../components/SocialMedia";
import Team from "../components/Team";

const Navigator = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Team />
      <Services />
      <HighlightedReports />
      <OtherReports />
      <SocialMedia />
      <Contact />
    </>
  );
};

export default Navigator;
