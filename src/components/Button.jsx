import React from "react";

const Button = ({ href = "#", children, blank, secondary }) => {
  return (
    <a
      className="transition-all duration-300 ease-in-out text-xs bg-white text-black rounded-full border border-ted-red py-1 px-2 mr-6 uppercase"
      href={href}
      target={blank ? "_blank" : "_self"}
    >
      {children}
    </a>
  );
};

export default Button;
