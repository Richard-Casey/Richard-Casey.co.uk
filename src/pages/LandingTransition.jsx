import React, { useState } from "react";
import heroImage from "../assets/landing.png";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const EnterButton = styled.button`
  width: 10em;
  position: relative;
  height: 3.5em;
  outline: none;
  color: white;
  transition: 1s;
  border-radius: 0.7em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 25px #009de5;
  }
`;

function LandingTransition() {
  const [phase, setPhase] = useState("idle");

  const handleClick = () => {
    setPhase("slideOut");
    setTimeout(() => {
      setPhase("centerBrackets");
    }, 2000);
  };

  const showBrackets = phase === "idle" || phase === "slideOut" || phase === "centerBrackets";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-black">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="hero"
        className={`absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply transition-opacity duration-1000 z-0 ${
          phase !== "idle" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Overlay Tint */}
      <div className="absolute inset-0 bg-[#009de5] opacity-50 z-10 pointer-events-none" />

      {/* Letterbox Bars */}
      <div className="absolute top-0 w-full h-[20%] bg-gradient-to-b from-[#1a1a1a] to-black z-20" />
      <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-[#1a1a1a] to-black z-20" />

      {/* Brackets */}
      {showBrackets && (
        <>
          {/* Left Bracket */}
          <motion.span
            initial={{
              left: "43.1%",
              bottom: "13.7%",
              color: "#009de5",
            }}
            animate={
              phase === "slideOut"
                ? {
                    left: "5%",
                    bottom: "50%",
                    x: "0",
                    color: "#ffffff",
                  }
                : phase === "centerBrackets"
                ? {
                    left: "50%",
                    bottom: "50%",
                    x: "-2.0ch",
                    color: "#009de5",
                  }
                : {}
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed text-4xl pointer-events-none z-40"
            style={{
              transform: "translateY(50%)",
              fontSize: "3.5rem",
              lineHeight: "1.3",
            }}
          >
            [
          </motion.span>

          {/* Right Bracket */}
          <motion.span
            initial={{
              left: "54.3%",
              bottom: "13.7%",
              color: "#009de5",
            }}
            animate={
              phase === "slideOut"
                ? {
                    left: "95%",
                    bottom: "50%",
                    x: "0",
                    color: "#ffffff",
                  }
                : phase === "centerBrackets"
                ? {
                    left: "50%",
                    bottom: "50%",
                    x: "0.5ch",
                    color: "#009de5",
                  }
                : {}
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed text-4xl pointer-events-none z-40"
            style={{
              transform: "translateY(50%)",
              fontSize: "3.5rem",
              lineHeight: "1.3",
            }}
          >
            ]
          </motion.span>
        </>
      )}

      {/* Enter Button */}
      <AnimatePresence>
        {phase === "idle" && (
          <motion.div
            className="absolute bottom-[10%] w-full flex justify-center z-30"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnterButton onClick={handleClick}>Enter Site</EnterButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LandingTransition;
