import React, { isValidElement, useState } from "react";
import upArrow from "../static/images/upArrow.svg";
import NavPanels from "./NavPanels";
import speakers from "../content/speakers";

function Navigation({
  spySpeaker,
  setSpeaker,
  scroll,
  setScroll,
  width,
  setWidth,
}) {
  const [isActive, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={
        isActive
          ? "absolute bottom-0 right-1/4 w-1/2 h-40 flex transition-all duration-200 ease-in-out"
          : "absolute -bottom-20 right-1/4 w-1/2 h-40 flex transition-all duration-200 ease-in-out"
      }
    >
      <div
        className={
          isActive
            ? "opacity-0 text-white absolute font-NeueHaas w-full h-full flex justify-center top-8 transition-all transform translate-y-28 duration-200 ease-in-out z-10"
            : "opacity-100 text-white absolute font-NeueHaas w-full h-full flex justify-center top-8 transition-all duration-200 ease-in-out z-10"
        }
      >
        <p className="text-sm font-medium">ALL SPEAKERS</p>
        <div className="h-5">
          <img src={upArrow} alt="up arrow" className="h-2 ml-2 mt-0.5" />
        </div>
      </div>
      {speakers.map((speaker, index) => {
        return (
          <NavPanels
            speaker={speaker}
            isActive={isActive}
            key={index}
            spySpeaker={spySpeaker}
            setSpeaker={setSpeaker}
            scroll={scroll}
            setScroll={setScroll}
            width={width}
            setWidth={setWidth}
          />
        );
      })}
    </div>
  );
}

export default Navigation;
