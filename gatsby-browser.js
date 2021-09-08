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
