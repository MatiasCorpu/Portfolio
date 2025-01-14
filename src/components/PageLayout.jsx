import React from "react";

function PageLayout({ children, className }) {
  return (
    <div className="flex h-full w-full bg-light-secondary dark:bg-dark-secondary">
      <div className={`relative flex w-full h-full overflow-y-auto pt-2 px-2 pb-24  ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;