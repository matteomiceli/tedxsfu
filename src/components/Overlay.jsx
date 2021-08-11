import React, { useCallback, useEffect } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay() {
  const isBrowser = typeof window !== "undefined";

  return (
    <div>
      <div
        className="glass h-24 w-48 z-10"
      ></div>
    </div>
  );
}

export default Overlay;
