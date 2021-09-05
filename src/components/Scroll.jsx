import React, { useEffect, useState, useRef } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

import useDelayTrigger from "../hooks/useDelayTrigger";
import speakers from "../content/speakers";
import { interactionModes } from "../pages/index";
import { mergeRefs } from "../utils/util";

import scrollIntoView from "scroll-into-view-if-needed";

const Scroll = function ({
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
  forceModeChange,
  spySpeaker,
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
  const [isWheeling, setIsWheeling] = useState();
  const handleMouseWheel = (e) => {
    setDelta(e.deltaY);
    setIsWheeling(true);
  };

  const attemptEndScroll = useDelayTrigger(() => {
    if (forceModeChange.current === true) {
      onScrollEnd();
      forceModeChange.current = false;
      return;
    }
    // logRef2.current.innerHTML = isPointerDown.current;

    if (isPointerDown.current === true) {
      // keep the scroll state sustained if the user haven't lift up their figure
      attemptEndScroll();
    } else {
      onScrollEnd();
    }
  }, 100);

  // const logRef = useRef();
  // const logRef2 = useRef();
  // const called = useRef(0);

  const handleScroll = (e) => {
    // called.current++;
    // logRef.current.innerHTML = called.current;

    if (interactionMode === interactionModes.IDLE) {
      onScrollBegin();
      attemptEndScroll();
    }
    // when the scroll is initiated by the Scroll component
    if (interactionMode === interactionModes.SCROLL) {
      onScrollChange();
      attemptEndScroll();
    }

    onScroll(e.currentTarget.scrollLeft);
  };

  // useEffect(() => {
  //   document.addEventListener(
  //     "touchstart",
  //     () => {
  //       isPointerDown.current = true;
  //       onScrollBegin();
  //     },
  //     true
  //   );
  // }, []);

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
      onTouchStart={() => {
        isPointerDown.current = true;
        onScrollBegin();
        setIsWheeling(false);
      }}
      onTouchEnd={() => {
        isPointerDown.current = false;
      }}
      onTouchMove={() => {
        // sustain the scroll state
        isPointerDown.current = true;
        onScrollBegin();
        attemptEndScroll();
      }}
      // onTouchEnd={onScrollEnd}
      style={{
        scrollSnapType: isWheeling ? "none" : "x mandatory",
        overflowX: "scroll",
        display: "flex",
      }}
    >
      {/* DEBUG */}
      {/* <div className="fixed top-40 left-20 z-50" ref={logRef}></div>
      <div className="fixed top-60 left-20 z-50" ref={logRef2}></div> */}
      <div className="inner-scroll-container flex">
        {speakers.map((speaker, index) => (
          <ScrollItem speaker={speaker} key={index} width={width} />
        ))}
      </div>
    </div>
  );
};

export default Scroll;
