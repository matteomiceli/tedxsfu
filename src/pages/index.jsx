import * as React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <div>
        <Navbar page={1} />
        <Scroll />
      </div>
    </ParallaxProvider>
  );
};

export default IndexPage;
