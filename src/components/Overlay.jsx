import React, { useCallback, useEffect } from "react";
import loadable from "@loadable/component";
const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay() {
  const isBrowser = typeof window !== "undefined";

  return (
    <div>
      <BackdropFilter
        className="glass h-24 w-48 z-10"
        filter={"blur(15px)"}
      ></BackdropFilter>
    </div>
  );
}

export default Overlay;
