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
    <div className="w-full flex justify-start mt-flowline-mobile md:mt-flowline">
      <div className="team-nav-container flex flex-col items-end lg:flex-row w-full lg:ml-axis">
        <div className="self-start ml-document lg:self-end flex-shrink-0">
          <h1 className="mr-16 2xl:mr-24 lg:my-0 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            <GrowingAnimation delay={0.1}>Meet the Team</GrowingAnimation>
          </h1>
        </div>
        <div className="self-start lg:self-end my-4 lg:my-0 h-full w-full relative">
          <motion.div
            className="team-nav-overflow overflow-x-scroll lg:absolute left-0 bottom-1 2xl:bottom-2 right-0"
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
            <div className="flex flex-nowrap">
              {teams.map((team, index) => {
                return (
                  <div className={index === 0 ? "ml-document lg:ml-0" : ""}>
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
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TeamNav;
