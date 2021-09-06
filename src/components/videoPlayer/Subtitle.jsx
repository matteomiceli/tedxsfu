import React, { useState, useEffect } from "react";
import parseSRT from "parse-srt";

const Subtitle = ({ src, currentTime, duration }) => {
  // load subtitle from the same directory
  const [subtitle, setSubtitle] = useState();
  const [currentLine, setCurrentLine] = useState(null);

  useEffect(() => {
    // attempt loading subtitle
    async function loadSubtitle() {
      // fetch subtitle here
      const subtitleData = await fetch(src);
      const subtitleStr = await subtitleData.text();

      // decode the subtitle
      const parsedSubtitle = parseSRT(subtitleStr);
      setSubtitle(parsedSubtitle);
    }
    loadSubtitle();
  }, []);

  useEffect(() => {
    if (!subtitle || !currentTime) return;

    function searchLine(currentTime) {
      return subtitle.findIndex(
        (line) => currentTime > line.start && currentTime < line.end
      );
    }

    const currentLine = searchLine(currentTime);
    if (currentLine === -1) {
      setCurrentLine(null);
      return;
    }
    setCurrentLine(currentLine);
  }, [currentTime, subtitle]);

  const isShowingSubtitle =
    subtitle && currentLine !== null && currentLine !== undefined
      ? true
      : false;

  // get the current line
  return (
    <div className="text-center w-full">
      {isShowingSubtitle && (
        <div
          className="inline-block text-lg sm:text-2xl bg-black bg-opacity-50 font-medium rounded-sm ml-document mr-document px-2 py-1 backdrop-filter backdrop-blur-lg whitespace-pre-line"
          style={{ maxWidth: "50ch" }}
        >
          {subtitle[currentLine].text.replace("<br />", "\n")}
        </div>
      )}
    </div>
  );
};

export default Subtitle;
