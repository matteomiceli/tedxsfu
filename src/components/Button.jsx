import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const isSSR = typeof window === "undefined";

const Button = ({ href = "#", children, blank, secondary }) => {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      className="text-interactive py-2 px-6 bg-white text-black rounded-full relative"
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
    >
      <motion.div
        className="rounded-full absolute -left-1 -top-1 -right-1 -bottom-1 border border-ted-red"
        animate={{
          scaleX: isHover ? 1.02 : 1,
          scaleY: isHover ? 1.1 : 1,
          borderWidth: isHover ? 1.5 : 1,
        }}
      ></motion.div>
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
    <span ref={containerRef} className="relative">
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
