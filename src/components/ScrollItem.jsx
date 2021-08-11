import * as React from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";
const BackdropFilter = loadable(() => import("react-backdrop-filter"));

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
