import React from "react";
import { useBreakpoint, breakpoints } from "../../hooks/useBreakpoint";

const EventInfo = () => {
  const isMinimizeModule = useBreakpoint(breakpoints.sm);

  const isClient = typeof window === "undefined";

  return (
    <>
      {isMinimizeModule && <FullModule key="fullModule" />}
      {!isMinimizeModule && <MinModule key="minModule" />}
    </>
  );
};

const MinModule = () => (
  <div className="flex" id="min-module" key="minModule">
    <div
      className="flex flex-col px-2 justify-between border-l border-ted-red"
      style={{ height: 28 }}
    >
      <div
        className="text-white text-sm w-26"
        style={{ marginTop: 1, lineHeight: 1 }}
      >
        <span className="font-bold">Anvil Theatre</span> <br /> New Westminster
      </div>
    </div>
    <div
      className="flex flex-col px-2 justify-between border-l border-ted-red"
      style={{ height: 28 }}
    >
      <div
        className="text-white text-sm w-26"
        style={{ marginTop: 1, lineHeight: 1 }}
      >
        <span className="font-bold">
          Nov 20<sup>th</sup>
        </span>{" "}
        <br />
        1-8pm
      </div>
    </div>
  </div>
);

const FullModule = () => (
  <div className="flex items-center" key="fullModule">
    <div
      className="flex flex-col px-2 justify-between border-l border-ted-red"
      style={{ height: 52 }}
    >
      <p
        className="text-white text-sm w-26 lg:w-32 "
        style={{ marginTop: 1, lineHeight: 1 }}
      >
        Anvil Theatre <br /> New Westminster
      </p>
      <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
        Venue
      </p>
    </div>
    <div
      className="flex flex-col px-2 justify-between border-l border-ted-red"
      style={{ height: 52 }}
    >
      <p className="text-white text-3xl w-26 lg:w-32 font-light">
        Nov 20<sup>th</sup>
      </p>
      <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
        Date
      </p>
    </div>
    <div
      className="flex flex-col px-2 justify-between border-l border-ted-red"
      style={{ height: 52 }}
    >
      <p className="text-white text-3xl w-26 font-light">1-8 pm</p>
      <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
        Time
      </p>
    </div>
  </div>
);

export default EventInfo;
