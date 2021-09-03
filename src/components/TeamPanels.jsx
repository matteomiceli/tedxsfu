import React, { useEffect, useRef } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import teams from "../content/teams";

import scrollIntoView from "scroll-into-view-if-needed";

function TeamPanels({
  team,
  setTeam,
  spyTeam,
  width,
  setWidth,
  scroll,
  setScroll,
  onSelectTeam,
}) {
  // handles smooth scroll function and sets team on click
  const handleNavClick = (e) => {
    onSelectTeam && onSelectTeam(team);
    // scrollTo(`#team-${team.i}`);
    // const targetTeam = document.querySelector(`#team-${team.i}`);
    // if (!targetTeam) return;

    // scrollIntoView(
    //   targetTeam.scrollIntoView({
    //     behavior: "smooth",
    //     block: "center",
    //     inline: "center",
    //   })
    // );
    // setTeam(team.i);
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
