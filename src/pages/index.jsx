import React, { useState } from "react";

import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

const IndexPage = () => {
  const [spySpeaker, setSpeaker] = useState(1);

  return (
    <div className="bg-black">
      <Navbar page={1} speaker={ [spySpeaker, setSpeaker] } />
      <Scroll />
      <Navigation speakerState={ [spySpeaker, setSpeaker] } />
    </div>
  );
};

export default IndexPage;
