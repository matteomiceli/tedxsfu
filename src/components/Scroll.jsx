import React, { useEffect, useState, useRef } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

import speakers from "../content/speakers";

function Scroll({ scroll, setScroll, width, setWidth, scrollRef }) {
  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);
  

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
        handleScroll(e);
      }}
    >
      <div className="inner-scroll-container flex">{scrolls}</div>
    </div>
  );
}

export default Scroll;
