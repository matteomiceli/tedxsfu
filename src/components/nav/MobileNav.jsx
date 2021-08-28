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
    <Button secondary onClick={onClick}>
      {isMenuOpened ? "Close" : "Menu"}
    </Button>
  );
};

export default MobileNav;
