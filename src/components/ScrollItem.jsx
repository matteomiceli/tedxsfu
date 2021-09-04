import * as React from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";

import Image from "./Image";
import Button from "./Button";

function ScrollItem({ speaker, width, scroll }) {
  return (
    <div id={`scroll-${speaker.img}`} className={`scroll-item relative h-full`}>
      {/* <Overlay delta={delta} width={width} scroll={scroll} /> */}
      <div className="mt-flowline-mobile ml-document absolute z-20">
        <h2 className="text-3xl leading-8">{speaker.talkTitle}</h2>
        <h3 className="mt-2 text-sm">{speaker.name}</h3>
        <h3 className="mt-1 text-sm w-48 leading-4 opacity-60">
          {speaker.bio}
        </h3>
        <Button secondary className="mt-6 transform text-xs px-2">
          Watch Trailer
        </Button>
      </div>
      <Image
        src={speaker.img}
        className="absolute top-0 left-0 right-0 bottom-0 object-cover h-full w-full z-0"
      />
    </div>
  );
}

export default ScrollItem;
