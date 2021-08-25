import React, { isValidElement, useState } from "react";
import upArrow from "../static/images/upArrow.svg";
import TeamPanels from "./TeamPanels";
import teams from "../content/teams";

function TeamNav({ spyTeam, setTeam, scroll, setScroll, width, setWidth }) {

  return (
    <div
      className="flex"
    >
      {teams.map((team) => {
        return (
          <TeamPanels
            team={team}
            key={team.i}
            spyTeam={spyTeam}
            setTeam={setTeam}
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
