import React, { useEffect, useState, useRef } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

import speakers from "../content/speakers";

function Scroll({ scroll, setScroll, width, setWidth, scrollRef, deltaVal, setDelta }) {
  // mouse scroll delta value
 
  useEffect(() => {
    scrollRef.current.scrollLeft += deltaVal;
    if (deltaVal === 1 || deltaVal === -1) {
      setDelta(0);
    }
  }, [deltaVal]);

  if (typeof window === undefined) {
    return <></>;
  }

  const handleMouseWheel = (e) => {
    e.preventDefault();
    setDelta(e.deltaY);
    setScroll(e.currentTarget.scrollLeft);

    // set width of page
    setWidth(e.currentTarget.scrollWidth - e.currentTarget.clientWidth);
  };

  const handleScroll = (e) => {
    setScroll(e.currentTarget.scrollLeft);
  }

  const scrolls = [];

  for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
    scrolls.push(
      <ScrollItem
        speaker={speaker}
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
        handleMouseWheel(e);
      }}
      onScroll={(e) => {
        handleScroll(e);
      }}
    >
      <div className="inner-scroll-container flex">{scrolls}</div>
    </div>
  );
}

export default Scroll;
