import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

const video = () => {
  let videoHostName = "192.168.1.70";
  let videoPort = "5000";

  return (
    <div className="relative flex items-stretch w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-10 md:h-64 z-20 shade-from-top" />
      <VideoPlayer
        className="w-full"
        src={`http://${videoHostName}:${videoPort}/videos/video/candida`}
      />
    </div>
  );
};

export default video;
