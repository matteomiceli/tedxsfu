import React, { isValidElement, useState } from "react";
import upArrow from "../static/images/upArrow.svg";
import TeamPanels from "./TeamPanels";
import teams from "../content/teams";

//  for motion
import { motion } from "framer-motion";
import GrowingAnimation from "../components/animation/GrowingTextAnimation";
import { AnimationConfig } from "../AnimationConfig";

function TeamNav({ spyTeam, setTeam, scroll, setScroll, width, setWidth }) {
  return (
    <div className="w-full flex justify-start ml-document mt-flowline-mobile md:mt-flowline">
      <div className="team-nav-container flex flex-col items-end lg:flex-row w-full lg:ml-axis">
        <div className="self-start lg:self-end flex-shrink-0">
          <h1 className="mr-4 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            <GrowingAnimation delay={0.1}>Meet the Team</GrowingAnimation>
          </h1>
        </div>
        <div className="self-start lg:self-end my-4 lg:my-0 lg:ml-8 team-nav-overflow overflow-x-scroll w-full">
          <motion.div
            className="team-nav-container flex w-full"
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: AnimationConfig.NORMAL,
                ease: AnimationConfig.EASING,
              },
            }}
            exit={{
              opacity: 0,
              x: -20,
              transition: {
                duration: AnimationConfig.NORMAL,
                ease: AnimationConfig.EASING_INVERTED,
              },
            }}
          >
            {teams.map((team, index) => {
              return (
                <TeamPanels
                  team={team}
                  key={team.i}
                  spyTeam={spyTeam}
                  setTeam={setTeam}
                  scroll={scroll}
                  setScroll={setScroll}
                  width={width}
                  setWidth={setWidth}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TeamNav;
