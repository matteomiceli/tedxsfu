import React from "react";

//TODO: figure out an API for conditionally use half
const Image = ({ src, halfBreakpoint, ...props }) => {
  const srcStrippedExtension = src.replace(/\.[^/.]+$/, "");

  return (
    <picture>
      {halfBreakpoint && (
        <>
          <source type="image/webp" srcset={srcStrippedExtension + ".webp"} />
          <source
            type="image/webp"
            media={`(min-width: ${halfBreakpoint}px)`}
            srcset={srcStrippedExtension + "@half.webp"}
          />
        </>
      )}
      {!halfBreakpoint && (
        <source type="image/webp" srcset={srcStrippedExtension + ".webp"} />
      )}
      <img src={src} {...props} />
    </picture>
  );
};

export default Image;
