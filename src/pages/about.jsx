import React, { useRef, useEffect, useState } from "react";
import { motion, useElementScroll, useTransform } from "framer-motion";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";

// import assets
import IMAGE_1 from "../../static/images/about-page-assets/past-conference.jpg";
import IMAGE_2 from "../../static/images/about-page-assets/past-conference-2.jpg";

const About = () => {
  const scrollContainerRef = useRef();
  const videoRef = useRef();
  const { scrollXProgress } = useElementScroll(scrollContainerRef);
  // const videoParallaxOffset = useTransform(scrollXProgress, (val) => val * 500);

  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (!isVideoReady) return;

    const videoScrollLength = 1;
    const totalVideoTime = videoRef.current.duration;
    const videoFpsLimit = 12;

    const updateVideoFrame = (val) => {
      const progress = Math.min(val / videoScrollLength, 1); // clamp the value between 0 and 1

      // update video frame using fast seek if possible
      if (videoRef.current.fastSeek) {
        videoRef.current.fastSeek(progress * totalVideoTime);
        return;
      }

      videoRef.current.currentTime = progress * totalVideoTime;
    };

    let lastUpdate = Date.now();
    const handleScrollPositionChange = (val) => {
      // don't process update if the video is finished
      if (val > videoScrollLength) return;

      // rate limit the update to prevent overwhelming the hardware
      const currentUpdate = Date.now();
      if (currentUpdate - lastUpdate < 1000 / videoFpsLimit) return;

      updateVideoFrame(val);
      lastUpdate = currentUpdate;
    };

    scrollXProgress.onChange(handleScrollPositionChange);
  }, [isVideoReady]);

  return (
    <HorizontalScrollContainer ref={scrollContainerRef}>
      <div className="flex flex-nowrap fluid-from-screen-sm fluid-to-screen-md">
        {/* landing hero container */}
        <section
          className="flex-shrink-0 relative w-screen h-screen"
          style={{ minWidth: "72rem" }}
        >
          {/* Headline */}
          <motion.h1
            className="relative z-10 ml-document pr-6 w-screen text-5xl to-text-6xl font-light"
            style={{
              paddingTop: "28vh",
              maxWidth: "18ch",
            }}
          >
            TEDxSFU Bloom embraces the struggles we all face on our journey to
            grow.
          </motion.h1>
          {/* blurb overlay */}
          <div className="absolute -right-32 2xl:right-64 bottom-48 2xl:bottom-64 mb-0 z-10 w-64 md:w-72">
            <h2 className="text-2xl to-text-3xl mb-4 font-light">
              About Bloom
            </h2>
            <p className="text-base">
              Our current situation, individually and collectively, is nothing
              less than a bud sprouting out of a plant in the hopes to bloom
              against every odd symbolizing resilience.
            </p>
          </div>
          {/* landing video container */}
          <div className="absolute left-0 top-0 right-0 bottom-0 z-0">
            {/* container that control the video sizes using padding and margins */}
            <div className="flex w-full h-full mx-document pb-28 pt-48 pl-32 md:pl-axis 2xl:pr-axis">
              <motion.video
                onLoadedMetadata={() => setIsVideoReady(true)}
                style={
                  {
                    // x: videoParallaxOffset,
                  }
                }
                ref={videoRef}
                className="min-w-96 w-full h-full object-cover"
                width="1920"
                height="1080"
                // autoPlay
                muted
                disablePictureInPicture
                loop
              >
                <source
                  src="/videos/bloom-reveal-low-fps.mp4"
                  type="video/mp4"
                />
              </motion.video>
            </div>
          </div>
        </section>

        {/* 2nd page */}
        <section
          className="flex-shrink-0 flex flex-col justify-end h-screen ml-48 lg:ml-64 2xl:-ml-24 pb-28 pt-32 z-10"
          style={{
            maxWidth: "26rem",
          }}
        >
          <p className="text-base mt-32 w-96">
            This year, TEDxSFU invites people with different backgrounds,
            domains and expertise to share their stories of resilience in the
            face of uncertainty, of initiatives reaching maturity, of new
            beginnings when all you see and feel is ambiguity.
          </p>
          {/* Call out box */}
          <p className="text-3xl mt-8 w-short-line opacity-50 font-light">
            “Bloom means to flourish, to mature into achievement of one’s
            potential.”
          </p>
          <img
            className="flex-shrink flex-grow mt-8 object-cover"
            src={IMAGE_1}
            alt="woman dancing on stage"
          />
        </section>

        {/* 3nd page */}
        <section className="flex-shrink-0 h-screen flex flex-col ml-8 pb-28 pr-32">
          <div
            className="flex-shrink-0 flex-grow w-full"
            style={{
              backgroundImage: `url(${IMAGE_2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
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
        </section>
      </div>
    </HorizontalScrollContainer>
  );
};

export default About;
