import React, { useState, useRef, useEffect, useMemo } from "react";

import Scroll from "../components/Scroll";
import Navigation from "../components/Navigation";
import { breakpoints, useBreakpoint } from "../hooks/useBreakpoint";
import SpeakerMobileNav from "../components/SpeakerMobileNav";

import speakers from "../content/speakers";
import useDelayTrigger from "../hooks/useDelayTrigger";

import scrollIntoView from "scroll-into-view-if-needed";

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

  const forceModeChange = useRef(false);

  const scrollContainerWidth = () => {
    if (scrollRef !== undefined && typeof window !== undefined) {
      return scrollRef.current.scrollWidth - window.innerWidth;
    }
  };

  // manually navigate to speaker
  useEffect(() => {
    if (window.location && window.location.hash) {
      const elm = document.querySelector(`${window.location.hash}`);
      if (elm) {
        scrollIntoView(elm);
      }

      const speakerSlug = window.location.hash.replace("#", "");
      const targetSpeaker = speakers.find(
        (speaker) => speaker.slug === speakerSlug
      );
      if (targetSpeaker) {
        selectSpeaker(targetSpeaker.id);
      }
    }
  }, []);

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
    // if (interactionMode !== interactionModes.SCRUB)
    setInteractionMode(interactionModes.SCROLL);
    forceModeChange.current = true;
  };

  const handleScrollEnd = () => {
    setInteractionMode(interactionModes.IDLE);
  };

  const handleScrollChange = () => {
    // desktop scenario
    if (!navRef.current) return;

    forceModeChange.current = false;

    // STEP1 - update scrub bar position
    const speakerPanelWidth = scrollContainerWidth() / (speakers.length - 1);
    const navWidth = navRef.current.scrollWidth - window.innerWidth;
    const containerNavRatio = navWidth / scrollContainerWidth();

    requestAnimationFrame(() => {
      navRef.current.scrollLeft = scroll * containerNavRatio;
    });

    // STEP2 - update selected speaker position
    const PADDING = 20;
    let speakerPos = parseInt((scroll + PADDING) / speakerPanelWidth) + 1;
    setSpeaker(speakerPos);
  };

  // SCRUB
  const handleScrubBegin = () => {
    // if (interactionMode !== interactionModes.SCROLL)
    setInteractionMode(interactionModes.SCRUB);
    forceModeChange.current = true;
  };
  const handleScrubEnd = () => {
    setInteractionMode(interactionModes.IDLE);
  };

  const handleScrubChange = () => {
    // STEP1 - calc the current spy speaker
    let panelWidth = 76;
    let newSpeakerIndex = parseInt(navRef.current.scrollLeft / panelWidth + 1);
    // setSpeaker(parseInt(speakerPos + 1));

    // STEP2 - change the scroll position to the current spy speaker
    const speakerPanelWidth = scrollContainerWidth() / (speakers.length - 1);

    // only update position if the speaker change
    if (spySpeaker !== newSpeakerIndex) {
      forceModeChange.current = false;
      // update change
      scrollRef.current.scrollLeft =
        speakerPanelWidth * newSpeakerIndex - speakerPanelWidth;
    }

    setSpeaker(newSpeakerIndex);
  };

  const handleSpeakerScroll = (scrollAmount) => {
    setScroll(scrollAmount);
  };

  function selectSpeaker(id) {
    const mobileNavItem = document.querySelector(`.mobile-speaker${id}`);
    setSpeaker(id);
    if (mobileNavItem)
      scrollIntoView(mobileNavItem, {
        block: "center",
        inline: "center",
      });
  }

  const handleSelectSpeakerMobile = (id) => {
    selectSpeaker(id);
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
        forceModeChange={forceModeChange}
      />
      {/* debug */}
      {/* <div className="fixed top-20 left-20 z-50">{interactionMode}</div> */}
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
          onSelectSpeaker={handleSelectSpeakerMobile}
          spySpeaker={spySpeaker}
          onScrubBegin={handleScrubBegin}
          onScrubEnd={handleScrubEnd}
          onScrubChange={handleScrubChange}
          interactionMode={interactionMode}
          forceModeChange={forceModeChange}
        />
      )}
    </>
  );
};

export default IndexPage;
