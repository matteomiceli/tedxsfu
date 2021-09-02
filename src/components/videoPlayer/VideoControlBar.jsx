import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../../AnimationConfig";
import PlayButton from "./PlayButton";

const HIDE_TIMEOUT = 4000;

const VideoControlBar = ({
  currentTime,
  duration,
  isPlaying,
  onSeekBegin,
  onSeekEnd,
  onSeekChange,
  onTogglePlay,
}) => {
  // second total seconds in bar
  const [isHidden, setIsHidden] = useState(false);
  const [isHoveringSeek, setIsHoveringSeek] = useState(false);

  useEffect(() => {
    let hideTimer = setTimeout(hideBar, HIDE_TIMEOUT);

    function handleMouseMove() {
      setIsHidden(false);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(hideBar, HIDE_TIMEOUT);
    }

    function hideBar() {
      setIsHidden(true);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 z-10"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          ease: AnimationConfig.EASING,
          duration: AnimationConfig.NORMAL,
        },
      }}
      exit={{
        y: 100,
        opacity: 0,
        transition: {
          ease: AnimationConfig.EASING_INVERTED,
          duration: AnimationConfig.FAST,
        },
      }}
      onMouseEnter={() => {
        console.log("enter");
        setIsHoveringSeek(true);
      }}
      onMouseLeave={() => setIsHoveringSeek(false)}
    >
      <motion.div
        className="pb-24 mx-document lg:mx-axis flex flex-row items-center"
        animate={{
          opacity: isHidden ? 0 : 1,
        }}
      >
        {/* the center align module */}
        <motion.div
          className="mr-4 w-10 text-center select-none flex"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHoveringSeek ? 1 : 0.6,
            transition: {
              duration: AnimationConfig.FAST,
              ease: AnimationConfig.EASING,
            },
          }}
        >
          {/* {secToTimeString(currentTime)} */}
          <PlayButton
            className="my-auto"
            onClick={onTogglePlay}
            isPlaying={isPlaying}
          />
        </motion.div>
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          isHovering={isHoveringSeek}
          onSeekBegin={onSeekBegin}
          onSeekEnd={onSeekEnd}
          onSeekChange={onSeekChange}
        />
        <motion.div
          className="ml-4 w-10 text-center align-middle pt-1 select-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHoveringSeek ? 1 : 0.6,
            transition: {
              duration: AnimationConfig.FAST,
              ease: AnimationConfig.EASING,
            },
          }}
        >
          {secToTimeString(duration - currentTime)}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const playingTransition = { ease: "linear", duration: 1 };
const seekingTransition = {
  ease: AnimationConfig.EASING,
  duration: AnimationConfig.FAST,
};

function ProgressBar({
  currentTime,
  duration,
  isHovering,
  onSeekBegin,
  onSeekEnd,
  onSeekChange,
}) {
  const progress = currentTime / duration;

  const barRef = useRef();
  const [isSeeking, setIsSeeking] = useState(false);

  const updateSeek = (e) => {
    const mouseX = e.clientX;
    const elmBounds = barRef.current.getBoundingClientRect();
    const elmLeft = elmBounds.left;
    const elmWidth = elmBounds.width;

    // calculate seek value
    const seekProgress = (mouseX - elmLeft) / elmWidth;
    onSeekChange && onSeekChange(seekProgress);
  };

  useEffect(() => {
    if (isSeeking) {
      onSeekBegin && onSeekBegin();
    } else {
      onSeekEnd && onSeekEnd();
    }
  }, [isSeeking]);

  const handlMouseDown = (e) => {
    updateSeek(e);
    setIsSeeking(true);
  };

  const handleMouseUp = () => {
    setIsSeeking(false);
  };

  // handle update seek
  useEffect(() => {
    if (!isSeeking) return;
    window.addEventListener("mousemove", updateSeek);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", updateSeek);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSeeking]);

  return (
    <motion.div
      ref={barRef}
      className="w-full h-0.5 relative cursor-pointer"
      animate={{
        backgroundColor: "rgba(255,255,255,.3)",
        scaleY: isHovering ? 6 : 1,
        transition: {
          ease: AnimationConfig.EASING,
          duration: AnimationConfig.FAST,
        },
      }}
      onMouseDown={handlMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* progress */}
      <motion.div
        className="h-full bg-ted-red"
        initial={{ width: 0 }}
        animate={{
          width: `${Math.round(progress * 100)}%`,
          transition: isSeeking ? seekingTransition : playingTransition,
        }}
      />
    </motion.div>
  );
}

function secToTimeString(seconds) {
  const dispMinutes = Math.floor(seconds / 60);
  const dispSeconds =
    dispMinutes === 0 ? Math.round(seconds) : Math.round(seconds % 60);

  const zeroFormattedSeconds =
    dispSeconds >= 10 ? dispSeconds : "0" + dispSeconds;

  return `${dispMinutes}:${zeroFormattedSeconds}`;
}

export default VideoControlBar;
