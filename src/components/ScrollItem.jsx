import * as React from "react";
import Overlay from "./Overlay";

function ScrollItem({ speaker }) {
  return (
    <div
      className={`scroll-item scroll-${speaker.img} bg-black text-white text-9xl flex justify-center items-center`}
    >
      <Overlay />
    </div>
  );
}

export default ScrollItem;
