import * as React from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";

function ScrollItem({ speaker, width, delta, scroll }) {
  return (
    <div
      id={`scroll-${speaker.img}`}
      className={`scroll-item scroll-${speaker.img} bg-black text-white text-9xl flex justify-center items-center`}
    >
      {/* <Overlay delta={delta} width={width} scroll={scroll} /> */}

    
    </div>
  );
}

export default ScrollItem;
