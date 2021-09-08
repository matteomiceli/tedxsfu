import React from "react";
import PageWrapper from "./src/components/PageWrapper";
import "./src/styles/global.css";
import scrollIntoView from "scroll-into-view-if-needed";

export const wrapPageElement = ({ element, ...props }) => (
  <PageWrapper {...props}>{element}</PageWrapper>
);

export function onRouteUpdate({ location }) {
  return true;
}

/**
 * For loading spinner
 */

// (default - 1 second) how long should it wait before showing the spinner
const SPINNER_TOLERANCE = 0;

const initialLoadTime = Date.now();
let isShowingSpinner = false;
let isLoaded = false;

function shouldShowSpinner() {
  return Date.now() - initialLoadTime > SPINNER_TOLERANCE;
}

function attemptShowSpinner() {
  if (isShowingSpinner || isLoaded) return;

  if (shouldShowSpinner()) {
    const spinner = document.querySelector("#__loading-spinner");
    isShowingSpinner = true;
    spinner.classList.add("loading-spinner--loading");
  }

  requestAnimationFrame(attemptShowSpinner);
}

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(attemptShowSpinner);
});

export function onInitialClientRender() {
  const spinner = document.querySelector("#__loading-spinner");
  spinner.classList.remove("loading-spinner--loading");
  isShowingSpinner = false;
  isLoaded = true;
  // window.addEventListener("load", () => {});

  // setTimeout(function () {
  //   spinner.classList.add("loading-spinner--loading");
  // }, REMOVE_DELAY);
}
