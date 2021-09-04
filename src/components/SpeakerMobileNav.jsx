import React, { useRef, useState, useEffect } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";
import { transform } from "framer-motion";



function SpeakerMobileNav({
  spySpeaker,
  onScrubBegin,
  onScrubEnd,
  onScrubChange,
  navRef
}) {
  // const [inTransit, setTransit] = useState(false);
  // const [navScroll, setNavScroll] = useState(0);
  // get width and scroll position of speaker scroll container
  // const container = () => {
  //   if (scrollRef !== undefined && typeof window !== undefined) {
  //     return {
  //       width: scrollRef.current.scrollWidth - window.innerWidth,
  //     };
  //   }
  // };

  // looking for on touch event for mainScroll and on navScroll 
  // switching between the two nav options. Prevnting elements from racing 

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

  return (
    <div className="absolute text-white text-4xl w-full bottom-20">
      <div
        ref={navRef}
        onTouchStart={onScrubBegin}
        onTouchMove={onScrubChange}
        onTouchEnd={onScrubEnd}
        className="mobile-speaker-container h-24 bg-transparent flex overflow-x-scroll"
      >
        <div className="mobile-panel-spacer bg-transparent w-96"></div>
        {speakers.map((speaker, i) => {
          return (
            <SpeakerMobilePanel
              speaker={speaker}
              key={i}
              i={i}
              spySpeaker={spySpeaker}
            />
          );
        })}
        <div className="mobile-panel-spacer bg-transparent w-96"></div>
      </div>
    </div>
  );
}

export default SpeakerMobileNav;

function SpeakerMobilePanel({ spySpeaker, speaker, i }) {
  return (
    <div
      className={`${
        spySpeaker === i + 1 ? "panel-active" : "panel-notactive"
      } speaker-mobile-panel mobile-speaker${
        i + 1
      } h-full bg-blue-400 z-10 mx-0.5`}
    ></div>
  );
}
