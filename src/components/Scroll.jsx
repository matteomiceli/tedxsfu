import React, { useEffect, useState } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

function Scroll() {
  const [deltaVal, setDelta] = useState(0);
  const [width, setWidth] = useState(0);

  const handleScroll = ((e) => {
    setDelta(e.deltaY)
    e.currentTarget.scrollLeft +=deltaVal;

    // set width of page
    setWidth(e.currentTarget.getBoundingClientRect().right)
    console.log(e.currentTarget.getBoundingClientRect().right)
  });

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
  
    scrolls.push(<ScrollItem speaker={speaker} key={i} delta={deltaVal} width={width} />);
  }

  return (
			<div className="outer-scroll-container" onScroll={(e) => {console.log('scroll' + e.currentTarget.scrollLeft)}} onWheel={(e) => { handleScroll(e) }}>
				<div className="inner-scroll-container flex" >
					{scrolls}
				</div>
			</div>
  );
}

export default Scroll;
