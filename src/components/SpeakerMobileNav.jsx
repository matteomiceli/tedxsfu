import React from "react";

import speakers from "../content/speakers";

function SpeakerMobileNav({ width }) {
  let windowWidth;
  if (typeof document.window) {
    windowWidth = window.innerWidth / 2;
  } else {
    windowWidth = 149; 
  }
  

  
  return (
    <div className="absolute text-white text-4xl w-full bottom-20">
      <div className="mobile-speaker-container h-24 bg-ted-red flex overflow-x-scroll">
        <div className="mobile-panel-spacer bg-green-400 w-96"></div>
        {speakers.map(() => {
          return <SpeakerMobilePanel />
        })}
      </div>
    </div>
  );
}

export default SpeakerMobileNav;

function SpeakerMobilePanel() {
  return <div className="speaker-mobile-panel h-full bg-blue-400 z-10 mr-2"></div>;
}
