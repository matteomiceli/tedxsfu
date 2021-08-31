import { navigate } from "gatsby-link";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const buttonStyle = (() => {
    if (cta)
      return "text-interactive py-2 px-6 bg-white text-black rounded-full relative inline-block";
    if (primary)
      return "text-interactive py-2 px-6 bg-white text-black rounded-full relative inline-block";
    if (secondary)
      return "text-interactive py-2 px-6 text-white rounded-full relative inline-block border border-white";
    if (tertiary)
      return "text-interactive py-2 px-6 text-white rounded-full relative inline-block";

    // default as inline text button
    return "text-interactive relative inline-block";
  })();

  const handleButtonClick = (e) => {
    // let the user open the link naturally if its an external link
    if (blank) return;

    // for internal routing
    e.preventDefault();
    navigate(e.target.href);
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
      animate={{ scale: isActive ? 0.97 : 1 }}
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
      <RippleText isActive={isHover} originPos={mousePos}>
        {children}
      </RippleText>
    </motion.a>
  );
};

const RippleText = ({ children, originPos = { x: 0, y: 0 }, isActive }) => {
  const [boundingRect, setBoundingRect] = useState();
  const containerRef = useRef();
  useEffect(() => {
    setBoundingRect(containerRef.current.getBoundingClientRect());
  }, [isActive]);

  if (isSSR) return <span>{children}</span>;

  const textLength = children.length;

  return (
    <span
      ref={containerRef}
      className="relative inline-block whitespace-nowrap"
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
                fontVariationSettings: isActive ? `"wght" 600` : `"wght" 400`,
                transition: {
                  delay: delayFactor * 0.2,
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
