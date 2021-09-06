import React, { isValidElement, useState } from "react";
import upArrow from "../static/images/upArrow.svg";
import NavPanels from "./NavPanels";
import speakers from "../content/speakers";

import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

const navContainerVariant = {
  initial: {
    transition: {
      staggerChildren: 0.015,
    },
  },
  animate: (isActive) => ({
    y: isActive ? "-5rem" : 0,
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.015,
      duration: AnimationConfig.NORMAL,
      ease: AnimationConfig.EASING,
    },
  }),
  exit: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.015,
    },
  },
};
const navPanelVariant = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: AnimationConfig.NORMAL,
      ease: AnimationConfig.EASING,
    },
  },
  exit: {
    opacity: 0,
    y: -0,

    transition: {
      duration: AnimationConfig.NORMAL,
      ease: AnimationConfig.EASING,
    },
  },
};

function Navigation({ spySpeaker, setSpeaker, scroll, width }) {
  const [isActive, setActive] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={"absolute -bottom-20 right-1/4 w-1/2 h-40 flex"}
      variants={navContainerVariant}
      custom={isActive}
      initial={"initial"}
      animate={"animate"}
      exit="exit"
    >
      <motion.div
        className={"absolute w-full h-full flex justify-center top-8 z-10"}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isActive ? 0 : 1,
          y: isActive ? "7rem" : 0,
          transition: {
            duration: AnimationConfig.NORMAL,
            ease: AnimationConfig.EASING,
          },
        }}
        exit={{
          opacity: 0,
          y: 20,
          transition: {
            duration: AnimationConfig.FAST,
            ease: AnimationConfig.EASING_INVERTED,
          },
        }}
      >
        <p className="text-sm font-medium">ALL SPEAKERS</p>
        <div className="h-5">
          <img src={upArrow} alt="up arrow" className="h-2 ml-2 mt-0.5" />
        </div>
      </motion.div>
      {speakers.map((speaker, index) => {
        return (
          <motion.div
            variants={navPanelVariant}
            key={index}
            className="ml-0.5 mr-0.5"
          >
            <NavPanels
              speaker={speaker}
              isActive={isActive}
              key={index}
              spySpeaker={spySpeaker}
              setSpeaker={setSpeaker}
              scroll={scroll}
              width={width}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Navigation;
