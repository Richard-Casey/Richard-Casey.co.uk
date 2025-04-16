import React, { useEffect, useState } from "react";

const HeroBackground = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const context = require.context("../../public/images/projects", false, /\.(png|jpe?g|svg)$/);
    const loadedImages = context.keys().map(context);
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 rounded-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-30" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
