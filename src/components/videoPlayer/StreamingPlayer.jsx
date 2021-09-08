import React from "react";
import { motion } from "framer-motion";

const StreamingPlayer = ({ src, ...props }) => {
  return (
    <motion.video {...props}>
      <source src={src} type="video/mp4" />
    </motion.video>
  );
};

export default StreamingPlayer;
