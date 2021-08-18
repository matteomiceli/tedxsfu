import React, { useRef, useEffect, useState } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay({ delta, width, scroll }) {
  let [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    setScrollVal(scroll)
  }, [scroll]);



  return (
    <div style={{transform: `translateX(${-scrollVal/2}px)`}} className="h-full w-full flex ">
      <div className={`glass h-32 w-52 z-10 relative top-64 right-1/2`}></div>
      <div className={`glass h-32 w-52 z-10 relative top-64 -right-3/4`}></div>
      <div className={`glass h-32 w-52 z-10 relative top-2/3 left-12`}></div>
      <div className={`glass h-32 w-52 z-10 relative top-3/4 -right-1/2`}></div>
    </div>
  );
}

export default Overlay;
