import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../../AnimationConfig";

const STAGGER_DELAY = 0.2;

export default function SimpleDivAnimation({
  children,
  staggerIndex = 0,
  ...props
}) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          ease: AnimationConfig.EASING,
          duration: AnimationConfig.SLOW,
          delay: staggerIndex * STAGGER_DELAY,
        },
      }}
      exit={{
        opacity: 0,
        x: -20,
        transition: {
          ease: AnimationConfig.EASING,
          duration: AnimationConfig.NORMAL,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
