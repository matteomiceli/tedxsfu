import React, { useState } from "react";
import Logo from "../static/images/logo.png";

import Menu from "./Menu";

function Navbar({ page }) {
  const [isActive, setActive] = useState(false);

  return (
    <div className="flex h-28 fixed top-0 left-0 z-20 w-screen justify-between items-center px-12">
      <div className="flex items-center">
        <img className="" src={Logo} alt="TEDxSFU logo" />
        <div className="flex items-center ml-10">
          <div className="one-px h-14 bg-ted-red"></div>
          <div className="h-16 flex flex-col mx-2 justify-between">
            <p className="text-white font-NeueHaas text-sm w-32">
              Anvil Theatre <br></br>New Westminster
            </p>
            <p className="text-gray-400 font-NeueHaas text-sm">Location</p>
          </div>
          <div className="one-px h-14 bg-ted-red"></div>
          <div className="h-16 flex flex-col mx-2 justify-between">
            <p className="text-white font-NeueHaas text-3xl w-32">
              Nov 20<sup>th</sup>
            </p>
            <p className="text-gray-400 font-NeueHaas text-sm">Date</p>
          </div>
          <div className="one-px h-14 bg-ted-red"></div>
          <div className="h-16 flex flex-col mx-2 justify-between">
            <p className="text-white font-NeueHaas text-3xl w-32">1-8 pm</p>
            <p className="text-gray-400 font-NeueHaas text-sm">Time</p>
          </div>
        </div>
      </div>
      <Menu isActive={isActive} setActive={setActive} page={page} />
    </div>
  );
}

export default Navbar;
