import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationConfig } from "../../AnimationConfig";
import VideoControlBar from "./VideoControlBar";

import { clamp } from "../../utils/util";

import Button from "../Button";
import ICON_MUTED from "../../../static/images/icons/icon-muted--black.svg";
import Subtitle from "./Subtitle";

import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

// load quality footages first before

//@ts-check
const VideoPlayer = ({
  src,
  mutedAutoPlay = true,
  control = true,
  keyboardInput = true,
  loop = false,
  className,
  subtitleSrc,
  videoSrc,
  onEnded,
}) => {
  const videoRef = useRef();

  const [currentTime, setCurrentTime] = useState(0);
  const [targetTime, setTargetTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  //TODO: muting the auto video for testing
  // const fullHDSourceURL = `${src}@1920.mp4`;
  // const subtitleURL = `${src}.srt`;

  const fullHDSourceURL = videoSrc || `${src}@1920`;
  const subtitleURL = subtitleSrc || `${src}/caption`;

  // Handling the muting of the player
  useEffect(() => {
    const video = videoRef.current;

    // detect if the player is muted by the user
    const handleMute = () =>
      (video.isMuted || video.volume === 0) && setIsMuted(true);
    video.addEventListener("volumechage", handleMute);

    return () => {
      video.removeEventListener("volumechange", handleMute);
    };
  }, [isMuted]);

  useEffect(() => {
    // update progress
    // if (videoRef.current.fastSeek) {
    //   videoRef.current.fastSeek(targetTime);
    //   return;
    // }
    videoRef.current.currentTime = targetTime;
  }, [targetTime]);

  /**
   * Play/pause
   */
  useEffect(() => {
    if (isPlaying) {
      console.log("play");
      videoRef.current.play();
      return;
    }
    console.log("pause");
    videoRef.current.pause();
  }, [isPlaying]);

  const updateFrameState = () => {
    // update frame state
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleCanPlay = () => {
    const videoElm = videoRef.current;
    setCurrentTime(videoElm.currentTime);
    setDuration(videoElm.duration);
    setCanPlay(true);
  };

  /**
   * handling keyboard navigation
   */
  useEffect(() => {
    if (!keyboardInput) return;

    // use left to seek left
    function handleKeyStroke(e) {
      const KEYBOARD_TIME_CHANGE = 5; // 5 seconds

      switch (e.code) {
        case "Space":
          // toggle input
          setIsPlaying(!isPlaying);
          break;
        case "ArrowLeft":
          // seek 5 seconds before
          const backwardTime = clamp(
            videoRef.current.currentTime - KEYBOARD_TIME_CHANGE,
            0,
            duration
          );
          setTargetTime(backwardTime);
          break;
        case "ArrowRight":
          // seek 5 seconds after
          const forwardTime = clamp(
            videoRef.current.currentTime + KEYBOARD_TIME_CHANGE,
            0,
            duration
          );
          setTargetTime(forwardTime);
          break;
      }
    }

    window.addEventListener("keydown", handleKeyStroke);

    return () => {
      window.removeEventListener("keydown", handleKeyStroke);
    };
  }, [keyboardInput, isPlaying, duration, currentTime]);

  /**
   * handling seeking behaviour
   */

  const handleSeekBegin = () => {
    console.log("seek begin");
    setIsPlaying(false);
  };

  const handleSeekChange = (progress) => {
    progress = clamp(progress, 0, 1);

    console.log(progress * duration);
    setTargetTime(progress * duration);
    setCurrentTime(progress * duration);
    setIsPlaying(false);
  };
  const handleSeekEnd = () => {
    console.log("seek end");
    setIsPlaying(true);
  };

  return (
    <motion.div
      className={"relative " + className}
      initial={{
        opacity: 0,
        scale: 1.05,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: AnimationConfig.SLOW,
          ease: AnimationConfig.EASING_SOFT,
        },
      }}
      exit={{
        opacity: 0,
        scale: 1.1,
        transition: {
          duration: AnimationConfig.NORMAL,
          ease: AnimationConfig.EASING_INVERTED,
        },
      }}
    >
      <AnimatePresence>
        {isMuted && canPlay && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex z-10"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: AnimationConfig.NORMAL,
                ease: AnimationConfig.EASING,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              transition: {
                duration: AnimationConfig.NORMAL,
                ease: AnimationConfig.EASING_INVERTED,
              },
            }}
          >
            <Button
              className="mx-auto mb-36"
              onClick={() => {
                setIsMuted(false);
                setIsPlaying(true);
              }}
              icon={ICON_MUTED}
              primary
            >
              Unmute
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute left-0 right-0 top-0 bottom-0 flex pointer-events-none">
        <LoadingSpinner show={!canPlay} className="mx-auto my-auto" />
      </div>
      {control && canPlay && (
        <VideoControlBar
          currentTime={currentTime}
          isPlaying={isPlaying}
          duration={duration}
          onSeekBegin={handleSeekBegin}
          onSeekEnd={handleSeekEnd}
          onSeekChange={handleSeekChange}
          onTogglePlay={() => canPlay && setIsPlaying(!isPlaying)}
        />
      )}
      <motion.div
        className="absolute bottom-52 left-0 right-0 z-10"
        animate={{
          y: isMuted ? 0 : "4rem",
          transition: {
            ease: AnimationConfig.EASING,
            duration: AnimationConfig.NORMAL,
            delay: 0.4,
          },
        }}
      >
        <Subtitle
          src={subtitleURL}
          currentTime={currentTime}
          duration={duration}
        />
      </motion.div>
      <motion.video
        ref={videoRef}
        onClick={() => setIsPlaying(!isPlaying)}
        onCanPlay={handleCanPlay}
        onEnded={onEnded}
        onTimeUpdate={updateFrameState}
        className="absolute w-full h-full object-cover mt-auto mb-auto"
        width="1920"
        height="1080"
        loop={loop}
        muted={isMuted}
        autoPlay={mutedAutoPlay}
        preload={true}
        playsInline={true}
        disablePictureInPicture
        initial={{ opacity: 0 }}
        animate={{ opacity: canPlay ? 1 : 0 }}
      >
        <source src={fullHDSourceURL} type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};

export default VideoPlayer;
