import React, { useEffect } from "react";
import ScrollItem from "../components/ScrollItem";
import Overlay from "./Overlay";

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
  
  // const scroll1 = document.querySelector('.scroll-speaker1')
  // return scroll1.getBoundingClientRect().left

function Scroll() {
  useEffect(() => {
    const scroll = document.querySelector('.outer-scroll-container');
    scroll.addEventListener('wheel', (e) => {
      let delta = e.deltaY;
      scroll.scrollLeft += delta;
    })
  })

  return (
			<div className="outer-scroll-container">
				<div className="inner-scroll-container flex" >
					{scrolls}
				</div>
			</div>
  );
}

export default Scroll;
