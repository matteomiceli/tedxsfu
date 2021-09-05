import React, { useState, useRef, useEffect, useMemo } from "react";

import Scroll from "../components/Scroll";
import Navigation from "../components/Navigation";
import { breakpoints, useBreakpoint } from "../hooks/useBreakpoint";
import SpeakerMobileNav from "../components/SpeakerMobileNav";

import speakers from "../content/speakers";

export const interactionModes = {
  IDLE: "IDLE", // not interacting
  SCRUB: "SCRUB", // for mobile nav
  SCROLL: "SCROLL", // for swipping the speaker
};

const IndexPage = () => {
  // speaker focus
  const [spySpeaker, setSpeaker] = useState(1);
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0);
  // ref to scroll object
  const scrollRef = useRef();
  // ref to nav scrub object
  const navRef = useRef();

  const scrollContainerWidth = () => {
    if (scrollRef !== undefined && typeof window !== undefined) {
      return scrollRef.current.scrollWidth - window.innerWidth;
    }
  };

  // set width of page
  function calcWidth() {
    return scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
  }
  useEffect(() => {
    // set initial width when page load
    setWidth(calcWidth());

    // update width if page is being resized
    const handleResize = () => setWidth(calcWidth());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // interaction mode
  const [interactionMode, setInteractionMode] = useState(interactionModes.IDLE);

  const isFullNav = useBreakpoint(breakpoints.md);

  // TODO: LOGGING OUT THE INTERACTION MODE
  useEffect(() => console.log(interactionMode), [interactionMode]);

  // SCROLL

  const handleScrollBegin = () => {
    if (interactionMode !== interactionModes.SCRUB)
      setInteractionMode(interactionModes.SCROLL);
  };

  const handleScrollEnd = () => {
    console.log("scroll ends");
    setInteractionMode(interactionModes.IDLE);
  };

  const handleScrollChange = () => {
    // STEP1 - update scrub bar position
    const speakerPanelWidth = scrollContainerWidth() / (speakers.length - 1);
    const navWidth = navRef.current.scrollWidth - window.innerWidth;
    const containerNavRatio = navWidth / scrollContainerWidth();

    requestAnimationFrame(() => {
      navRef.current.scrollLeft = scroll * containerNavRatio;
    });

    // STEP2 - update selected speaker position
    let speakerPos = parseInt(scroll / speakerPanelWidth) + 1;
    setSpeaker(speakerPos);
  };

  // SCRUB

  const handleScrubBegin = () => {
    if (interactionMode !== interactionModes.SCROLL)
      setInteractionMode(interactionModes.SCRUB);
  };
  const handleScrubEnd = () => {
    setTimeout(() => {
      setInteractionMode(interactionModes.IDLE);
    }, 500);
  };

  const handleScrubChange = () => {
    // STEP1 - calc the current spy speaker
    let panelWidth = 76;
    let newSpeakerIndex = parseInt(navRef.current.scrollLeft / panelWidth + 1);
    // setSpeaker(parseInt(speakerPos + 1));

    // STEP2 - change the scroll position to the current spy speaker
    const speakerPanelWidth = scrollContainerWidth() / (speakers.length - 1);
    scrollRef.current.scrollLeft =
      speakerPanelWidth * newSpeakerIndex - speakerPanelWidth;

    setSpeaker(newSpeakerIndex);
  };

  const handleSpeakerScroll = (scrollAmount) => {
    setScroll(scrollAmount);
  };

  return (
    <>
      <Scroll
        spySpeaker={spySpeaker}
        setSpeaker={setSpeaker}
        scroll={scroll}
        onScroll={handleSpeakerScroll}
        width={width}
        setWidth={setWidth}
        scrollRef={scrollRef}
        onScrollBegin={handleScrollBegin}
        onScrollEnd={handleScrollEnd}
        onScrollChange={handleScrollChange}
        interactionMode={interactionMode}
      />
      <div className="fixed top-20 left-20 z-50">{interactionMode}</div>
      {isFullNav ? (
        <Navigation
          spySpeaker={spySpeaker}
          setSpeaker={setSpeaker}
          scroll={scroll}
          width={width}
        />
      ) : (
        <SpeakerMobileNav
          navRef={navRef}
          spySpeaker={spySpeaker}
          onScrubBegin={handleScrubBegin}
          onScrubEnd={handleScrubEnd}
          onScrubChange={handleScrubChange}
          interactionMode={interactionMode}
        />
      )}
    </>
  );
};

export default IndexPage;
