import { navigate } from "gatsby-link";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";
import { preloadImage, preloadImageAll } from "../utils/util";

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

  const buttonStyle = (() => {
    if (cta)
      return "text-interactive py-2.5 px-5 text-black rounded-full relative inline-flex accent-gradient-bg select-none";
    if (primary)
      return "text-interactive py-2 px-4 bg-white text-black rounded-full relative inline-flex select-none";
    if (secondary)
      return "text-interactive py-2 px-4 text-white rounded-full relative inline-flex border border-white select-none";
    if (tertiary)
      return "text-interactive py-2 px-4 text-white rounded-full relative inline-flex select-none";

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

  // preload gradiient background effect for cta button
  useEffect(() => {
    if (!cta) return;
    preloadImageAll(
      "/images/gradient-effect-white.svg",
      "/images/gradient-effect.svg"
    );
  }, [cta]);

  return (
    <motion.a
      href={href}
      target={blank ? "_blank" : "_self"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      initial={
        cta && {
          color: "#000",
          backgroundImage: "url(/images/gradient-effect-white.svg)",
        }
      }
      whileTap={{
        scale: 0.97,
        transition: {
          duration: AnimationConfig.FAST,
          ease: AnimationConfig.EASING,
        },
      }}
      whileHover={
        cta && {
          color: "#FFF",
          backgroundImage: "url(/images/gradient-effect.svg)",
        }
      }
      transition={{
        duration: AnimationConfig.NORMAL,
        ease: AnimationConfig.EASING,
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
          }}
          animate={{
            scaleX: isHover ? 1.02 : 1,
            scaleY: isHover ? 1.1 : 1,
          }}
          transition={{
            duration: AnimationConfig.NORMAL,
            ease: AnimationConfig.EASING,
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
          }}
          animate={{
            scaleX: isHover ? 1.02 : 1,
            scaleY: isHover ? 1.1 : 1,
          }}
          transition={{
            duration: AnimationConfig.NORMAL,
            ease: AnimationConfig.EASING,
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
      <RippleText isActive={isHover}>{children}</RippleText>
    </motion.a>
  );
};

const RippleTextContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.015,
    },
  },
  active: {
    transition: {
      staggerChildren: 0.015,
    },
  },
};

const RippleTextVariants = {
  initial: { fontVariationSettings: `"wght" 400` },
  active: {
    fontVariationSettings: `"wght" 600`,
    transition: {
      duration: 0.2,
      ease: AnimationConfig.EASING,
    },
  },
};

const RippleText = ({ children, isActive }) => {
  return (
    <span
      className="relative flex-shrink-0 inline-flex justify-between items-center whitespace-nowrap"
      // to compensate vertical positioning of all caps
      style={{ marginTop: ".2em", lineHeight: ".55em" }}
    >
      {/* invisible placeholder for a fixed width */}
      <span className="font-bold opacity-0" area-hidden="true">
        {children}
      </span>

      {/* container for animating span */}
      <motion.span
        className="absolute left-0 right-0 text-center"
        variants={RippleTextContainerVariants}
        initial="initial"
        animate={isActive ? "active" : "initial"}
      >
        {children.split("").map((val, index) => {
          return (
            <motion.span key={index} variants={RippleTextVariants}>
              {val}
            </motion.span>
          );
        })}
      </motion.span>
    </span>
  );
};

export default Button;
