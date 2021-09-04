import React, { useState, useRef, useEffect, useMemo } from "react";

import Scroll from "../components/Scroll";
import Navigation from "../components/Navigation";
import { breakpoints, useBreakpoint } from "../hooks/useBreakpoint";
import SpeakerMobileNav from "../components/SpeakerMobileNav";

import speakers from "../content/speakers";

const interactionModes = {
  IDLE: "IDLE",  // not interacting
  SCRUB: "SCRUB", // for mobile nav
  SCROLL: "SCROLL"  // for swipping the speaker
}

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
  }

  // useEffect(() => {
  //   setTransit(false);

  //   let panelWidth = 76;
  //   let speakerPos = navScroll / panelWidth;
  //   setSpeaker(parseInt(speakerPos + 1));

  //   // set position of scroll container to match spied speaker
  //   if (!inTransit) {
  //     const speakerPanelWidth = container().width / (speakers.length - 1);
  //     scrollRef.current.scrollLeft =
  //       speakerPanelWidth * spySpeaker - speakerPanelWidth;
  //   }
  // }, [navScroll]);


  // useEffect(() => {
  //   setTransit(true);

  //   // update spyspeaker when container is scrolled to speaker
  //   const speakerPanelWidth = container().width / (speakers.length - 1);
  //   let speakerPos = parseInt(scroll / speakerPanelWidth) + 1;

  //   const navWidth = navRef.current.scrollWidth - window.innerWidth;
  //   const containerNavRatio = navWidth / container().width;

  //   navRef.current.scrollLeft = scroll * containerNavRatio;
  //   console.log(navScroll);
  // }, [scroll])


  // interaction mode
  const [interactionMode, setInteractionMode] = useState(interactionModes.IDLE);

  const isFullNav = useBreakpoint(breakpoints.md);

  // TODO: LOGGING OUT THE INTERACTION MODE
  useEffect(()=> console.log(interactionMode), [interactionMode]);


  const handleScrollBegin = ()=> {
    if(interactionMode !== interactionModes.SCRUB)
      setInteractionMode(interactionModes.SCROLL);
  }
  const handleScrollEnd = ()=> setInteractionMode(interactionModes.IDLE);

  const handleScrollChange = ()=> {
    // STEP1 - update scrub bar position
    const speakerPanelWidth = scrollContainerWidth() / (speakers.length - 1);
    const navWidth = navRef.current.scrollWidth - window.innerWidth;
    const containerNavRatio = navWidth / scrollContainerWidth();

    requestAnimationFrame(()=> {
      navRef.current.scrollLeft = scroll * containerNavRatio;
      // const leftValue = scroll * containerNavRatio;
      // navRef.current.style.transform = `translate3d(${-leftValue}px, 0, 0)`;
    });

    // STEP2 - update selected speaker position
    let speakerPos = parseInt(scroll / speakerPanelWidth) + 1;
    setSpeaker(speakerPos);
  }

  const handleScrubBegin = ()=> {
    if(interactionMode !== interactionModes.SCROLL)
      setInteractionMode(interactionModes.SCRUB);
  }
  const handleScrubEnd = ()=> setInteractionMode(interactionModes.IDLE);

  const handleScrubChange = ()=> {
    // STEP1 - calc the current spy speaker
    let panelWidth = 76;
    let newSpeakerIndex = parseInt((navRef.current.scrollLeft / panelWidth) + 1);
    // setSpeaker(parseInt(speakerPos + 1));

    // STEP2 - change the scroll position to the current spy speaker
    const speakerPanelWidth = scrollContainerWidth() / (speakers.length - 1);
    scrollRef.current.scrollLeft = speakerPanelWidth * newSpeakerIndex - speakerPanelWidth;

    setSpeaker(newSpeakerIndex);
  }

  return (
    <>
      <Scroll
        spySpeaker={spySpeaker}
        setSpeaker={setSpeaker}
        scroll={scroll}
        onScroll={setScroll}
        width={width}
        setWidth={setWidth}
        scrollRef={scrollRef}

        onScrollBegin={handleScrollBegin}
        onScrollEnd={handleScrollEnd}
        onScrollChange={handleScrollChange}
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
          navRef={navRef}
          spySpeaker={spySpeaker}
          onScrubBegin={handleScrubBegin}
          onScrubEnd={handleScrubEnd}
          onScrubChange={handleScrubChange}
        />
      )}
    </>
  );
};

export default IndexPage;
