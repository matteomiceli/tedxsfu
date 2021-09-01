import React, { useRef, useState} from "react";

import speakers from "../content/speakers";

function SpeakerMobileNav({ spySpeaker, setSpeaker }) {
  
  const [navScroll, setNavScroll] = useState(0);

  if (typeof window === "undefined") {
    return <></>;
  }

  function handleScroll(e) {
    console.log(e.currentTarget.scrollLeft);

    // based on scroll left position we determine how many panels have been scrolled
  }

  const windowWidth = window.innerWidth / 2;

  return (
    <div className="absolute text-white text-4xl w-full bottom-20">
      <div
        onScroll={(e) => handleScroll(e)}
        className="mobile-speaker-container h-24 bg-ted-red flex overflow-x-scroll"
      >
        <div className="mobile-panel-spacer bg-green-400 w-96"></div>
        {speakers.map((speaker, i) => {
          return (
            <SpeakerMobilePanel
              speaker={speaker}
              i={i}
              spySpeaker={spySpeaker}
              setSpeaker={setSpeaker}
            />
          );
        })}
        <div className="mobile-panel-spacer bg-green-400 w-96"></div>
      </div>
    </div>
  );
}

export default SpeakerMobileNav;

function SpeakerMobilePanel({ spySpeaker, setSpeaker, speaker, i }) {
  return (
    <div
      className={`${
        spySpeaker === i + 1 ? "panel-active" : "panel-notactive"
      } speaker-mobile-panel h-full bg-blue-400 z-10 mr-1`}
    ></div>
  );
}
