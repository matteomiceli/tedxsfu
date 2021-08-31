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

      <div className="h-full w-5/6 flex transform translate-y-16 mx-auto md:-translate-y-16 md:items-center lg:translate-y-0 xl:w-4/6">
        <div className="text-white font-NeueHaas transform translate-y-10 w-full md:w-3/6 2xl:w-2/6">
          <h2 className="text-3xl">{speaker.title}</h2>
          <h3 className="mt-8 text-lg font-light">{speaker.speaker}</h3>
          <div className="w-24 h-px bg-white mt-1"></div>
          <h3 className="mt-1 text-lg font-light w-5/6 md:w-full">{speaker.bio}</h3>
        </div>
      </div>
    </div>
  );
}

export default ScrollItem;
