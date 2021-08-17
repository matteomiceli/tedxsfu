import React, { useRef, useEffect, useState } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay({delta}) {
  let x = 0;
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(state += delta);
  }, [delta]);



  return (
    <div className="h-full w-full flex justify-center items-center">
      <div style={{transform: `translateX(${state * 2}px)`}} className={`glass h-24 w-48 z-10`}></div>
      <div style={{transform: `translateX(${state * 2}px)`}} className={`glass h-24 w-48 z-10 translate-y-24 `}></div>
    </div>
  );
}

export default Overlay;
