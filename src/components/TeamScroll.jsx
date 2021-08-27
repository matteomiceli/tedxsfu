import React, { useEffect, useState, useRef } from "react";
import TeamItem from "../components/TeamItem";
import loadable from "@loadable/component";

import teams from "../content/teams";

function TeamScroll({ scroll, setScroll, width, setWidth }) {
  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);
  const scrollRef = useRef();

  const handleScroll = (e) => {
    e.preventDefault();
    setDelta(e.deltaY);
    setScroll(e.currentTarget.scrollLeft);

    // set width of page
    setWidth(e.currentTarget.scrollWidth - e.currentTarget.clientWidth);
    // console.log(scroll);
    // console.log(width);
  };

  useEffect(() => {
    scrollRef.current.scrollLeft += deltaVal;
    setDelta(0);
  }, [deltaVal]);

  const scrolls = [];

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    scrolls.push(
      <TeamItem
        team={team}
        key={i}
        delta={deltaVal}
        width={width}
        scroll={scroll}
      />
    );
  }

  return (
    <div
      ref={scrollRef}
      className="outer-scroll-container"
      onWheel={(e) => {
        handleScroll(e);
      }}
    >
      <div className="inner-scroll-container flex w-5/6 mx-auto 2xl:pl-16">{scrolls}</div>
    </div>
  );
}

export default TeamScroll;
