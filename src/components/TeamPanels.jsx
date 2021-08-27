import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import teams from "../content/teams";

function TeamPanels({
  team,
  setTeam,
  spyTeam,
  width,
  setWidth,
  scroll,
  setScroll,
}) {
  // handles smooth scroll function and sets team on click
  const handleNavClick = (e) => {
    scrollTo(`#team-${team.i}`);
    setTeam(team.i);
  };

  // changes focus when div scrolled into view
  useEffect(() => {
    let teamWidth = width / teams.length;
    let teamPos = scroll / teamWidth;

    if (scroll != 0) {
      setTeam(parseInt(teamPos) + 1);
    }

    // if at end, spy last team (addresses bug at final scrollPos)
    if (scroll === width && scroll != 0) {
      setTeam(teams.length);
    }
  }, [scroll, width]);

  return (
    <button
      onClick={(e) => handleNavClick(e)}
      className={
        spyTeam === team.i ? "team-panel-active text-base" : "team-panel-notactive text-base"
      }
    >{team.team.toUpperCase()}</button>
  );
}

export default TeamPanels;
