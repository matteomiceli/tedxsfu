import React, { useRef, useEffect, useState } from "react";
import { isImageCached } from "../utils/util";
import { motion } from "framer-motion";

const imageState = {
  LOADING: "loading",
  LOADED: "loaded",
  SHOWING: "showing",
};

//TODO: not pre-fetching half-images
const Image = ({ src, halfBreakpoint, width, height, onLoad, ...props }) => {
  const srcStrippedExtension = src.replace(/\.[^/.]+$/, "");

  // auto opt in for blur up when the width and height attributes are provided
  const applyBlurUpEffect = width && height ? true : false;
  const [loadingState, setLoadingState] = useState(imageState.LOADING);

  const blurredSrc = `${srcStrippedExtension}@loading.webp`;
  const fullSizeSrc = srcStrippedExtension + ".webp";
  const halfSizeSrc = srcStrippedExtension + "@half.webp";

  // for first-render "isLoaded" detection
  const isFullSizeImageCached = useRef(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // don't need to load the image if it is already cached
    if (isFullSizeImageCached.current === true) return;

    setLoadingState(imageState.LOADING);

    // load the
    const fullSizeElm = document.createElement("img");
    fullSizeElm.src = fullSizeSrc;
    fullSizeElm.onload = () => {
      isFullSizeImageCached.current = true;
      setLoadingState(imageState.LOADED);
    };
  }, [fullSizeSrc]);

  // detect if the image have loaded  before
  if (isFirstRender.current === true && typeof window !== "undefined") {
    isFullSizeImageCached.current = isImageCached(fullSizeSrc);
    setLoadingState(isFullSizeImageCached.current && imageState.LOADED);
    isFirstRender.current = false;
  }

  // call callback if the image is loaded
  useEffect(() => {
    if (loadingState === imageState.LOADED) onLoad && onLoad();
  }, [loadingState]);

  // console.log(`${src} — cached:${isFullSizeImageCached.current}`);

  return (
    <div
      style={{
        backgroundImage: applyBlurUpEffect ? `url(${blurredSrc})` : "none",
        backgroundSize: "cover",
      }}
      className={props.className}
    >
      <picture>
        {halfBreakpoint && (
          <>
            <source
              type="image/webp"
              srcSet={
                loadingState === imageState.LOADING &&
                !isFullSizeImageCached.current
                  ? blurredSrc
                  : fullSizeSrc
              }
              media={`(min-width: ${halfBreakpoint}px)`}
            />
            <source
              type="image/webp"
              srcSet={
                loadingState === imageState.LOADING &&
                !isFullSizeImageCached.current
                  ? blurredSrc
                  : halfSizeSrc
              }
              media={`(max-width: ${halfBreakpoint - 1}px)`}
            />
          </>
        )}
        {!halfBreakpoint && (
          <source
            type="image/webp"
            srcSet={
              loadingState === imageState.LOADING &&
              !isFullSizeImageCached.current
                ? blurredSrc
                : fullSizeSrc
            }
          />
        )}
        <motion.img
          src={src}
          {...props}
          width={width}
          height={height}
          initial={{
            opacity:
              applyBlurUpEffect && !isFullSizeImageCached.current ? 0 : 1,
          }}
          animate={{
            opacity: isFullSizeImageCached.current ? 1 : 0,
            transition: {
              duration: 0.3,
              ease: "linear",
            },
          }}
          loading={"eager"}
        />
      </picture>
    </div>
  );
};

export default Image;
