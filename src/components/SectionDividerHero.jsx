import React from "react";

function SectionDivider() {
  return (
    <div className="mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full h-[1px] bg-primary mb-[2px]" />
        <div className="w-full h-[1px] bg-black dark:bg-white mb-[2px]" />
      </div>
    </div>
  );
}

export default SectionDivider;
