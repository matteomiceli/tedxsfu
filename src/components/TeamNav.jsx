import React, { isValidElement, useState } from "react";
import upArrow from "../static/images/upArrow.svg";
import TeamPanels from "./TeamPanels";
import teams from "../content/teams";

function TeamNav({ spyTeam, setTeam, scroll, setScroll, width, setWidth }) {
  return (
    <div className="w-full flex justify-start lg:justify-center">
      <div className="team-nav-container absolute flex flex-col overflow-x-hidden justify-between items-end w-5/6 lg:flex-row">
        <div className="self-start mb-4">
          <h1 className="teams-title-container min-w-max ml-8 mr-10 text-3xl md:text-4xl lg:ml-0 lg:text-5xl 2xl:text-6xl 2xl:pl-16">Meet the Team</h1>
        </div>
        <div className="ml-8 team-nav-overflow overflow-x-scroll self-start lg:ml-0 2xl:ml-24">
          <div className="team-nav-container flex">
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
    </div>
  );
}

export default TeamNav;
