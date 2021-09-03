import React, { useRef, useState, useEffect} from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import speakers from "../content/speakers";

function SpeakerMobileNav({ spySpeaker, setSpeaker, scroll, setScroll, scrollRef }) {
  
  const [navScroll, setNavScroll] = useState(0);
  
  useEffect(() => {
    let panelWidth = 76;
    let speakerPos = navScroll / panelWidth;
    setSpeaker(parseInt(speakerPos + 1))
    console.log(spySpeaker);
  }, [navScroll]);

  useEffect(() => {
    // scrollTo(`#scroll-speaker${spySpeaker}`);
    const container = () => {
      if (scrollRef !== undefined && typeof window !== undefined) {
        return {
          width : scrollRef.current.scrollWidth - window.innerWidth,
          scroll : scrollRef.current.scrollLeft
        }
      }
    }

    // set position of scroll container to match spied speaker
    const speakerPanelWidth = container().width / (speakers.length - 1);
    scrollRef.current.scrollLeft = (speakerPanelWidth * spySpeaker) - speakerPanelWidth;

    console.log('scroll' + container().scroll)
    console.log(speakerPanelWidth * spySpeaker)
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
