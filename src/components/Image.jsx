import React, { useRef, useEffect, useState, useMemo } from "react";
import { isImageCached, preloadImage } from "../utils/util";
import { motion } from "framer-motion";

const imageState = {
  LOADING: "loading",
  LOADED: "loaded",
  SHOWING: "showing",
};

const sourceType = {
  HALF: "half",
  FULL: "full",
};

//TODO: not pre-fetching half-images
const Image = ({ src, halfBreakpoint, width, height, onLoad, ...props }) => {
  const srcStrippedExtension = src.replace(/\.[^/.]+$/, "");

  // auto opt in for blur up when the width and height attributes are provided
  const applyBlurUpEffect = width && height ? true : false;

  const blurredSrc = `${srcStrippedExtension}@loading.webp`;
  const fullSizeSrc = srcStrippedExtension + ".webp";
  const halfSizeSrc = srcStrippedExtension + "@half.webp";

  // for first-render "isLoaded" detection
  const isFullSizeImageCached = useRef(false);
  const isHalfSizeImageCached = useRef(false);
  // detect if the image have loaded  before
  isFullSizeImageCached.current = isImageCached(fullSizeSrc);
  isHalfSizeImageCached.current = isImageCached(halfSizeSrc);

  const initialSrc = useMemo(() => {
    if (typeof window !== "undefined")
      return window.innerWidth > halfBreakpoint
        ? sourceType.FULL
        : sourceType.HALF;
    return sourceType.FULL;
  }, []);

  const [loadingState, setLoadingState] = useState(imageState.LOADING);

  // load the
  const loadImage = async function (imageSrc) {
    try {
      await preloadImage(imageSrc);
    } catch (e) {
      console.log(`unable to load ${imageSrc}`);
    }
    setLoadingState(imageState.LOADED);
  };

  useEffect(() => {
    // don't need to load the image if it is already cached
    // if (isFullSizeImageCached.current === true) return;
    setLoadingState(imageState.LOADING);
    // get which image to load base on responsive design
    const imageToLoad = initialSrc ? fullSizeSrc : halfSizeSrc;
    loadImage(imageToLoad);
  }, []);

  // call callback if the image is loaded
  useEffect(() => {
    if (loadingState === imageState.LOADED) onLoad && onLoad();
  }, [loadingState]);

  const shouldShowBlurImage =
    applyBlurUpEffect &&
    !isFullSizeImageCached.current &&
    !isHalfSizeImageCached.current;

  // console.log(`${src} — cached:${isFullSizeImageCached.current}`);
  // console.log(`blurr effect ${applyBlurUpEffect} ${src}`);
  return (
    <div
      style={{
        backgroundImage: applyBlurUpEffect ? `url(${blurredSrc})` : "none",
        backgroundSize: "cover",
      }}
      className={props.className + " relative"}
    >
      <picture>
        {halfBreakpoint && (
          <>
            <source
              type="image/webp"
              srcSet={shouldShowBlurImage ? blurredSrc : fullSizeSrc}
              media={`(min-width: ${halfBreakpoint}px)`}
            />
            <source
              type="image/webp"
              srcSet={shouldShowBlurImage ? blurredSrc : halfSizeSrc}
              media={`(max-width: ${halfBreakpoint - 1}px)`}
            />
          </>
        )}
        {!halfBreakpoint && (
          <source
            type="image/webp"
            srcSet={shouldShowBlurImage ? blurredSrc : fullSizeSrc}
          />
        )}
        <motion.img
          // safari need to load jpg version
          src={src}
          // src={fullSizeSrc}
          {...props}
          width={width}
          height={height}
          initial={{
            opacity:
              applyBlurUpEffect &&
              !isFullSizeImageCached.current &&
              !isHalfSizeImageCached.current
                ? 0
                : 1,
          }}
          animate={{
            opacity: shouldShowBlurImage ? 0 : 1,
            transition: {
              duration: 0.5,
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
