import React, { useEffect, useState, useRef } from "react";
import loadable from "@loadable/component";
import { mergeRefs } from "../utils/util";

const HorizontalScrollContainer = React.forwardRef(
  ({ children, className }, ref) => {
    // mouse scroll delta value
    const [deltaVal, setDelta] = useState(0);
    const scrollRef = useRef();

    const handleScroll = (e) => {
      setDelta(e.deltaY);
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
      <div
        ref={mergeRefs(scrollRef, ref)}
        className={`outer-scroll-container h-full ${className}`}
      >
        <div className="inner-scroll-container h-full">{children}</div>
      </div>
    );
  }
);

export default HorizontalScrollContainer;
