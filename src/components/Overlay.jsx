import React, { useRef, useEffect, useState } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay({ delta, width, scroll }) {
  let [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    setScrollVal(scroll)
  }, [scroll]);



  return (
    <div className="h-full w-full flex justify-center items-center">
      <div style={{transform: `translateX(${-scrollVal/2}px)`}} className={`glass h-24 w-48 z-10 left-10`}></div>
      <div style={{transform: `translateX(${-scrollVal/2}px)`}} className={`glass h-24 w-48 z-10 translate-y-24 `}></div>
    </div>
  );
}

export default Overlay;
