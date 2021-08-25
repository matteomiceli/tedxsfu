import React, { isValidElement, useState } from "react";
import upArrow from "../static/images/upArrow.svg";
import TeamPanels from "./TeamPanels";
import teams from "../content/teams";

function TeamNav({ spyTeam, setTeam, scroll, setScroll, width, setWidth }) {
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
      {teams.map((team) => {
        return (
          <TeamPanels
            Team={team}
            isActive={isActive}
            key={team.team}
            spySpeaker={spyTeam}
            setSpeaker={setTeam}
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

export default TeamNav;
