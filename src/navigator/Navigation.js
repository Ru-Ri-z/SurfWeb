import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { Home, Services } from "../pages";
import OtherReportsPage from "../pages/OtherReportsPage";
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Banner />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="services/:id" element={<Services />} />
            <Route path="other-reports" element={<OtherReportsPage />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
