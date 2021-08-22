import * as React from "react";

import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

const IndexPage = () => {


  return (
    <div>
      <Navbar page={1} />
      <Scroll />
      <Navigation />
    </div>
  );
};

export default IndexPage;
