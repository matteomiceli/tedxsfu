import React, { useEffect, useState, useRef } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

import useDelayTrigger from "../hooks/useDelayTrigger";
import speakers from "../content/speakers";
import { interactionModes } from "../pages/index";

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
  interactionMode,
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
  const handleMouseWheel = (e) => {
    setDelta(e.deltaY);
  };

  const attemptEndScroll = useDelayTrigger(() => onScrollEnd(), 66);

  const handleScroll = (e) => {
    if (interactionMode == interactionModes.IDLE) {
      onScrollBegin();
      attemptEndScroll();
    }
    // when the scroll is initiated by the Scroll component
    if (interactionMode == interactionModes.SCROLL) {
      onScrollChange();
      attemptEndScroll();
    }

    onScroll(e.currentTarget.scrollLeft);
  };

  return (
    <div
      ref={scrollRef}
      className="outer-scroll-container"
      onWheel={(e) => {
        handleMouseWheel(e);
      }}
      onScrollCapture={(e) => {
        handleScroll(e);
      }}
      // onTouchStart={onScrollBegin}
      // onTouchEnd={onScrollEnd}
      // onTouchMove={onScrollChange}
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
