import { useMemo, useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

// USAGE
// const isOverBreakpoint = useBreakpoint(breakpointInPixel)
// const isMobile = useMobileBreakpoint();

export function useBreakpoint(breakpointSize) {
  const [isOverBreakpoint, setIsOverBreakpoint] = useState();

  useEffect(() => {
    function handleResize() {
      const currentScreenWidth = window.innerWidth;
      if (currentScreenWidth < breakpointSize) {
        // only change when it is not the current state
        !isOverBreakpoint && setIsOverBreakpoint(true);
        return;
      }
      isOverBreakpoint && setIsOverBreakpoint(false);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOverBreakpoint]);
  return isOverBreakpoint;
}

// mobild shorthand for "useBreakpoint"
export function useMobileBreakpoint() {
  const fullConfig = useMemo(() => resolveConfig(tailwindConfig));
  return useBreakpoint(parseInt(fullConfig.theme.screens.sm));
}
