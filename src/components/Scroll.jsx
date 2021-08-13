import * as React from "react";
import ScrollItem from "../components/ScrollItem";
import Overlay from "./Overlay";
import { ParallaxProvider } from "react-scroll-parallax";

const speakers = [
  {
    speaker: "Test Name",
    img: "speaker1",
  },
  {
    speaker: "Test 2",
    img: "speaker2",
  },
  {
    speaker: "Test 3",
    img: "speaker3",
  },
];

const scrolls = [];

for (let i = 0; i < speakers.length; i++) {
  const speaker = speakers[i];

  scrolls.push(<ScrollItem speaker={speaker} key={i} />);
}

function Scroll() {
  return (
			<div className="outer-scroll-container">
				<div className="inner-scroll-container flex flex-nowrap">
					{scrolls}
				</div>
			</div>
  );
}

export default Scroll;
