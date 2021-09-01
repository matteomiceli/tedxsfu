import { Link } from "gatsby";
import React, { useState } from "react";

import { motion } from "framer-motion";

import Menu from "./Menu";
import EventInfo from "./EventInfo";
import Image from "../Image";

import { breakpoints, useBreakpoint } from "../../hooks/useBreakpoint";
import MobileNav from "./MobileNav";
import { AnimationConfig } from "../../AnimationConfig";

function Navbar({ page }) {
  const [isActive, setActive] = useState(false);
  const isFullNav = useBreakpoint(breakpoints.md);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-30 w-screen"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: AnimationConfig.NORMAL,
            ease: AnimationConfig.EASING_SOFT,
            delay: 0.5,
          },
        }}
      >
        <motion.div className="flex justify-between mx-document mt-document">
          <div className="flex w-full md:w-auto">
            <div className="site-logo lg:w-axis mr-auto md:mr-4 lg:mr-0">
              <Link to="/">
                <Image
                  className="site-logo"
                  src="/images/logo.png"
                  alt="TEDxSFU logo"
                />
              </Link>
            </div>
            <EventInfo />
          </div>
          {isFullNav && (
            <Menu isActive={isActive} setActive={setActive} page={page} />
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed bottom-0 left-0 z-20 w-screen"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: AnimationConfig.NORMAL,
            ease: AnimationConfig.EASING_SOFT,
            delay: 0.5,
          },
        }}
      >
        {/* bottom mobile nav */}
        {!isFullNav && <MobileNav />}
      </motion.div>
    </>
  );
}

export default Navbar;
