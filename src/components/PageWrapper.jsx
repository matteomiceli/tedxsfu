import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

const PageWrapper = ({ children }) => {
  return (
    <div className="bg-black">
      <Navbar page={1} />
      {children}
    </div>
  );
};

export default PageWrapper;
