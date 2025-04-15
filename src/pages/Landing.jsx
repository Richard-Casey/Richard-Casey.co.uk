import React, { useState, useEffect, useRef } from "react";
import heroImage from "../assets/landing.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const bounds = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - bounds.left) / bounds.width - 0.5) * 20;
      const y = ((e.clientY - bounds.top) / bounds.height - 0.5) * 20;
      setOffset({ x, y });
    };

    const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

    const node = imageRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.div className="relative w-full h-screen overflow-hidden">
      {/* Image Background Layer */}
      <div className="absolute inset-0 z-0" ref={imageRef}>
        <div className="w-[130vw] h-[150vh] absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
          <img
            src={heroImage}
            alt="Landing"
            className="w-full h-full object-cover transition-transform duration-300 ease-out grayscale brightness-75 mix-blend-multiply"
            style={{
              transform: `translate(calc(${offset.x}px - -11%), calc(${offset.y}px + 30%))`,
            }}
          />
        </div>
      </div>

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-primary opacity-50 z-5 pointer-events-none" />

      {/* Top Letterbox with silver divider */}
      <div className="absolute top-0 left-0 w-full h-[20%] z-10 bg-gradient-top">
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-silver-line" />
      </div>

      {/* Bottom Letterbox with gradient + button */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] z-10 bg-gradient-bottom">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-silver-line" />
        <div className="flex justify-center items-start pt-3 relative z-20">
          <button className="enter-button" onClick={() => navigate("/home")}>
            Enter Site
          </button>
        </div>
      </div>

      {/* Floating Taglines */}
      <div className="absolute top-[60%] left-8 z-20 pointer-events-none">
        <h1
          className="text-white text-xl md:text-2xl font-medium tracking-wide transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.2}px)`,
          }}
        >
          Richard Casey
        </h1>
        <h1
          className="text-white text-xl md:text-2xl font-medium tracking-wide transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.2}px)`,
          }}
        >
          Software & Full-Stack Developer | C# · React · WPF · MongoDB
        </h1>
      </div>
    </motion.div>
  );
}

export default Landing;
