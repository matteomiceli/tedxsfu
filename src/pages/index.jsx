import React, { useState, useRef } from "react";

import Scroll from "../components/Scroll";
import Navigation from "../components/Navigation";
import { breakpoints, useBreakpoint } from "../hooks/useBreakpoint";
import SpeakerMobileNav from "../components/SpeakerMobileNav";

const IndexPage = () => {
  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);
  // speaker focus
  const [spySpeaker, setSpeaker] = useState(1);
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0);
  // ref to scroll object
  const scrollRef = useRef();

  const isFullNav = useBreakpoint(breakpoints.md);

  return (
    <>
      <Scroll
        deltaVal={deltaVal}
        setDelta={setDelta}
        spySpeaker={spySpeaker}
        setSpeaker={setSpeaker}
        scroll={scroll}
        setScroll={setScroll}
        width={width}
        setWidth={setWidth}
        scrollRef={scrollRef}
      />
      {isFullNav ? (
        <Navigation
          spySpeaker={spySpeaker}
          setSpeaker={setSpeaker}
          scroll={scroll}
          setScroll={setScroll}
          width={width}
          setWidth={setWidth}
        />
      ) : (
        <SpeakerMobileNav 
          deltaVal={deltaVal}
          setDelta={setDelta}
          spySpeaker={spySpeaker}
          setSpeaker={setSpeaker}
          scroll={scroll}
          setScroll={setScroll}
          scrollRef={scrollRef}
        />
      )}
    </>
  );
};

export default IndexPage;
