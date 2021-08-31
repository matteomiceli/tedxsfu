import { navigate } from "gatsby-link";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

const isSSR = typeof window === "undefined";

const Button = ({
  href = "#",
  children,
  blank,
  primary,
  secondary,
  tertiary,
  cta,
  text,
  onClick,
  icon, // can be a component or URL to image/svg
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const buttonStyle = (() => {
    if (cta)
      return "text-interactive py-2.5 px-5 bg-white text-black rounded-full relative inline-flex";
    if (primary)
      return "text-interactive py-2 px-4 bg-white text-black rounded-full relative inline-flex";
    if (secondary)
      return "text-interactive py-2 px-4 text-white rounded-full relative inline-flex border border-white";
    if (tertiary)
      return "text-interactive py-2 px-4 text-white rounded-full relative inline-flex";

    // default as inline text button
    return "text-interactive relative inline-block";
  })();

  const handleButtonClick = (e) => {
    // let the user open the link naturally if its an external link
    if (blank) return;

    // for internal routing
    e.preventDefault();
    navigate(href);
  };

  return (
    <motion.a
      href={href}
      target={blank ? "_blank" : "_self"}
      onMouseEnter={(e) => {
        setIsHover(true);
        setMousePos({ x: e.clientX, y: e.clientY });
      }}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      whileTap={{
        scale: 0.97,
        transition: {
          duration: AnimationConfig.FAST,
          ease: AnimationConfig.EASING,
        },
      }}
      {...props}
      // support custom classses
      className={buttonStyle + " " + props.className}
      onClick={onClick || handleButtonClick}
    >
      {/* ring on cta button */}
      {cta && (
        <motion.div
          className={`rounded-full absolute -left-1 -top-1 -right-1 -bottom-1 border border-ted-red`}
          initial={{
            scaleX: 1,
            scaleY: 1,
            borderWidth: 1,
          }}
          animate={{
            scaleX: isHover ? 1.02 : 1,
            scaleY: isHover ? 1.1 : 1,
            borderWidth: isHover ? 1 : 1,
          }}
        />
      )}
      {/* ring on primary button */}
      {primary && (
        <motion.div
          className={`rounded-full absolute -left-1 -top-1 -right-1 -bottom-1 border border-ted-white`}
          initial={{
            scaleX: 1,
            scaleY: 1,
            borderWidth: 1,
          }}
          animate={{
            scaleX: isHover ? 1.02 : 1,
            scaleY: isHover ? 1.1 : 1,
            borderWidth: isHover ? 1 : 1,
          }}
        />
      )}
      {typeof icon === "string" ? (
        <img
          src={icon}
          className="inline-block h-4 mr-2 flex-shrink-0"
          aria-hidden="true"
        />
      ) : (
        icon
      )}
      <RippleText isActive={isHover} originPos={mousePos}>
        {children}
      </RippleText>
    </motion.a>
  );
};

{
  /* <button class="hamburger hamburger--collapse" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>; */
}

const RippleText = ({ children, originPos = { x: 0, y: 0 }, isActive }) => {
  const [boundingRect, setBoundingRect] = useState();
  const containerRef = useRef();
  useEffect(() => {
    setBoundingRect(containerRef.current.getBoundingClientRect());
  }, [isActive]);

  const textLength = children.length;

  return (
    <span
      ref={containerRef}
      className="relative flex-shrink-0 inline-flex justify-between items-center whitespace-nowrap"
      // for compensating t
      style={{ marginTop: ".2em", lineHeight: ".55em" }}
    >
      {/* invisible placeholder for a fixed width */}
      <span className="font-bold opacity-0" area-hidden="true">
        {children}
      </span>

      {/* container for animating span */}
      <span className="absolute left-0 right-0 text-center">
        {children.split("").map((val, index) => {
          const originOffsetNormalized = (() => {
            if (!boundingRect) return 0;
            return (originPos.x - boundingRect.left) / boundingRect.width;
          })();
          const currentCharacterLocationNoramlized = (index + 1) / textLength;

          const delayFactor = Math.abs(
            originOffsetNormalized - currentCharacterLocationNoramlized
          );

          return (
            <motion.span
              key={index}
              initial={{ fontVariationSettings: `"wght" 400` }}
              animate={{
                fontVariationSettings:
                  !isSSR && isActive ? `"wght" 600` : `"wght" 400`,
                transition: {
                  delay: !isSSR && delayFactor * 0.2,
                },
              }}
            >
              {val}
            </motion.span>
          );
        })}
      </span>
    </span>
  );
};

export default Button;
