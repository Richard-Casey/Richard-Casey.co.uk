import React from "react";
import "./marquee.css";

export function Marquee({ children, reverse = false, pauseOnHover = false, duration = "60s" }) {
  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div
      className={`marquee-outer ${pauseOnHover ? "hover:paused" : ""}`}
      style={{ "--duration": duration }}
    >
      <div className={`marquee-inner ${animationClass}`}>
        <div className="marquee-track">{children}</div>
        <div className="marquee-track">{children}</div>
      </div>
    </div>
  );
}
