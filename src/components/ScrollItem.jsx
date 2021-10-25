// import * as React from "react";
import React, { useState } from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";
import sponsors from "../content/sponsors";
import { motion, AnimatePresence } from "framer-motion";
import Image from "./Image";
import Button from "./Button";
import CloseIcon from "../static/images/icons/close.svg";
import SocialButton from "../components/SocialButton";
import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";

import PLAY_BUTTON from "../../static/images/icons/icon-play.svg";

// import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";
import GrowingTextAnimation from "../components/animation/GrowingTextAnimation";
import { SimpleDivAnimation } from "../components/animation/SimpleTransitionAnimation";

function ScrollItem({ speaker, width }) {
  return (
    <div
      // id={`speaker-${speaker.id}`}
      id={`${speaker.slug}`}
      className={`scroll-item relative h-full`}
      style={{
        scrollSnapAlign: "center",
      }}
    >
      {/* <Overlay delta={delta} width={width} scroll={scroll} /> */}
      <div className="mt-flowline-mobile ml-document absolute font-medium z-10">
        <h2
          className="text-3xl leading-8 lg:mt-speakerDesktop 2xl:ml-axis"
          style={{ maxWidth: "18ch" }}
        >
          <GrowingTextAnimation fontWeight={400}>
            {speaker.talkTitle}
          </GrowingTextAnimation>
        </h2>
        <SimpleDivAnimation>
          <h3
          className="mt-1 text-sm w-96 pt-2 leading-4 2xl:ml-axis">
          {speaker.name}
          <span className="md:w-96 w-48 opacity-60 block">{speaker.bio}</span>
          </h3>
          <div className="mt-1 text-sm w-96 mt-4 leading-4 2xl:ml-axis border-l-2 border-white p-0 pl-4 md:block hidden">
            {speaker.description}
            {/* {!speaker.videoReady && (
              <div className="mt-6 opacity-50">Interview Coming Soon</div>
            )} */}
          </div>
          <div className="md:hidden inline">
            <SpeakerDescription key={0} description={speaker.description} isMobile={true} />
          </div>
          <div
            staggerIndex={1}
            className="transform scale-75 sm:scale-100 origin-top-left 2xl:ml-axis"
          >
            {/* commented out video button for now */}
            {/* {speaker.videoReady && (
              <Button
                secondary
                icon={PLAY_BUTTON}
                className="mt-6 px-2"
                href={speaker.slug}
              >
                See Interview
              </Button>
            )} */}
          </div>
        </SimpleDivAnimation>
      </div>
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full z-0"
        initial={{
          opacity: 0,
          scale: 1.05,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: AnimationConfig.SLOW,
            ease: AnimationConfig.EASING,
          },
        }}
        exit={{
          opacity: 0,
          scale: 1.05,
          transition: {
            duration: AnimationConfig.NORMAL,
            ease: AnimationConfig.EASING_INVERTED,
          },
        }}
      >
        <Image
          src={speaker.img}
          width={2560}
          height={1706}
          className=" object-cover h-full w-full z-0"
        />
      </motion.div>
    </div>
  );
}

const SpeakerDescription = ({
  id,
  description,
  isMobile,
}) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <>
      <SpeakerInfoModal
        description={description}
        isShowing={isModalShowing}
        onExit={() => setIsModalShowing(false)}
      />
      <div className="flex flex-nowrap">
        <Button
          secondary
          icon={PLAY_BUTTON}
          className="mt-6 px-2"
          href="#"
          onClick={() => isMobile && setIsModalShowing(true)}
        >
          READ BIO
        </Button>
      </div>
    </>
  );
};

const SpeakerInfoModal = ({
  isShowing,
  onExit,
  description,
}) => {
  // for quick exiting
  const containerRef = useRef();
  useClickOutside(containerRef, () => isShowing && onExit(), isShowing);
  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className="fixed left-0 right-0 top-0 bottom-0 z-20 backdrop-filter backdrop-blur-lg cursor-pointer"
          style={{ backgroundColor: "rgba(0,0,0,.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={containerRef}
            className="gap-4 grid-cols-sponsorInfoModal sm:mx-auto mx-document mt-flowline-sm cursor-auto"
            style={{ maxWidth: 600 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: AnimationConfig.EASING,
                duration: AnimationConfig.NORMAL,
              },
            }}
            exit={{
              opacity: 0,
              y: 50,
              transition: {
                ease: AnimationConfig.EASING,
                duration: AnimationConfig.NORMAL,
              },
            }}
          >
            <CloseButton className="mcol-start-2" onClick={onExit} />
            <div className="text-xs mb-4 mt-10">{description}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CloseButton = (props) => (
  <a href="#" {...props}>
    {/* center the origin point */}
    <img src={CloseIcon} alt="close company info" />
  </a>
);

export default ScrollItem;
