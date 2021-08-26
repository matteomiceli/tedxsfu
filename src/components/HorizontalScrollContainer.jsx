import React, { useEffect, useState, useRef } from "react";
import loadable from "@loadable/component";

function HorizontalScrollContainer({ children }) {
  // page width
  const [width, setWidth] = useState(0);
  // page scroll location
  const [scroll, setScroll] = useState(0);

  // mouse scroll delta value
  const [deltaVal, setDelta] = useState(0);
  const scrollRef = useRef();

  const handleScroll = (e) => {
    // e.preventDefault();
    setDelta(e.deltaY);
    setScroll(e.currentTarget.scrollLeft);

    // set width of page
    setWidth(e.currentTarget.scrollWidth - e.currentTarget.clientWidth);
  };

  // set up global scroll listener
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollRef.current.scrollLeft += deltaVal;
    setDelta(0);
  }, [deltaVal]);

  return (
    <div ref={scrollRef} className="outer-scroll-container">
      <div className="inner-scroll-container">{children}</div>
    </div>
  );
}

export default HorizontalScrollContainer;
