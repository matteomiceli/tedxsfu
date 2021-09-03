import React, { useEffect, useState, useRef } from "react";
import loadable from "@loadable/component";

const HorizontalScrollContainer = React.forwardRef(
  ({ children, className }, ref) => {
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
      <div
        ref={mergeRefs(scrollRef, ref)}
        className={`outer-scroll-container h-full ${className}`}
      >
        <div className="inner-scroll-container h-full">{children}</div>
      </div>
    );
  }
);

//https://www.davedrinks.coffee/how-do-i-use-two-react-refs/
const mergeRefs = (...refs) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return (inst) => {
    for (const ref of filteredRefs) {
      if (typeof ref === "function") {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};

export default HorizontalScrollContainer;
