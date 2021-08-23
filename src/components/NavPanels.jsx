import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

function NavPanels({ isActive, speaker, speakerState }) {
  const handleNavClick = (e) => {
    scrollTo(`#scroll-${speaker.img}`);
    speakerState.setSpeaker(speaker.i);
  }

  return (
    <button
      onClick={(e) => handleNavClick(e)}
      className={
        isActive
          ? `panel-${speaker.img} h-full w-full mx-1`
          : `panel-${speaker.img} h-full w-full mx-1 opacity-50`
      }
    ></button>
  );
}

export default NavPanels;
