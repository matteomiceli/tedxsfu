import React from "react";

const useClickOutside = (ref, callback, mouseDown = false, deps = []) => {
  const handleClick = (e) => {
    if (ref && ref instanceof Array) {
      const isClickingInsideAnyRef = ref.some((elm) => {
        if (elm instanceof HTMLElement) return elm.contains(e.target);
        return elm.current.contains(e.target);
      });

      if (!isClickingInsideAnyRef) callback();
    }

    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener(
      mouseDown ? "mousedown" : "click",
      handleClick
    );
    document.body.addEventListener("contextmenu", handleClick, {
      capture: true,
    });
    return () => {
      document.body.removeEventListener(
        mouseDown ? "mousedown" : "click",
        handleClick
      );
      document.body.removeEventListener("contextmenu", handleClick, {
        capture: true,
      });
    };
  }, [callback, ...deps]);
};

export default useClickOutside;
