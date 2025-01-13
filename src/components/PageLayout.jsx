import React from "react";

function PageLayout({ children, className }) {
  return (
    <div className = {`relative w-full p-2 bg-light-secondary dark:bg-dark-secondary ${className}`}>
      {children}
    </div>
  );
}

export default PageLayout;