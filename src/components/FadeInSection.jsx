import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.8, ease: [0.68, -0.55, 0.27, 1.55] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
