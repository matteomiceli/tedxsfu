import { useRef } from "react";

export default function useFirstRender(executeOnFirstRender) {
  const isFirstRender = useRef(true);
  if (isFirstRender.current === true) {
    executeOnFirstRender && executeOnFirstRender();
    isFirstRender.current = false;
  }
}
