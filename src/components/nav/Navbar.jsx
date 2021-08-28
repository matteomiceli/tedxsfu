import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../../static/images/logo.png";

import Menu from "../Menu";

function Navbar({ page }) {
  const [isActive, setActive] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-20 w-screen ">
      <div className="flex justify-between mx-document mt-document">
        <div className="flex items-start">
          <div className="w-axis">
            <Link to="/">
              <img
                className=""
                style={{
                  // offset the logo to make it look aligned
                  marginTop: -2,
                  width: 184,
                  height: 42,
                }}
                src={Logo}
                alt="TEDxSFU logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div
              className="flex flex-col px-2 justify-between border-l border-ted-red"
              style={{ height: 52 }}
            >
              <p
                className="text-white text-sm w-32"
                style={{ marginTop: 1, lineHeight: 1 }}
              >
                Anvil Theatre <br /> New Westminster
              </p>
              <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
                Location
              </p>
            </div>
            <div
              className="flex flex-col px-2 justify-between border-l border-ted-red"
              style={{ height: 52 }}
            >
              <p className="text-white text-3xl w-32 font-light">
                Nov 20<sup>th</sup>
              </p>
              <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
                Date
              </p>
            </div>
            <div
              className="flex flex-col px-2 justify-between border-l border-ted-red"
              style={{ height: 52 }}
            >
              <p className="text-white font-light text-3xl w-32">1-8 pm</p>
              <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
                Time
              </p>
            </div>
          </div>
        </div>
        <Menu isActive={isActive} setActive={setActive} page={page} />
      </div>
    </div>
  );
}

export default Navbar;
