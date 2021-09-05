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
  animate: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.015,
    },
  },
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
      className={
        isActive
          ? "absolute bottom-0 right-1/4 w-1/2 h-40 flex transition-all duration-200 ease-in-out"
          : "absolute -bottom-20 right-1/4 w-1/2 h-40 flex transition-all duration-200 ease-in-out"
      }
      variants={navContainerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className={
          isActive
            ? "opacity-0 text-white absolute font-NeueHaas w-full h-full flex justify-center top-8 transition-all transform translate-y-28 duration-200 ease-in-out z-10"
            : "opacity-100 text-white absolute font-NeueHaas w-full h-full flex justify-center top-8 transition-all duration-200 ease-in-out z-10"
        }
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
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
