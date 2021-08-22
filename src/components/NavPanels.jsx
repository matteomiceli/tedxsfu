import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

function NavPanels({ isActive, speaker }) {
  return (
    <button onClick={() => scrollTo(`#scroll-${speaker.img}`)} className={isActive ? `panel-${speaker.img} h-full w-full mx-1` : `panel-${speaker.img} h-full w-full mx-1 opacity-50`}>
      hi
    </button>
  );
}

export default NavPanels;
