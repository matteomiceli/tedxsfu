import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../../AnimationConfig";

// character
// - the flag indicate the the animation is split into each
//   character instead of each word

const growItemContainerVariant = {
  initial: {},
  grown: {
    transition: {
      ease: AnimationConfig.EASING,
      duration: AnimationConfig.NORMAL,
      staggerDirection: -1,
      staggerChildren: 0.01,
    },
  },
  exit: {},
};
const growItemVariant = {
  initial: {
    opacity: 0,
    y: ".3em",
    x: "1.8em",
    fontVariationSettings: `"wght" 100`,
  },
  grown: (fontWeight) => ({
    opacity: 1,
    y: 0,
    x: 0,
    fontVariationSettings: `"wght" ${fontWeight}`,
    transition: {
      ease: AnimationConfig.EASING,
      duration: AnimationConfig.SLOW,
    },
  }),
  exit: {},
};

const GrowingTextAnimation = ({
  children,
  withPlaceholder,
  fontWeight = 300,
}) => {
  return (
    <motion.span
      variants={growItemContainerVariant}
      initial="initial"
      animate="grown"
      exit="exit"
    >
      {children.split(" ").map((val, index) => {
        return (
          <>
            <motion.span
              custom={fontWeight}
              className="inline-block"
              key={index}
              variants={growItemVariant}
            >
              {val}
            </motion.span>{" "}
          </>
        );
      })}
    </motion.span>
  );
};

export default GrowingTextAnimation;
