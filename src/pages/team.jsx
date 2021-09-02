import React, { useState } from "react";

import TeamScroll from "../components/TeamScroll";
import TeamNav from "../components/TeamNav";

const TeamPage = () => {
  // team focus
  const [spyTeam, setTeam] = useState(1);
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0);

  return (
    <div className="bg-black fixed left-0 right-0 top-0 bottom-0 flex flex-col">
      <TeamNav
        spyTeam={spyTeam}
        setTeam={setTeam}
        scroll={scroll}
        setScroll={setScroll}
        width={width}
        setWidth={setWidth}
      />
      <TeamScroll
        spyTeam={spyTeam}
        setTeam={setTeam}
        scroll={scroll}
        setScroll={setScroll}
        width={width}
        setWidth={setWidth}
      />
    </div>
  );
};

export default TeamPage;
