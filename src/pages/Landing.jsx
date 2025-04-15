import React, { useState, useEffect, useRef } from "react";
import heroImage from "../assets/landing.png";
import styled from "styled-components";
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
      {/* Full Image Container */}
      {/* Image layer (z-0) */}
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

      {/* Overlay (z-5) */}
      <div className="absolute inset-0 bg-[#009de5] opacity-50 z-5 pointer-events-none" />

      {/* Letterbox Bars */}
      {/* Top Letterbox */}
      <div className="absolute top-0 left-0 w-full h-[20%] z-10 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#666] via-[#C0C0C0] to-[#666]" />
      </div>

      {/* Bottom Letterbox */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] z-10 bg-gradient-to-t from-[#1a1a1a] to-black">
        {/* Silver gradient line on top */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#666] via-[#C0C0C0] to-[#666]" />

        {/* Button centered under the gradient */}
        <div className="flex justify-center items-start pt-3 relative z-20">
          <button className="enter-button" onClick={() => navigate("/home")}>
            Enter Site
          </button>
        </div>
      </div>

      {/* Drifting Tagline */}
      {/* Drifting Tagline - Left aligned*/}
      <div className="absolute top-[60%] left-8 z-20 pointer-events-none">
        <h1
          className="text-white dark:text-white text-xl md:text-2xl font-medium tracking-wide transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.2}px)`,
          }}
        >
          Richard Casey
        </h1>
        <h1
          className="text-white dark:text-white text-xl md:text-2xl font-medium tracking-wide transition-transform duration-300 ease-out"
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
