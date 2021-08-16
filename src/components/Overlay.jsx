import React, { useCallback, useEffect, useState } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay() {
  
  return (
    <div>
      <div className={`glass h-24 w-48 z-10 transform translate-x-${1.5}`}></div>
      <div className={`glass h-24 w-48 z-10 transform translate-y-24 translate-x-${1.5}`}></div>
    </div>
  );
}

export default Overlay;
