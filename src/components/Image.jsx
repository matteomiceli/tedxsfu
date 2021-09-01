import React from "react";

//TODO: figure out an API for conditionally use half
const Image = ({ src, halfBreakpoint, ...props }) => {
  const srcStrippedExtension = src.replace(/\.[^/.]+$/, "");

  return (
    <picture>
      {halfBreakpoint && (
        <>
          <source
            type="image/webp"
            srcSet={srcStrippedExtension + ".webp"}
            media={`(min-width: ${halfBreakpoint}px)`}
          />
          <source
            type="image/webp"
            media={`(max-width: ${halfBreakpoint - 1}px)`}
            srcSet={srcStrippedExtension + "@half.webp"}
          />
        </>
      )}
      {!halfBreakpoint && (
        <source type="image/webp" srcSet={srcStrippedExtension + ".webp"} />
      )}
      <img src={src} {...props} />
    </picture>
  );
};

export default Image;
