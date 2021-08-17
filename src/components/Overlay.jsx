import React, { useRef, useEffect, useState } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay({ delta, width }) {
  let [state, setState] = useState(0);

  useEffect(() => {
    if (state <= 1 && state > -width) {
      setState(state += (delta * -1));
      console.log(state)
    } else if (state > 0) {
      setState(-1)
      console.log(state)
    } else if (state <= -width) {
      setState(- (width - 1))
    }
    // setState(state += (delta * -1));

  }, [delta]);



  return (
    <div className="h-full w-full flex justify-center items-center">
      <div style={{transform: `translateX(${state}px)`}} className={`glass h-24 w-48 z-10 left-10`}></div>
      <div style={{transform: `translateX(${state}px)`}} className={`glass h-24 w-48 z-10 translate-y-24 `}></div>
    </div>
  );
}

export default Overlay;
