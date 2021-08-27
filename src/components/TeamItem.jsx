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
      <div className="flex justify-center h-full w-full">
        <div className="relative top-1/4 mt-8">
          <img className="h-1/2" src={team.img} alt="" />
          {console.log(team.img)}
        </div>
      </div>
    </div>
  );
}

export default TeamItem;


{/* <Overlay delta={delta} width={width} scroll={scroll} /> */}