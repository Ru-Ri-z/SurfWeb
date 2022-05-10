import React from "react";
import { motion } from "framer-motion";
import "./Banner.scss";
import LogoBanner from "../../assets/svgs/logo/LogoBanner";
import TableLoader from "../../assets/svgs/logo/TableLoader";
const Banner = () => {
  return (
    <motion.div
      className="banner"
      animate={{ opacity: [1, 0], display:"none" }}
      transition={{ default:{ duration:0.3, delay:2.5 }, display:{ delay:3 } }}
    >
      <LogoBanner />
      <motion.div
        style={{ marginTop: "30px" }}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat:"Infinity"
        }}
      >
        <TableLoader />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
