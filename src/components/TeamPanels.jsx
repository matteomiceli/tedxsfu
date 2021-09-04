import React, { useEffect, useRef } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import teams from "../content/teams";

import scrollIntoView from "scroll-into-view-if-needed";

function TeamPanels({
  team,
  setTeam,
  spyTeam,
  scroll,
  onSelectTeam,
  scrollWidth,
}) {
  // handles smooth scroll function and sets team on click
  const handleNavClick = (e) => {
    onSelectTeam && onSelectTeam(team);
  };

  // changes focus when div scrolled into view
  useEffect(() => {
    let teamWidth = scrollWidth / teams.length;
    let teamPos = scroll / teamWidth;

    if (scroll != 0) {
      setTeam(parseInt(teamPos) + 1);
    }

    // if at end, spy last team (addresses bug at final scrollPos)
    if (scroll === scrollWidth && scroll != 0) {
      setTeam(teams.length);
    }
  }, [scroll, scrollWidth]);

  return (
    <button
      onClick={(e) => handleNavClick(e)}
      className={
        spyTeam === team.i
          ? "team-panel-active rounded-none whitespace-nowrap text-sm pt-2 2xl:text-base tracking-wider uppercase"
          : "team-panel-notactive rounded-none whitespace-nowrap text-sm pt-2 2xl:text-base tracking-wider uppercase"
      }
    >
      {team.team}
    </button>
  );
}

export default TeamPanels;
