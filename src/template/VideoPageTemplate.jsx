import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

const VideoPageTemplate = ({ pageContext }) => {
  const speaker = pageContext.speakerInfo;

  // let videoHostName = "192.168.1.70";
  // let videoHostName = "localhost";
  // let videoPort = "5000";

  return (
    <div className="relative flex items-stretch w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-10 md:h-64 z-20 shade-from-top" />
      <VideoPlayer
        className="w-full h-full"
        // src={speaker.video}
        // src={`http://${videoHostName}:${videoPort}/videos/video/candida`}
        videoSrc={speaker.videoSrc}
        subtitleSrc={speaker.subtitleSrc}
      />
    </div>
  );
};

export default VideoPageTemplate;
