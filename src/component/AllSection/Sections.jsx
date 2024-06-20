import React from "react";
import HomePage from "../../page/mainPage/HomePage";
import AboutPage from "../../page/mainPage/AboutPage";
import NewsPage from "../../page/mainPage/NewsPage";
import { MapPage } from "../../page/mainPage/MapPage";
const Sections = () => {
  return (
    <div>
      <div style={{ background: `url(${"/img/girl.jpg"})` }}>
        <HomePage />
        <AboutPage />
        <Outlet />
      </div>
      <NewsPage />
      <MapPage />
      <Footer />
    </div>
  );
};

export default Sections;
