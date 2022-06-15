import Lottie from "lottie-react";
import serviceAnimation from "../../assets/IconosExport.json";
import "./ServicesSvg.scss";
const ServicesAnimation = () => {
  return (
    <div className="servicesSvg-container">
      <Lottie animationData={serviceAnimation} />
      <div className="div-container">
        <a
          href="/services/insights-regional-intelligence"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          href="/services/coaching"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          href="/services/localized-advocacy-support"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          href="/services/positioning-strategy"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default ServicesAnimation;
