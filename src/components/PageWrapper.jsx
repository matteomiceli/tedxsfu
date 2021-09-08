import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./nav/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.css";

const PageWrapper = ({ children }) => {
  return (
    <>
      <motion.div
        className="bg-black font-NeueHaas w-screen h-full flex"
        initial={{ opacity: 0 }}
        // delay to reduce computation load
        animate={{ opacity: 1 }}
      >
        <Navbar page={1} />

        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      </motion.div>
    </>
  );
};

export default PageWrapper;
