import React, { useRef, useState, useEffect } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";

function SpeakerMobileNav({
  spySpeaker,
  setSpeaker,
  scroll,
  setScroll,
  scrollRef,
}) {
  const navRef = useRef();
  const [navScroll, setNavScroll] = useState(0);
  // get width and scroll position of speaker scroll container
  const container = () => {
    if (scrollRef !== undefined && typeof window !== undefined) {
      return {
        width: scrollRef.current.scrollWidth - window.innerWidth,
      };
    }
  };

  useEffect(() => {
    let panelWidth = 76;
    let speakerPos = navScroll / panelWidth;
    setSpeaker(parseInt(speakerPos + 1));

    // set position of scroll container to match spied speaker
    const speakerPanelWidth = container().width / (speakers.length - 1);
    scrollRef.current.scrollLeft =
      speakerPanelWidth * spySpeaker - speakerPanelWidth;

  }, [navScroll]);

  useEffect(() => {
    // update spyspeaker when container is scrolled to speaker
    const speakerPanelWidth = container().width / (speakers.length - 1);
    let speakerPos = parseInt(scroll / speakerPanelWidth) + 1;
    console.log(speakerPos)
    setSpeaker(speakerPos);

  }, [scroll]);

  function handleScroll(e) {
    setNavScroll(e.currentTarget.scrollLeft);
  }

  return (
    <div className="absolute text-white text-4xl w-full bottom-20">
      <div
        ref={navRef}
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
      } speaker-mobile-panel mobile-speaker${
        i + 1
      } h-full bg-blue-400 z-10 mx-0.5`}
    ></div>
  );
}
