import React, { useState } from "react";

import Navbar from "../components/Navbar";
import TeamScroll from "../components/TeamScroll";

const TeamPage = () => {
  // team focus
  const [spyTeam, setTeam] = useState(1);
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <TeamScroll
        spyTeam={spyTeam}
        setTeam={setTeam}
        scroll={scroll}
        setScroll={setScroll}
        width={width}
        setWidth={setWidth}
      />
    </>
  );
};

export default TeamPage;
