import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";

function NavPanels({
  isActive,
  speaker,
  setSpeaker,
  spySpeaker,
  width,
  setWidth,
  scroll,
  setScroll
}) {
  
  const [isFocus, setFocus] = useState(false);

  const handleNavClick = (e) => {
    scrollTo(`#scroll-${speaker.img}`);
    setSpeaker(speaker.i);
  };

  // sets clicked element to in focus when speaker changes
  // useEffect(() => {
  //   if (speaker.i === spySpeaker) {
  //     setFocus(true);
  //   } else {
  //     setFocus(false);
  //   }
  // }, [spySpeaker]);

  // changes focus when div scrolled into view
  useEffect(() => {
    let speakerWidth = width / speakers.length;
    let speakerPos = scroll / speakerWidth;

    // if (parseInt(speakerPos) === speaker.i) {
    //   setSpeaker(speakerPos + 1);
    // }

    setSpeaker(parseInt(speakerPos) + 1);
    console.log(speakerPos)
  }, [scroll])

  return (
    <button
      onClick={(e) => handleNavClick(e)}
      className={
        isActive
          ? `panel-${speaker.img} h-full w-full mx-1 ${spySpeaker === speaker.i ? 'panel-active' : 'panel-notactive'}`
          : `panel-${speaker.img} h-full w-full mx-1 opacity-50 ${spySpeaker === speaker.i ? 'panel-active' : 'panel-notactive'}`
      }
    ></button>
  );
}

export default NavPanels;
