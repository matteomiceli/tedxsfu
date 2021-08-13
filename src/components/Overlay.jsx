import React, { useCallback, useEffect } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function Overlay() {
  const isBrowser = typeof window !== "undefined";

  return (
    <div>
      <Parallax x={[-200, 200]}>
        <div className="glass absolute h-24 w-48 z-10"></div>
      </Parallax>

      <div className="glass absolute h-24 w-48 z-10 transform translate-x-72 translate-y-24"></div>
    </div>
  );
}

export default Overlay;
