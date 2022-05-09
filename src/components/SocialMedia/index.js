import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import "./SocialMedia.scss";
const SocialMedia = () => {
  const { width } = useWindowDimensions()
  return (
    <div className="app__social-media">
      <TwitterTimelineEmbed
        sourceType="SMCplus"
        screenName="SMCplus"
        options={{ height: 650, width: 504 }}
      />
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:6923367792129765376"
        height="650"
        width={width<768 ? "100%" : "504"}
        frameBorder="0"
        allowFullScreen=""
        title="Publicación integrada"
      ></iframe>
    </div>
  );
};

export default SocialMedia;
