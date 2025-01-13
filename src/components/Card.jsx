import React from "react";

function Card({ children, className, hoverScaleAnimation }) {
  return (
    <div className={`rounded-2xl transition-transform duration-500 bg-light-primary dark:bg-dark-primary ${hoverScaleAnimation === false ? "" : "hover:scale-[1.009]"} ${className}`}>
      {children}
    </div>
  );
}

export default Card;