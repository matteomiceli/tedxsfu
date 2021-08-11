import React, { useCallback, useEffect } from "react";
import loadable from '@loadable/component';
const BackdropFilter = loadable(() => import('react-backdrop-filter'))

function Overlay() {
  const isBrowser = typeof window !== "undefined";

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
