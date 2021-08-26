import { Link } from "gatsby";
import React from "react";
import menu from "../static/images/menu.svg";
import Button from "./Button";

const MENU_ITEMS = [
  {
    label: "Speakers",
    href: "/",
  },
  {
    label: "Partners",
    href: "/sponsors",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "About",
    href: "/about",
  },
];

function Menu({ isActive, setActive, page }) {
  // grab the path from url
  const currentPath = (() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
  })();

  return (
    <nav className="flex">
      <ul
        className={
          isActive === true
            ? "flex font-NeueHaas transition-all duration-300 ease-in-out h-24 items-center pr-4 pl-16"
            : "transition-all duration-300 ease-in-out max-w-0 max-h-0 opacity-0 overflow-hidden transform translate-x-12 h-24 items-center"
        }
        onMouseEnter={() =>
          setActive(isActive === true ? (isActive = false) : (isActive = true))
        }
        onMouseLeave={() =>
          setActive(isActive === true ? (isActive = false) : (isActive = true))
        }
      >
        {MENU_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            href={item.href}
            pageId={index}
            isCurrent={item.href === currentPath}
          >
            {item.label}
          </MenuItem>
        ))}
      </ul>
      <div
        className={
          isActive === true
            ? "transition-all duration-300 ease-in-out max-w-0 max-h-0 opacity-0 overflow-hidden"
            : "flex items-center transition-all duration-300 ease-in-out h-24"
        }
      >
        <Button cta>Get Tickets Now</Button>
        <img
          className="h-8 cursor-pointer p-2 ml-6"
          src={menu}
          alt="Menu Icon"
          onMouseEnter={() =>
            setActive(
              isActive === true ? (isActive = false) : (isActive = true)
            )
          }
          onMouseLeave={() =>
            setActive(
              isActive === true ? (isActive = false) : (isActive = true)
            )
          }
        />
      </div>
    </nav>
  );
}

function MenuItem({ pageId, href, isCurrent, children }) {
  return (
    <Link
      className={
        isCurrent
          ? "text-white text-sm mr-6 hover:text-gray-400 font-semibold"
          : "text-white text-sm mr-6 hover:text-gray-400"
      }
      to={href}
    >
      <p>{pageId}</p>
      <li className={"uppercase tracking-wider"}>{children}</li>
    </Link>
  );
}

export default Menu;
