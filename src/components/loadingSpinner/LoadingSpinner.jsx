import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="w-10 h-10 loading-spinner">
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
      <div className="loading-spinner__dot"></div>
    </div>
  );
};

export default LoadingSpinner;
