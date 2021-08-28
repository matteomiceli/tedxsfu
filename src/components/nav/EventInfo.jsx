import React from "react";

const EventInfo = () => {
  return (
    <div className="flex items-center">
      <div
        className="flex flex-col px-2 justify-between border-l border-ted-red"
        style={{ height: 52 }}
      >
        <p
          className="text-white text-sm w-32"
          style={{ marginTop: 1, lineHeight: 1 }}
        >
          Anvil Theatre <br /> New Westminster
        </p>
        <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
          Location
        </p>
      </div>
      <div
        className="flex flex-col px-2 justify-between border-l border-ted-red"
        style={{ height: 52 }}
      >
        <p className="text-white text-3xl w-32 font-light">
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
        <p className="text-white font-light text-3xl w-32">1-8 pm</p>
        <p className="text-gray-400 text-sm" style={{ lineHeight: 0.55 }}>
          Time
        </p>
      </div>
    </div>
  );
};

export default EventInfo;
