import * as React from "react";
import Pixi from "./Rectangle";

function ScrollItem({ speaker }) {
  return (
    <div
      className={`scroll-item scroll-${speaker.img} bg-black text-white text-9xl flex justify-center items-center`}
    >
      {/* <Pixi /> */}
    </div>
  );
}

export default ScrollItem;
