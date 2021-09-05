import React, { useRef, useState, useEffect } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";
import { transform } from "framer-motion";
import useDelayTrigger from "../hooks/useDelayTrigger";

import { interactionModes } from "../pages";
import Image from "./Image";

function SpeakerMobileNav({
  spySpeaker,
  onScrubBegin,
  onScrubEnd,
  onScrubChange,
  navRef,
  interactionMode,
}) {
  const attemptEndScrub = useDelayTrigger(() => onScrubEnd(), 66);
  const handleNavScroll = () => {
    if (interactionMode == interactionModes.IDLE) {
      onScrubBegin();
      attemptEndScrub();
    }
    // when the scroll is initiated by the Scrub component
    if (interactionMode == interactionModes.SCRUB) {
      onScrubChange();
      attemptEndScrub();
    }
  };

  return (
    <div className="absolute text-white text-4xl w-full bottom-20">
      <div
        ref={navRef}
        // onTouchStart={onScrubBegin}
        // onTouchMove={onScrubChange}
        // onTouchEnd={onScrubEnd}
        onScroll={handleNavScroll}
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
    >
      <Image
        src={speaker.img}
        width={2560}
        height={1706}
        className="h-full object-cover"
      />
    </div>
  );
}
