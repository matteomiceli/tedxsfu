import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../../AnimationConfig";

const STAGGER_DELAY = 0.1;

const variants = {
  initial: { opacity: 0, x: 20 },
  animate: (staggerIndex) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: AnimationConfig.EASING,
      duration: AnimationConfig.SLOW,
      delay: staggerIndex * STAGGER_DELAY,
    },
  }),
  exit: (staggerIndex) => ({
    opacity: 0,
    x: -20,
    transition: {
      ease: AnimationConfig.EASING,
      duration: AnimationConfig.NORMAL,
      delay: staggerIndex * STAGGER_DELAY,
    },
  }),
};

export function SimpleDivAnimation({ children, staggerIndex = 0, ...props }) {
  return (
    <motion.div
      {...props}
      custom={staggerIndex}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
export function SimpleSectionAnimation({
  children,
  staggerIndex = 0,
  ...props
}) {
  return (
    <motion.section
      {...props}
      custom={staggerIndex}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  );
}
