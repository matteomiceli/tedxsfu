import React, { useEffect, useState, useRef } from "react";
import ScrollItem from "../components/ScrollItem";
import loadable from "@loadable/component";

import speakers from "../content/speakers";

function Scroll() {
  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0);

  const scrollRef = useRef();

  const handleScroll = ((e) => {
    e.preventDefault();
    setDelta(e.deltaY)
    
    
    // set width of page
    setWidth(e.currentTarget.scrollWidth - e.currentTarget.clientWidth)
    console.log(e.deltaY)
    console.log(scroll)
    console.log(width)
  });

  useEffect(() => {
    scrollRef.current.scrollLeft += deltaVal;
    setDelta(0);
  }, [deltaVal])
  
  const scrolls = [];
  
  for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
    scrolls.push(<ScrollItem speaker={speaker} key={i} delta={deltaVal} width={width} scroll={scroll} />);
  }

  return (
			<div ref={scrollRef} className="outer-scroll-container" onScroll={(e) => {setScroll(e.currentTarget.scrollLeft)}} onWheel={(e) => { handleScroll(e) }}>
				<div className="inner-scroll-container flex" >
					{scrolls}
				</div>
			</div>
  );
}

export default Scroll;
