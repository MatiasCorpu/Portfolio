import React from "react";

function BlurGradient({ className }) {
  return (
    <div className={`z-50 w-full fixed bottom-0 h-[clamp(80px,10vh,200px)] pointer-events-none mask-gradient backdrop-blur-[8px] ${className}`}></div>
  );
}

export default BlurGradient;