import { useRef } from "react";

// usage
/**
 *
 * USAGE
 * const triggerTimer = useDelayTrigger(()=>doSomething, 2000); // do something in 2 secs
 *
 * useEffect(()=> {
 *   triggerTimer() // the callback will be called in 2000
 *   triggerTimer(1000s) // reset the timer and retrigger the timer for 1 sec
 * })
 * @param {*} callback
 * @returns
 */
export default function useDelayTrigger(callback, defaultExpireTime = 1000) {
  const timer = useRef();
  const fire = (customExpireTime) => {
    const expTime = customExpireTime || defaultExpireTime;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(callback, expTime);
  };
  return fire;
}
