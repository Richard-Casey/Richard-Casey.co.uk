import React, { useState, useEffect } from "react";

function Typewriter({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), 2000);
    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (!started || index >= text.length) return;
    const typingTimer = setTimeout(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(typingTimer);
  }, [index, text, speed, started]);

  return (
    <h1 className="text-4xl font-bold text-outline text-white font-mono tracking-wide flex items-center justify-center whitespace-nowrap overflow-hidden">
      {started ? (
        <>
          <span>{displayedText}</span>
          <span className="ml-1 animate-blink text-primary-alt text-3xl">|</span>
        </>
      ) : (
        // Prevent layout shift: reserve space with invisible characters
        <span className="invisible">
          Software & Full-Stack Developer | C# · React · WPF
        </span>
      )}
    </h1>
  );  
}

export default Typewriter;
