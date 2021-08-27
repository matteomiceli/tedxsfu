import React, {useEffect} from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";
// import { StaticImage } from "gatsby-plugin-image"




function TeamItem({ team, width, delta, scroll }) {

  return (  

    <div
      id={`team-${team.i}`}
      className="team-scroll bg-black h-full"
    >
      <div className="flex h-full w-full">
        <div className="relative top-1/4">
          <img className="team-image w-full" src={team.img} alt="" />
          {console.log(team.img)}
        </div>
      </div>
    </div>
  );
}

export default TeamItem;


{/* <Overlay delta={delta} width={width} scroll={scroll} /> */}