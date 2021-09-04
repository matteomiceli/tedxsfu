import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import menu from "../../static/images/menu.svg";
import Button from "../Button";
import MENU_ITEMS from "../../content/menuItems";
import EventInfo from "../../content/eventInfo";
import { AnimationConfig } from "../../AnimationConfig";

import { motion } from "framer-motion";

function Menu({ isActive, setActive, page }) {
  // grab the path from url
  const currentPath = (() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
  })();

  const [hoveringIndex, setHoveringIndex] = useState(null);
  const [hoverable, setHoverable] = useState(false);

  useEffect(() => {
    if (!isActive) setHoverable(false);
  }, [isActive]);

  return (
    <nav className="relative">
      <motion.ul
        className={`absolute right-4 top-0 flex z-40 bg-black ${
          isActive ? "pointer-events-all" : "pointer-events-none"
        }`}
        onMouseEnter={() => setActive(true)}
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: isActive ? 1 : 0,
          x: isActive ? 0 : 20,
          transition: {
            ease: AnimationConfig.EASING,
            duration: AnimationConfig.NORMAL,
          },
        }}
        onMouseLeave={() => setHoveringIndex(null)}
      >
        {MENU_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            href={item.href}
            pageId={index}
            isCurrent={item.href === currentPath}
            currentHoveringIndex={hoveringIndex}
            onMouseEnter={() => hoverable && setHoveringIndex(index)}
            hoverable={hoverable}
          >
            {item.label}
          </MenuItem>
        ))}
      </motion.ul>

      {/* bigger active area to prevent accidentally exiting the nav */}
      <div
        className={`fixed top-0 right-0 w-nav-hitarea-sm lg:w-nav-hitarea-l h-24 lg:h-28 z-30 ${
          isActive ? "pointer-events-all" : "pointer-events-none"
        }`}
        onMouseLeave={() => setActive(false)}
      />
      <div
        className={
          isActive === true
            ? "transition-all duration-300 ease-in-out max-w-0 max-h-0 opacity-0 overflow-hidden"
            : "flex items-center transition-all duration-300 ease-in-out"
        }
      >
        {!isActive && (
          <Button cta blank href={EventInfo.ticketUrl}>
            Get Tickets Now
          </Button>
        )}
        <img
          className="h-8 cursor-pointer p-2 ml-6"
          src={menu}
          alt="Menu Icon"
          onMouseEnter={() => {
            setActive(true);
            setTimeout(() => setHoverable(true), 300);
          }}
        />
      </div>
    </nav>
  );
}

const transition = {
  duration: AnimationConfig.NORMAL,
  ease: AnimationConfig.EASING,
};

function MenuItem({
  pageId,
  href,
  isCurrent,
  hoverable,
  currentHoveringIndex,
  onMouseEnter,
  children,
}) {
  const isHovering = currentHoveringIndex === pageId;
  const hoveringSomething = currentHoveringIndex !== null;

  return (
    <li>
      <Link to={href} className="block mr-6" onMouseEnter={onMouseEnter}>
        <motion.div
          className="mb-1 text-xs"
          initial={{
            fontVariationSettings: `"wght" 400`,
          }}
          animate={{
            opacity: !hoverable || !hoveringSomething || isHovering ? 1 : 0.6,
            fontVariationSettings: `"wght" ${isCurrent ? 800 : 400}`,
            transition: transition,
          }}
        >
          {pageId + 1}
        </motion.div>

        <div
          aria-hidden="true"
          className={
            "uppercase tracking-wider text-base font-extrabold relative"
          }
        >
          {/* hack to measure the bolded height */}
          <span className="opacity-0">{children}</span>
          <motion.div
            className={"absolute left-0 top-0"}
            initial={{
              fontVariationSettings: `"wght" 400`,
            }}
            animate={{
              fontVariationSettings: `"wght" ${isCurrent ? 800 : 400}`,
              opacity: !hoverable || !hoveringSomething || isHovering ? 1 : 0.6,
              transition: transition,
            }}
          >
            {children}
          </motion.div>
        </div>
      </Link>
    </li>
  );
}

export default Menu;
