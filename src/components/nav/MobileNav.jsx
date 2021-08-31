// Mobile nav at the bottom
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Button from "../Button";
import FullScreenMenu from "./FullScreenMenu";
import EventInfo from "../../content/eventInfo";

const MobileNav = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="flex mx-document mb-document justify-between">
      <AnimatePresence>
        {isMenuOpened && (
          <FullScreenMenu onExit={() => setIsMenuOpened(false)} />
        )}
      </AnimatePresence>
      <Button cta className="flex-grow-2" href={EventInfo.ticketUrl} blank>
        Get Tickets Now
      </Button>
      <MenuButton
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      />
    </div>
  );
};

const MenuButton = ({ onClick, isMenuOpened }) => {
  return (
    <Button
      secondary
      onClick={onClick}
      icon={<HamburgerIcon isMenuOpened={isMenuOpened} />}
    >
      {isMenuOpened ? "Close" : "Menu"}
    </Button>
  );
};

const HamburgerIcon = ({ isMenuOpened }) => (
  <span
    className={`hamburger hamburger--spin mr-1 h-4 ${
      isMenuOpened ? "is-active" : ""
    }`}
    style={{ maxHeight: "1rem", scale: 0.5 }}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </span>
);

export default MobileNav;
