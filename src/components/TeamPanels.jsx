import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import teams from "../content/teams";

function TeamPanels({
  isActive,
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
    scrollTo(`#scroll-${team.img}`);
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
        isActive
          ? `panel-${team.img} h-full w-full mx-1 ${
              spyTeam === team.i ? "panel-active" : "panel-notactive"
            }`
          : `panel-${team.img} h-full w-full mx-1 opacity-50 ${
              spyTeam === team.i ? "panel-active" : "panel-notactive"
            }`
      }
    ></button>
  );
}

export default TeamPanels;
