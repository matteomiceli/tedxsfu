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
  const isPointerDown = useRef(false);

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

  const attemptEndScroll = useDelayTrigger(() => {
    if (isPointerDown.current === true) {
      // keep the scroll state sustained if the user haven't lift up their figure
      attemptEndScroll();
    } else {
      onScrollEnd();
    }
  }, 100);

  const logRef = useRef();
  const called = useRef(0);

  const handleScroll = (e) => {
    called.current++;
    logRef.current.innerHTML = called.current;

    // if (interactionMode == interactionModes.IDLE) {
    //   onScrollBegin();
    //   attemptEndScroll();
    // }
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
      onTouchStart={() => {
        isPointerDown.current = true;
        onScrollBegin();
      }}
      onTouchEnd={() => {
        isPointerDown.current = false;
      }}
      // onTouchMove={onScrollChange}
      // onTouchEnd={onScrollEnd}
    >
      <div className="fixed top-40 left-20 z-50" ref={logRef}></div>
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
