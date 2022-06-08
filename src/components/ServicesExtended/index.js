import React, { useEffect } from "react";
import "./ServicesExtended.scss";
import servicesExtended from "../../utils/constants/servicesExtended";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
const ServicesExtended = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const filterService = servicesExtended.filter((item) => item.id === id);

  useEffect(() => {
    if (!filterService.length) {
      navigate("/");
    }
  }, [filterService, navigate]);

  return (
    <div>
      {filterService.map((item, idx) => (
        <div
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.backImage})`,
          }}
          key={idx}
          className="service-extended-container"
        >
          <div>
            <div className="service-extended-title">
              <motion.h2
                animate={{
                  opacity: [0, 1],
                  transform: ["translate(-10%)", "translate(0%)"],
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {item.title}
              </motion.h2>
            </div>
            <div className="service-extended-descriptions">
              {item.descriptions.map((description, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: [0, 1],
                  }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h5>{description.title}</h5>
                  <p>{description.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesExtended;
