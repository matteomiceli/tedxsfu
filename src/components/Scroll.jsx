import React, { useEffect, useState, useRef } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

import speakers from "../content/speakers";

function Scroll({
  onScrollBegin,
  onScrollEnd,
  onScrollChange,
  scroll,
  onScroll,
  width,
  setWidth,
  scrollRef,
  onMouseWheel,
}) {
  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);

  useEffect(() => {
    scrollRef.current.scrollLeft += deltaVal;
    if (deltaVal === 1 || deltaVal === -1) {
      setDelta(0);
    }
  }, [deltaVal]);

  // mouse scroll delta value
  if (typeof window === undefined) {
    return <></>;
  }

  const handleMouseWheel = (e) => {
    e.preventDefault();
    setDelta(e.deltaY);
  };

  const handleScroll = (e) => {
    onScroll(e.currentTarget.scrollLeft);
  };

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
      onTouchStart={onScrollBegin}
      onTouchEnd={onScrollEnd}
      onTouchMove={onScrollChange}
    >
      <div className="inner-scroll-container flex">
        {speakers.map((speaker, index) => (
          <ScrollItem
            speaker={speaker}
            key={index}
            width={width}
            scroll={scroll}
          />
        ))}
      </div>
    </div>
  );
}

export default Scroll;
