import React, { useEffect } from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ className, id }) => {
  return (
    <div id={id} className={`w-10 h-10 loading-spinner ${className}`}>
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
    </div>
  );
};

export default LoadingSpinner;
