import React from "react";
import AboutCeo from "../components/AboutCeo";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import FeaturedReport from "../components/FeaturedReports";
import Header from "../components/Header";
import HeaderCarousel from "../components/HeaderCarousel";
import NewReport from "../components/NewReports";
import RecentPublications from "../components/RecentPublications";
import Services from "../components/Services";
import ServicesAnimation from "../components/servicesSvg";
import SocialMedia from "../components/SocialMedia";
import Team from "../components/Team";
import Video from "../components/Video";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import featuredReport from "../utils/constants/featuredReport";
import newReport from "../utils/constants/newReport";

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width < 1024 && <Header />}
      {width < 1024 && <Video />}
      {width > 1024 && <HeaderCarousel />}
      <Banner />
      <AboutCeo />
      <Team />
      {width > 1024 && <ServicesAnimation />}
      {width < 1024 && <Services />}
      <NewReport item={newReport} />
      <FeaturedReport item={featuredReport} />
      {width > 1024 && <RecentPublications />}
      <SocialMedia />
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
