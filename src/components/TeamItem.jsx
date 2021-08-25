import * as React from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";

function TeamItem({ team, width, delta, scroll }) {
  return (
    <div
      id={`scroll-${team.img}`}
      className={`scroll-item scroll-${team.img} bg-black`}
    >
      {/* <Overlay delta={delta} width={width} scroll={scroll} /> */}
        <p className="text-white">Poop</p>
    </div>
  );
}

export default TeamItem;
