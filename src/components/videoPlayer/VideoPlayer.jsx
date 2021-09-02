import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationConfig } from "../../AnimationConfig";
import SeekBar from "./SeekBar";

// load quality footages first before

//@ts-check
const VideoPlayer = ({ src, autoPlay = true, control = true }) => {
  const videoRef = useRef();

  const [currentTime, setCurrentTime] = useState(0);
  const [targetTime, setTargetTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // update progress
    if (videoRef.current.fastSeek) {
      videoRef.current.fastSeek(targetTime);
      return;
    }
    videoRef.current.currentTime = targetTime;
  }, [targetTime]);

  function attemptPlay() {
    try {
      videoRef.current.play();
    } catch (e) {
      // setTimeout(attemptPlay, 1000);
    }
  }

  useEffect(() => {
    if (isPlaying) {
      console.log("play");
      attemptPlay();
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
    // setIsPlaying(autoPlay);
  };

  const handleSeekBegin = () => {
    console.log("seek bgin");
    setIsPlaying(false);
  };

  const handleSeekChange = (progress) => {
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
      className="relative flex"
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
      {control && (
        <SeekBar
          currentTime={currentTime}
          duration={duration}
          onSeekBegin={handleSeekBegin}
          onSeekEnd={handleSeekEnd}
          onSeekChange={handleSeekChange}
        />
      )}
      <motion.video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        onTimeUpdate={updateFrameState}
        className="w-full object-cover mt-auto mb-auto"
        width="1920"
        height="1080"
        loop
        muted
        autoPlay={autoPlay}
        preload
      >
        <source src={src} type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};

export default VideoPlayer;
