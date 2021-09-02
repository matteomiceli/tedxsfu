import ICON_PLAY from "../../../static/images/icons/icon-play.svg";
import ICON_PAUSE from "../../../static/images/icons/icon-pause.svg";

import React from "react";

const PlayButton = ({ isPlaying, ...props }) => {
  return (
    <button {...props}>
      <img src={isPlaying ? ICON_PAUSE : ICON_PLAY} alt="Play button" />
    </button>
  );
};

export default PlayButton;
