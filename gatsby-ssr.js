import React from "react";
import PageWrapper from "./src/components/PageWrapper";
import "./src/styles/global.css";

export const wrapPageElement = ({ element, ...props }) => (
  <PageWrapper {...props}>{element}</PageWrapper>
);
