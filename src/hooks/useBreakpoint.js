import { useMemo, useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

// USAGE
// const isOverBreakpoint = useBreakpoint(breakpointInPixel)
// const isMobile = useMobileBreakpoint();

const fullConfig = resolveConfig(tailwindConfig);

export function useBreakpoint(breakpointSize) {
  const [isOverBreakpoint, setIsOverBreakpoint] = useState(false);

  function forceRefreshBreakpoint() {
    setIsOverBreakpoint(window.innerWidth > breakpointSize);
  }

  useEffect(() => {
    function handleResize() {
      const currentScreenWidth = window.innerWidth;
      if (currentScreenWidth > breakpointSize) {
        // only change when it is not the current state
        !isOverBreakpoint && setIsOverBreakpoint(true);
        return;
      }
      isOverBreakpoint && setIsOverBreakpoint(false);
    }
    forceRefreshBreakpoint();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOverBreakpoint]);
  return isOverBreakpoint;
}

// mobild shorthand for "useBreakpoint"
export function useMobileBreakpoint() {
  return useBreakpoint(parseInt(fullConfig.theme.screens.sm));
}

export const breakpoints = {
  sm: parseInt(fullConfig.theme.screens.sm),
  md: parseInt(fullConfig.theme.screens.md),
  lg: parseInt(fullConfig.theme.screens.lg),
  xl: parseInt(fullConfig.theme.screens.xl),
  "2xl": parseInt(fullConfig.theme.screens["2xl"]),
};
