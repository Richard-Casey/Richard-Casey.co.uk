import React from "react";
import classNames from "classnames";

export default function GlassmorphismContainer({
  children,
  className = "",
  variant = "white", // "white" or "blue"
  padding = "p-4",
}) {
  const variantClass = variant === "blue" ? "glass-blue" : "glass-white";

  return (
    <div className={classNames(variantClass, padding, className)}>
      {children}
    </div>
  );
}
