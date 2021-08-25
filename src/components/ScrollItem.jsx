import * as React from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";

function ScrollItem({ speaker, width, delta, scroll }) {
  return (
    <div
      id={`scroll-${speaker.img}`}
      className={`scroll-item scroll-${speaker.img} bg-black`}
    >
      {/* <Overlay delta={delta} width={width} scroll={scroll} /> */}

      <div className="h-full w-4/6 flex items-center mx-auto">
        <div className="text-white font-NeueHaas transform translate-y-10 w-2/5">
          <h2 className="text-3xl">{speaker.title}</h2>
          <h3 className="mt-8 text-lg font-light">{speaker.speaker}</h3>
          <div className="w-24 h-px bg-white mt-1"></div>
          <h3 className="mt-1 text-lg font-light">{speaker.bio}</h3>
        </div>
      </div>
    </div>
  );
}

export default ScrollItem;
