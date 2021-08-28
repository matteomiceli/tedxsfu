import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../../AnimationConfig";
import MenuItems from "../../content/menuItems";
import { Link } from "gatsby";

const menuVariants = {
  initial: { y: "100vh" },
  enter: {
    y: 0,
    transition: {
      ease: AnimationConfig.EASING,
      duration: AnimationConfig.NORMAL,
      staggerChildren: 0.04,
    },
  },
  exit: {
    y: "100vh",
    transition: {
      ease: AnimationConfig.EASING_INVERTED,
      duration: AnimationConfig.FAST,
    },
  },
};

const menuItemVariants = {
  initial: { opacity: 0, y: 20 },
  enter: (isCurrent) => ({
    opacity: isCurrent ? 1 : 0.6,
    y: 0,
    transition: {
      ease: AnimationConfig.EASING,
      duration: AnimationConfig.NORMAL,
    },
  }),
  exit: { opacity: 0 },
};

const seperatorVariants = {
  initial: { opacity: 0, width: 0 },
  enter: (isCurrent) => ({
    opacity: isCurrent ? 1 : 0.6,
    width: "100%",
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: AnimationConfig.NORMAL,
    },
  }),
  exit: { opacity: 0 },
};

const FullScreenMenu = ({ onExit }) => {
  // grab the path from url
  const currentPath = (() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
  })();

  return (
    <motion.div
      className="fixed left-0 top-0 right-0 bottom-0 bg-black px-document pl-5 pr-5"
      style={{ paddingTop: "15vh" }}
      variants={menuVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {MenuItems.map((item, index) => {
        const isCurrent = currentPath === item.href;

        return (
          <>
            {/* seperator line */}
            <motion.div
              className="border-t"
              custom={isCurrent}
              variants={seperatorVariants}
            />
            {/* menu item */}
            <motion.div key={index} whileTap={{ scale: 0.98 }}>
              <Link className="flex pt-3 pb-6" to={item.href} onClick={onExit}>
                <motion.div
                  variants={menuItemVariants}
                  custom={isCurrent}
                  style={{ width: "15vw" }}
                >
                  {index + 1}
                </motion.div>
                <motion.div className="flex flex-col">
                  <motion.div
                    variants={menuItemVariants}
                    custom={isCurrent}
                    className="text-4xl"
                  >
                    {item.label}
                  </motion.div>
                  <motion.div
                    variants={menuItemVariants}
                    custom={isCurrent}
                    className=""
                  >
                    {item.description}
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </>
        );
      })}
    </motion.div>
  );
};

export default FullScreenMenu;
