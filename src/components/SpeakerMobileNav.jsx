import React, { useRef, useState, useEffect } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";
import { motion } from "framer-motion";
import useDelayTrigger from "../hooks/useDelayTrigger";

import { interactionModes } from "../pages";
import Image from "./Image";
import { AnimationConfig } from "../AnimationConfig";

const navContainerVariant = {
  initial: {
    transition: {
      staggerChildren: 0.015,
    },
  },
  animate: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.02,
    },
  },
  exit: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.02,
    },
  },
};
const navPanelVariant = {
  initial: { opacity: 0, y: 0, x: 50 },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: AnimationConfig.SLOW,
      ease: AnimationConfig.EASING,
    },
  },
  exit: {
    opacity: 0,
    y: -0,
    x: -0,
    transition: {
      duration: AnimationConfig.NORMAL,
      ease: AnimationConfig.EASING,
    },
  },
};

function SpeakerMobileNav({
  setSpeaker,
  spySpeaker,
  onScrubBegin,
  onScrubEnd,
  onScrubChange,
  navRef,
  interactionMode,
  forceModeChange,
  onSelectSpeaker,
}) {
  const attemptEndScrub = useDelayTrigger(() => {
    if (forceModeChange.current === true) {
      onScrubEnd();
      forceModeChange.current = false;
      return;
    }

    if (isPointerDown.current === true) {
      // keep the scroll state sustained if the user haven't lift up their figure
      attemptEndScrub();
    } else {
      onScrubEnd();
    }
  }, 100);
  const isPointerDown = useRef(false);

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
      <motion.div
        ref={navRef}
        onTouchStart={() => {
          onScrubBegin();
          isPointerDown.current = true;
        }}
        // onTouchMove={onScrubChange}
        onTouchEnd={() => {
          isPointerDown.current = false;
        }}
        onScroll={handleNavScroll}
        className="mobile-speaker-container h-24 bg-transparent flex overflow-x-scroll"
        variants={navContainerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="mobile-panel-spacer bg-transparent w-96"></div>
        {speakers.map((speaker, i) => {
          return (
            <SpeakerMobilePanel
              speaker={speaker}
              onSelectSpeaker={onSelectSpeaker}
              key={i}
              i={i}
              spySpeaker={spySpeaker}
            />
          );
        })}
        <div className="mobile-panel-spacer bg-transparent w-96"></div>
      </motion.div>
    </div>
  );
}

export default SpeakerMobileNav;

function SpeakerMobilePanel({ spySpeaker, speaker, onSelectSpeaker, i }) {
  return (
    <motion.div
      variants={navPanelVariant}
      className={`${
        spySpeaker === i + 1 ? "panel-active" : "panel-notactive"
      } speaker-mobile-panel mobile-speaker${i + 1} h-full z-10 mx-0.5`}
    >
      <a
        href={`#${speaker.slug}`}
        onClick={() => {
          onSelectSpeaker(i + 1);
        }}
      >
        <Image
          src={speaker.img}
          width={2560}
          height={1706}
          className="h-full object-cover"
        />
      </a>
    </motion.div>
  );
}
