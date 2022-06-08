import React from "react";
import { motion } from "framer-motion";
import "./Banner.scss";
import LogoBanner from "../../assets/svgs/logo/LogoBanner";
import TableLoader from "../../assets/svgs/logo/TableLoader";
const Banner = () => {
  return (
    <motion.div
      className="banner"
      animate={{ opacity: [1, 0], display: "none" }}
      transition={{
        default: { duration: 0.3, delay: 1 },
        display: { delay: 1.5 },
      }}
    >
      <div>
        <LogoBanner />
        <motion.div
          style={{ marginTop: "30px" }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.4,
            repeat: "Infinity",
          }}
        >
          <TableLoader />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
