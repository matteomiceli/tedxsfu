import React, { useEffect, useState } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

function Scroll() {
  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0)

  const handleScroll = ((e) => {
    setDelta(e.deltaY)
    e.currentTarget.scrollLeft +=deltaVal;
    console.log(e.currentTarget.scrollLeft)

    // set width of page
    setWidth(e.currentTarget.getBoundingClientRect().right)
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
    {
      speaker: '',
      img: ''
    }
  ];
  
  const scrolls = [];
  
  for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
  
    scrolls.push(<ScrollItem speaker={speaker} key={i} delta={deltaVal} width={width} scroll={scroll} />);
  }

  return (
			<div className="outer-scroll-container" onScroll={(e) => {setScroll(e.currentTarget.scrollLeft); console.log(scroll)}} onWheel={(e) => { handleScroll(e) }}>
				<div className="inner-scroll-container flex" >
					{scrolls}
				</div>
			</div>
  );
}

export default Scroll;
