

import React, { useCallback } from "react";
import { Component } from "react";
import BackdropFilter from "react-backdrop-filter";



function Overlay() {
  return (
      
    <BackdropFilter 
      className="glass h-24 w-48 bg-white absolute opacity-10"
      filter={"blur(10px)"}
      canvasFallback={true}
      html2canvasOpts={{
          allowTaint: true
      }}
      onDraw={() => {
          console.log("Rendered !");
      }}
    ></BackdropFilter>

  );
}

export default Overlay;
