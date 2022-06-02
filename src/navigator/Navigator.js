import React from "react";
import About from "../components/About";
import AboutCeo from "../components/AboutCeo";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import FeaturedReport from "../components/FeaturedReports";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewReport from "../components/NewReports";
import Services from "../components/Services";
import SocialMedia from "../components/SocialMedia";
import Team from "../components/Team";
import newReport from "../utils/constants/newReport";
import featuredReport from "../utils/constants/featuredReport";
import RecentPublications from "../components/RecentPublications";
import Clients from "../components/Clients";
import ServicesExtended from "../components/ServicesExtended";
import OtherReports from "../components/OtherReports";
const Navigator = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Header />
      <About />
      <AboutCeo />
      <Team />
      <Services />
      <NewReport item={newReport} />
      <FeaturedReport item={featuredReport} />
      <RecentPublications />
      <SocialMedia />
      <Clients />
      <Contact />
      <ServicesExtended />
      <OtherReports/>
    </>
  );
};

export default Navigator;
