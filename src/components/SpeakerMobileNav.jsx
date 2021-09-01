import React, { useRef, useState, useEffect} from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";

function SpeakerMobileNav({ spySpeaker, setSpeaker, scroll, setScroll }) {
  
  const [navScroll, setNavScroll] = useState(0);

  useEffect(() => {
    let panelWidth = 76;
    let speakerPos = navScroll / panelWidth;
    setSpeaker(parseInt(speakerPos + 1))
    console.log();

  }, [navScroll]);

  useEffect(() => {
    scrollTo(`#scroll-${`speaker${spySpeaker}`}`);
  }, [spySpeaker])

  function handleScroll(e) {
    setNavScroll(e.currentTarget.scrollLeft);
  }

  // if (typeof window === "undefined") {
  //   return <></>;
  // }

  // const windowWidth = window.innerWidth / 2;

  return (
    <div className="absolute text-white text-4xl w-full bottom-20">
      <div
        onScroll={(e) => handleScroll(e)}
        className="mobile-speaker-container h-24 bg-transparent flex overflow-x-scroll"
      >
        <div className="mobile-panel-spacer bg-transparent w-96"></div>
        {speakers.map((speaker, i) => {
          return (
            <SpeakerMobilePanel
              speaker={speaker}
              key={i}
              i={i}
              spySpeaker={spySpeaker}
              setSpeaker={setSpeaker}
            />
          );
        })}
        <div className="mobile-panel-spacer bg-transparent w-96"></div>
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
      } speaker-mobile-panel mobile-speaker${i + 1} h-full bg-blue-400 z-10 mx-0.5`}
    ></div>
  );
}
