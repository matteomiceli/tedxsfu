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
  setScroll,
}) {
  // handles smooth scroll function and sets speaker on click
  const handleNavClick = (e) => {
    scrollTo(`#scroll-${speaker.img}`);
    setSpeaker(speaker.i);
  };

  // changes focus when div scrolled into view
  useEffect(() => {
    let speakerWidth = width / speakers.length;
    let speakerPos = scroll / speakerWidth;

    if (scroll != 0) {
      setSpeaker(parseInt(speakerPos) + 1);
    }

    // if at end, spy last speaker (addresses bug at final scrollPos)
    if (scroll === width && scroll != 0) {
      setSpeaker(speakers.length);
    }
  }, [scroll, width]);

  return (
    <button
      onClick={(e) => handleNavClick(e)}
      className={
        isActive
          ? `panel-${speaker.img} h-full w-full mx-1 ${
              spySpeaker === speaker.i ? "panel-active" : "panel-notactive"
            }`
          : `panel-${speaker.img} h-full w-full mx-1 opacity-50 ${
              spySpeaker === speaker.i ? "panel-active" : "panel-notactive"
            }`
      }
    ></button>
  );
}

export default NavPanels;
