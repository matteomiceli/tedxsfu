import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./nav/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.css";
import LoadingSpinner from "./loadingSpinner/LoadingSpinner";
import useFirstRender from "../hooks/useFirstRender";
import useForceUpdate from "use-force-update";

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
      {/* {showSpinner && ( */}
      {/* <div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full flex pointer-events-none">
        <LoadingSpinner className="mx-auto my-auto" show={showSpinner} />
      </div> */}
      {/* )} */}
    </>
  );
};

export default PageWrapper;
