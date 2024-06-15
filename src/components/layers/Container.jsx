import React from "react"

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-container mx-auto px-[129px] ${className}`}>{children}</div>
  );
};

export default Container
