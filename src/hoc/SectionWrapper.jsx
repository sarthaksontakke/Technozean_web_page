import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import React, { lazy, Suspense } from "react";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}></span>
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </motion.div>
    );
  };

export default StarWrapper;
