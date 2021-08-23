import React, { useState } from "react";

import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

const IndexPage = () => {
  // speaker focus
  const [spySpeaker, setSpeaker] = useState(1); 
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0);

  return (
    <div className="bg-black">
      <Navbar page={1} />
      <Scroll
        spySpeaker={spySpeaker}
        setSpeaker={setSpeaker}
        scroll={scroll}
        setScroll={setScroll}
        width={width}
        setWidth={setWidth}
      />
      <Navigation
        spySpeaker={spySpeaker}
        setSpeaker={setSpeaker}
        scroll={scroll}
        setScroll={setScroll}
        width={width}
        setWidth={setWidth}
      />
    </div>
  );
};

export default IndexPage;
