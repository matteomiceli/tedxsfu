import React, { useEffect, useState, useRef } from "react";
import TeamItem from "../components/TeamItem";
import loadable from "@loadable/component";

import teams from "../content/teams";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

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

function TeamScroll({ scroll, setScroll, width, setWidth }) {
  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);
  const scrollRef = useRef();

  const handleScroll = (e) => {
    e.preventDefault();
    setDelta(e.deltaY);
    setScroll(e.currentTarget.scrollLeft);

    // set width of page
    setWidth(e.currentTarget.scrollWidth - e.currentTarget.clientWidth);
    // console.log(scroll);
    // console.log(width);
  };

  useEffect(() => {
    scrollRef.current.scrollLeft += deltaVal;
    setDelta(0);
  }, [deltaVal]);

  return (
    <div
      ref={scrollRef}
      className="outer-scroll-container"
      onWheel={(e) => {
        handleScroll(e);
      }}
    >
      <motion.div
        className="inner-scroll-container flex w-full ml-document lg:pl-axis"
        variants={teamContainerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {teams.map((team, i) => (
          <motion.div variants={teamVariant}>
            <TeamItem
              team={team}
              key={i}
              delta={deltaVal}
              width={width}
              scroll={scroll}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TeamScroll;
