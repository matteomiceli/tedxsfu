import React, { isValidElement, useState } from "react";
import upArrow from "../static/images/upArrow.svg";
import TeamPanels from "./TeamPanels";
import teams from "../content/teams";

function TeamNav({ spyTeam, setTeam, scroll, setScroll, width, setWidth }) {
  return (
    <div className="w-full flex justify-center">
      <div className="team-nav-container absolute flex justify-between items-end w-5/6">
        <div>
          <h1 className="text-5xl 2xl:6xl">Meet the Team</h1>
        </div>
        <div className="flex">
          {teams.map((team) => {
            return (
              <div>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamNav;
