import React from "react";
import "./RecentPublications.scss";
import imageRecent from "../../assets/recent-publications.png";
const RecentPublications = () => {
  return (
    <div className="recent-publication-container">
      <img src={imageRecent} alt="recent-publication" loading="lazy"/>
    </div>
  );
};

export default RecentPublications;
