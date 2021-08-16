import * as React from "react";

import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  const offset = (e) => {
    e.preventDefault();
    console.log(e.deltaX)
  }

  return (
    <div onWheel={() => console.log(window.pageYOffset)}>
      <Navbar page={1} />
      <Scroll />
    </div>
  );
};

export default IndexPage;
