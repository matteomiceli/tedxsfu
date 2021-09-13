import React, { useRef, useEffect, useState } from "react";
import { motion, useElementScroll, useTransform } from "framer-motion";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";

import Image from "../components/Image";

// import assets
import GrowingTextAnimation from "../components/animation/GrowingTextAnimation";
import { AnimationConfig } from "../AnimationConfig";
import {
  SimpleDivAnimation,
  SimpleSectionAnimation,
} from "../components/animation/SimpleTransitionAnimation";
import { breakpoints } from "../hooks/useBreakpoint";

const About = () => {
  const scrollContainerRef = useRef();
  const heroSectionContainerRef = useRef();
  const videoRef = useRef();
  const { scrollXProgress, scrollX } = useElementScroll(scrollContainerRef);
  const videoParallaxOffset = useTransform(scrollX, (val) => val / 3.25);

  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (!isVideoReady) {
      // force firefox to load video
      videoRef.current.load();
      return;
    }

    const videoScrollLength = 1;
    const totalVideoTime = videoRef.current.duration * 0.52;
    const videoFpsLimit = 12;

    let currentVideoProgress = 0;

    const updateVideoFrame = () => {
      videoRef.current.currentTime = currentVideoProgress * totalVideoTime;
    };

    let lastUpdate = Date.now();
    let finalUpdateTimer;
    const handleScrollPositionChange = (scrollX) => {
      const videoCompleteWidth =
        heroSectionContainerRef.current.getBoundingClientRect().width * 0.6;
      const progress =
        Math.min(scrollX, videoCompleteWidth) / videoCompleteWidth;

      // don't process update if the video is finished
      if (progress > videoScrollLength) return;

      // change the curent progres value base on val
      currentVideoProgress = Math.min(progress / videoScrollLength, 1); // clamp the value between 0 and 1;

      // rate limit the update to prevent overwhelming the hardware
      const currentUpdate = Date.now();
      const frameUpdateInterval = 1000 / videoFpsLimit;

      // for that extra frame
      if (finalUpdateTimer) clearTimeout(finalUpdateTimer);
      finalUpdateTimer = setTimeout(updateVideoFrame, frameUpdateInterval);

      if (currentUpdate - lastUpdate < frameUpdateInterval) return;

      requestAnimationFrame(updateVideoFrame);
      lastUpdate = currentUpdate;
    };

    scrollX.onChange(handleScrollPositionChange);
  }, [isVideoReady]);

  return (
    <HorizontalScrollContainer ref={scrollContainerRef} className="h-full">
      <div className="flex flex-nowrap fluid-from-screen-sm fluid-to-screen-md w-screen h-full">
        {/* landing hero container */}
        <section
          ref={heroSectionContainerRef}
          className="flex-shrink-0 relative w-screen h-full"
          style={{ minWidth: "72rem" }}
        >
          {/* Headline */}
          <h1
            className="relative z-10 ml-document pr-6 w-full text-5xl to-text-6xl font-light"
            style={{
              paddingTop: "28vh",
              width: "17ch",
            }}
          >
            {/* <GrowingTextAnimation fontWeight={600} delay={0.1}>
              TEDxSFU Bloom
            </GrowingTextAnimation> */}
            <GrowingTextAnimation>
              TEDxSFU Bloom embraces the struggles we all face on our journey to
              grow.
            </GrowingTextAnimation>
          </h1>

          {/* blurb overlay */}
          <SimpleDivAnimation
            staggerIndex={1}
            className="absolute -right-32 2xl:right-64 bottom-48 2xl:bottom-64 mb-0 z-20 w-64 md:w-72"
          >
            <h2 className="text-2xl to-text-3xl mb-4 font-light">
              About Bloom
            </h2>
            <p className="text-base">
              Our current situation, individually and collectively, is nothing
              less than a bud sprouting out of a plant in the hopes to bloom
              against every odd symbolizing resilience.
            </p>
          </SimpleDivAnimation>

          {/* landing video container */}
          <div className="absolute w-full h-full left-0 top-0 right-0 bottom-0 z-0">
            {/* container that control the video sizes using padding and margins */}
            <div className="flex w-full h-full mx-document pb-28 pt-48 pl-32 md:pl-axis 2xl:pr-axis">
              <motion.video
                onLoadedMetadata={() => setIsVideoReady(true)}
                ref={videoRef}
                className="min-w-96 w-full h-full object-cover"
                style={{ x: videoParallaxOffset }}
                initial={{ opacity: 0, scale: 0.95, x: 40 }}
                animate={{
                  scale: 1,
                  x: 0,
                  opacity: isVideoReady ? 1 : 0,
                  transition: {
                    duration: AnimationConfig.NORMAL,
                    transition: AnimationConfig.EASING,
                  },
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                  transition: {
                    duration: AnimationConfig.NORMAL,
                    transition: AnimationConfig.EASING_INVERTED,
                  },
                }}
                // autoPlay
                width="1920"
                height="1080"
                autobuffer="true"
                preload="true"
                muted="true"
                disablePictureInPicture="true"
                loop="true"
                playsinline="true"
              >
                {/* <source
                  src="/videos/bloom-reveal-low-fps.mp4"
                  type="video/mp4"
                /> */}
                <source
                  src="https://www.sfu.ca/~kkl64/tedxsfu/bloom-reveal-low-fps.mp4"
                  type="video/mp4"
                />
              </motion.video>
            </div>
          </div>
        </section>

        {/* 2nd page */}
        <SimpleSectionAnimation
          className="flex-shrink-0 z-10 flex flex-col justify-end h-full ml-48 lg:ml-64 2xl:-ml-24 pb-28 pt-32"
          style={{
            maxWidth: "26rem",
          }}
          staggerIndex={0}
        >
          <p className="text-base mt-0 to-mt-32 fluid-from-screen-md fluid-to-screen-xl w-80">
            This year, TEDxSFU invites people with different backgrounds,
            domains and expertise to share their stories of resilience in the
            face of uncertainty, of initiatives reaching maturity, of new
            beginnings when all you see and feel is ambiguity.
          </p>
          {/* Call out box */}
          <blockquote className="text-3xl mt-8 w-short-line opacity-50 font-light hanging-punctuation">
            “Bloom means to flourish, to mature into achievement of one’s
            potential.”
          </blockquote>
          <div className="flex-shrink-1 flex-grow mt-8 w-full relative">
            <Image
              className="absolute w-full h-full object-cover"
              src="/images/about-page-assets/past-conference.jpg"
              alt="woman dancing on stage"
            />
          </div>
        </SimpleSectionAnimation>

        {/* 3nd page */}
        <SimpleSectionAnimation className="flex-shrink-0 h-full flex flex-col ml-8 pb-28 pr-32">
          <div className="flex-shrink-0 flex-grow w-full relative">
            <Image
              src="/images/about-page-assets/past-conference-2.jpg"
              className="absolute w-full h-full object-cover"
              halfBreakpoint={breakpoints.sm}
            />
          </div>
          {/* <img
            className="col-span-2 flex-shrink-0 w-full object-cover"
            src={IMAGE_2}
            alt=""
          /> */}
          <div className="flex flex-grow-1 flex-row mt-8 pr-32">
            <div className="flex flex-col">
              <h2 className="text-2xl font-light">About TEDx</h2>
              <p className="text-base w-80 mt-4">
                TEDx is a grassroots initiative, created in the spirit of TED’s
                overall mission to research and discover “ideas worth
                spreading.” TEDx brings the spirit of TED to local communities
                around the globe through TEDx events. These events are organized
                by passionate individuals who seek to uncover new ideas and to
                share the latest research in their local areas that spark
                conversations in their communities. TEDx events include live
                speakers and recorded TED Talks, and are organized independently
                under a free license granted by TED.
              </p>
            </div>
            <div className="ml-8">
              <h2 className="text-2xl font-light">About TED</h2>
              <p className="text-base w-80 mt-4">
                TED is a nonprofit devoted to spreading ideas, usually in the
                form of short, powerful talks (18 minutes or less). TED began in
                1984 as a conference where Technology, Entertainment and Design
                converged, and today covers almost all topics — from science to
                business to global issues — in more than 100 languages.
                Meanwhile, independently run TEDx events help share ideas in
                communities around the world.
              </p>
            </div>
          </div>
        </SimpleSectionAnimation>
      </div>
    </HorizontalScrollContainer>
  );
};

export default About;
