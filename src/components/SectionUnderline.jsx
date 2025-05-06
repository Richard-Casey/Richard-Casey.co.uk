import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./SectionUnderline.module.css";

export default function SectionUnderline({
  children,
  delay = 0.3,
  fadeAfter = 1200,   // ms after the swap to start fading
  className = ""
}) {
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState("idle");   // idle → fire → fade

  useEffect(() => {
    if (!inView) return;

    const fireTimer = setTimeout(() => setPhase("fire"), 1800);          // bars move
    const fadeTimer = setTimeout(() => setPhase("fade"), 1800 + fadeAfter); // bars fade

    return () => { clearTimeout(fireTimer); clearTimeout(fadeTimer); };
  }, [inView, fadeAfter]);

  return (
    <h2
      ref={ref}
      className={`
        inline-block            
        ${styles.effect}                   
        ${phase !== "idle" ? styles.fire : ""}
        text-2xl mb-4 md:text-3xl font-bold
        ${className}
      `}
      style={{ "--u-delay": `${delay}s` }}
    >
      {children}

      {/* overlay bars that will fade in */}
      <span
        className={`
          ${styles.overlayBars}
          ${phase === "fade" ? styles.overlayVisible : ""}
        `}
      />
    </h2>
  );
}
