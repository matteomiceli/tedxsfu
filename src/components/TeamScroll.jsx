import React, { useEffect, useState, useRef } from "react";
import TeamItem from "../components/TeamItem";
import loadable from "@loadable/component";

import teams from "../content/teams";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

import { mergeRefs } from "../utils/util";

const teamContainerVariant = {
  initial: {},
  animate: { transition: { staggerDirection: -1, staggerChildren: 0.02 } },
  exit: { transition: { staggerDirection: 1, staggerChildren: 0.02 } },
};
const teamVariant = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: AnimationConfig.SLOW,
      ease: AnimationConfig.EASING,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: AnimationConfig.NORMAL,
      ease: AnimationConfig.EASING_INVERTED,
    },
  },
};

function TeamScroll({ scroll, setScroll, scrollRef }) {
  // mouse scroll delta value
  const scrolRefInternal = useRef();

  useEffect(() => {
    // mouse
    const handleWheel = (e) => {
      scrolRefInternal.current.scrollLeft += e.deltaY;
    };
    // handle wheel event
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleContentScroll = (e) => {
    setScroll(e.currentTarget.scrollLeft);
  };

  return (
    <div
      ref={mergeRefs(scrolRefInternal, scrollRef)}
      className="outer-scroll-container"
      onScroll={handleContentScroll}
    >
      <motion.div
        className="inner-scroll-container flex w-full ml-document lg:pl-16 xl:pl-axis"
        variants={teamContainerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {teams.map((team, i) => (
          <motion.div variants={teamVariant}>
            <TeamItem team={team} key={i} scroll={scroll} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TeamScroll;
