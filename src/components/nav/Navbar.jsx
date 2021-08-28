import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../../static/images/logo.png";

import Menu from "../Menu";
import EventInfo from "./EventInfo";

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
          <EventInfo />
        </div>
        <Menu isActive={isActive} setActive={setActive} page={page} />
      </div>
    </div>
  );
}

export default Navbar;
