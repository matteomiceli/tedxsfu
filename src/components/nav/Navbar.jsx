import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../../static/images/logo.png";

import Menu from "../Menu";
import EventInfo from "./EventInfo";

import { breakpoints, useBreakpoint } from "../../hooks/useBreakpoint";
import MobileNav from "./MobileNav";

function Navbar({ page }) {
  const [isActive, setActive] = useState(false);
  const isFullNav = useBreakpoint(breakpoints.md);

  return (
    <>
      <div className="fixed top-0 left-0 z-30 w-screen">
        <div className="flex justify-between mx-document mt-document">
          <div className="flex w-full md:w-auto">
            <div className="site-logo lg:w-axis mr-auto md:mr-4">
              <Link to="/">
                <img className="site-logo" src={Logo} alt="TEDxSFU logo" />
              </Link>
            </div>
            <EventInfo />
          </div>
          {isFullNav && (
            <Menu isActive={isActive} setActive={setActive} page={page} />
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-20 w-screen">
        {/* bottom mobile nav */}
        {!isFullNav && <MobileNav />}
      </div>
    </>
  );
}

export default Navbar;
