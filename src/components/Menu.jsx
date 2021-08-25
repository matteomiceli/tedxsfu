import React from "react";
import menu from "../static/images/menu.svg";

function Menu({ isActive, setActive, page }) {
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
        <a
          className={
            page === 1
              ? "text-white text-sm mr-6 hover:text-gray-400 font-semibold"
              : "text-white text-sm mr-6 hover:text-gray-400"
          }
          href="/"
        >
          <p>1</p>
          <li>SPEAKERS</li>
        </a>
        <a className="text-white text-sm mr-6 hover:text-gray-400" href="#">
          <p>2</p>
          <li>LEGACY</li>
        </a>
        <a className="text-white text-sm mr-6 hover:text-gray-400" href="/team">
          <p>3</p>
          <li>TEAM</li>
        </a>
        <a className="text-white text-sm mr-6 hover:text-gray-400" href="#">
          <p>4</p>
          <li>SPONSORS</li>
        </a>
      </ul>
      <div
        className={
          isActive === true
            ? "transition-all duration-300 ease-in-out max-w-0 max-h-0 opacity-0 overflow-hidden"
            : "flex items-center transition-all duration-300 ease-in-out h-24"
        }
      >
        <a
          className="transition-all duration-300 ease-in-out text-xs bg-white rounded-full border border-ted-red py-1 px-2 mr-6"
          href="#"
          target="_blank"
        >
          GET TICKETS NOW
        </a>
        <img
          className="h-8 cursor-pointer p-2"
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

export default Menu;
