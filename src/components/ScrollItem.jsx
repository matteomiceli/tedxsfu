import * as React from "react";
import Overlay from "./Overlay";
import loadable from "@loadable/component";

import Image from "./Image";
import Button from "./Button";

import PLAY_BUTTON from "../../static/images/icons/icon-play.svg";

import { motion } from "framer-motion";
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
          <h3 className="mt-2 text-sm 2xl:ml-axis">{speaker.name}</h3>
          <div className="mt-1 text-sm w-48 leading-4 opacity-60 2xl:ml-axis">
            {speaker.bio}
            {!speaker.videoReady && (
              <div className="mt-6 opacity-50">Interview Coming Soon</div>
            )}
          </div>
          <div
            staggerIndex={1}
            className="transform scale-75 sm:scale-100 origin-top-left 2xl:ml-axis"
          >
            {speaker.videoReady && (
              <Button
                secondary
                icon={PLAY_BUTTON}
                className="mt-6 px-2"
                href={speaker.slug}
              >
                See Interview
              </Button>
            )}
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

export default ScrollItem;
