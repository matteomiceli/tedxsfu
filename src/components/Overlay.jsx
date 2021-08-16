import React, { useCallback, useEffect, useState } from "react";
import loadable from "@loadable/component";
// const BackdropFilter = loadable(() => import("react-backdrop-filter"));

function Overlay(delta) {

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className={`glass h-24 w-48 z-10 transform translate-x-${2}`}></div>
      <div className={`glass h-24 w-48 z-10 transform translate-y-24 translate-x-${ 2}`}></div>
    </div>
  );
}

export default Overlay;
