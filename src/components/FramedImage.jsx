// src/components/FramedImage.jsx
import React, { useState } from "react";
import classNames from "classnames";

export default function FramedImage({ src, alt, className = "" }) {
    return (
      <div className={`border-[3px] rounded-lg ${className} border-black dark:border-white`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.dataset.fallback = true;
              e.target.src = "/images/projects/default.png";
            }
          }}
        />
      </div>
    );
  }
  
