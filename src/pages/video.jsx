import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

const video = () => {
  return (
    <div className="relative flex items-stretch w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-10 md:h-64 z-20 shade-from-top" />
      <VideoPlayer
        className="w-full"
        src={"http://localhost:5000/videos/video/candida"}
        subtitleSrc={"http://localhost:5000/videos/video/candida/caption"}
      />
    </div>
  );
};

export default video;
