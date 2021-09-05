import React, { useRef, useState, useEffect } from "react";
import upArrow from "../static/images/upArrow.svg";
import TeamPanels from "./TeamPanels";
import teams from "../content/teams";

import useDelayTrigger from "../hooks/useDelayTrigger";

//  for motion
import { motion } from "framer-motion";
import GrowingAnimation from "../components/animation/GrowingTextAnimation";
import { AnimationConfig } from "../AnimationConfig";
import scrollIntoView from "scroll-into-view-if-needed";

function TeamNav({ spyTeam, setTeam, scroll, scrollWidth }) {
  const [isScrolled, setIsScrolled] = useState();

  const navContainerRef = useRef();
  const handleNavBarScroll = () => {
    setIsScrolled(navContainerRef.current.scrollLeft !== 0);
  };
  // support wheel scroll
  const handleNavWheel = (e) => {
    e.stopPropagation();
    navContainerRef.current.scrollLeft += e.deltaY;
  };

  const [isJumpingToTeam, setIsJumpingToTeam] = useState(false);
  const resetIsJumping = useDelayTrigger(() => setIsJumpingToTeam(false));

  const handleTeamSelect = (team) => {
    // team select
    const teamIndex = team.i;
    const targetElm = document.querySelector(`#team-${teamIndex}`);
    if (!targetElm) return;

    scrollIntoView(targetElm, {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    setIsJumpingToTeam(true);
    resetIsJumping(500);
  };

  useEffect(() => {
    if (spyTeam && !isJumpingToTeam) {
      const targetElm = document.querySelector(`#team-${spyTeam}-button`);
      if (!targetElm) return;

      //https://www.npmjs.com/package/scroll-into-view-if-needed
      scrollIntoView(targetElm, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [spyTeam, isJumpingToTeam]);

  return (
    <div className="w-full justify-start mt-flowline-mobile lg:mt-flowline-lg xl:mt-flowline">
      <div className="team-nav-container flex flex-col items-end lg:flex-row lg:pl-16 xl:pl-axis">
        <div className="self-start flex-shrink-0 flex-grow-0 ml-document lg:self-end">
          <h1 className="mr-16 2xl:mr-24 lg:my-0 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl whitespace-nowrap">
            <GrowingAnimation delay={0.1}>Meet the Team</GrowingAnimation>
          </h1>
        </div>
        <motion.div
          className="self-start flex-auto lg:self-end my-4 lg:my-0 lg:h-full w-full relative"
          onWheelCapture={handleNavWheel}
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
          {/* shades to indicate scrolled — shade left */}
          <div
            className={
              isScrolled
                ? "block absolute left-0 bottom-0 w-8 h-8 z-50 pointer-events-none shade-from-left"
                : "hidden"
            }
          />
          {/* shades to indicate scrolled — shade right */}
          <div
            className={
              "block absolute right-0 bottom-0 w-8 h-8 z-50 pointer-events-none shade-from-right"
            }
          />
          <motion.div
            ref={navContainerRef}
            onScroll={handleNavBarScroll}
            className="team-nav-overflow overflow-x-scroll lg:absolute left-0 bottom-1 2xl:bottom-2 right-0"
          >
            <div className="flex flex-nowrap">
              {teams.map((team, index) => {
                return (
                  <div
                    id={`team-${team.i}-button`}
                    className={index === 0 ? "ml-document lg:ml-0" : ""}
                  >
                    <TeamPanels
                      team={team}
                      key={team.i}
                      spyTeam={spyTeam}
                      setTeam={setTeam}
                      scroll={scroll}
                      onSelectTeam={handleTeamSelect}
                      scrollWidth={scrollWidth}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamNav;
