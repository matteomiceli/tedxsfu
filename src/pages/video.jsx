import React from "react";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

const video = () => {
  return (
    <div className="flex h-screen w-screen">
      <VideoPlayer src={"/videos/bloom-reveal-low-fps.mp4"} />
    </div>
  );
};

export default video;
