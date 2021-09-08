import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";

import Image from "./Image";
import scrollIntoView from "scroll-into-view-if-needed";

import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

function NavPanels({
  isActive,
  speaker,
  setSpeaker,
  spySpeaker,
  width,
  scroll,
}) {
  // handles smooth scroll function and sets speaker on click
  const handleNavClick = (e) => {
    scrollIntoView(document.querySelector(`#${speaker.slug}`), {
      behavior: "smooth",
    });
    // setSpeaker(parseInt(speaker.id));
  };

  // changes focus when div scrolled into view
  useEffect(() => {
    let speakerWidth = width / speakers.length;
    let speakerPos = scroll / speakerWidth;

    if (scroll != 0) {
      setSpeaker(parseInt(speakerPos) + 1);
    }

    // if at end, spy last speaker (addresses bug at final scrollPos)
    if (scroll === width && scroll != 0) {
      setSpeaker(speakers.length);
    }
  }, [scroll, width]);

  return (
    <motion.div
      onClick={(e) => handleNavClick(e)}
      className={`flex h-full w-full mx-1 ${
        spySpeaker === speaker.id ? "panel-active" : "panel-notactive"
      }`}
      // whileHover={{
      //   y: -5,
      //   transition: {
      //     ease: AnimationConfig.EASING,
      //     duration: AnimationConfig.FAST,
      //   },
      // }}
      // initial={{
      //   transition: {
      //     ease: AnimationConfig.EASING,
      //     duration: AnimationConfig.VERY_FAST,
      //   },
      // }}
      // whileTap={{
      //   y: 8,
      //   transition: {
      //     ease: AnimationConfig.EASING,
      //     duration: AnimationConfig.VERY_FAST,
      //   },
      // }}
    >
      <motion.button
        initial={{ opacity: 0.7 }}
        animate={{
          opacity: isActive ? 1 : 0.7,
          transition: {
            duration: AnimationConfig.FAST,
            ease: AnimationConfig.EASING_SOFT,
          },
        }}
        className="h-full"
      >
        <Image
          src={speaker.img}
          className="h-full object-cover"
          width={1271}
          height={1279}
        />
      </motion.button>
    </motion.div>
  );
}

export default NavPanels;
