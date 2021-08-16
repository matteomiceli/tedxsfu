import React, { useEffect } from "react";
import ScrollItem from "../components/ScrollItem";
import Overlay from "./Overlay";

function Scroll() {

  const handleScroll = ((e, target) => {
    let delta = e.deltaY;
    console.log(delta);
    e.scrollLeft += delta;
  });

  useEffect(() => {
    const scroll = document.querySelector('.outer-scroll-container');
    scroll.addEventListener('scroll', handleScroll(scroll));
  })

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

  return (
			<div className="outer-scroll-container" onScroll={(e) => handleScroll}>
				<div className="inner-scroll-container flex" >
					{scrolls}
				</div>
			</div>
  );
}

export default Scroll;
