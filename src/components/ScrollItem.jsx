import * as React from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";


function ScrollItem({ speaker, i, delta }) {
  return (
    <div
      className={`scroll-item scroll-${speaker.img} bg-black text-white text-9xl flex justify-center items-center`}
    >
        <Overlay delta={delta} />
    </div>
  );
}

export default ScrollItem;
