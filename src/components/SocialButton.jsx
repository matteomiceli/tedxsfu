import React from "react";
import facebookIcon from "../static/images/icons/facebook.svg";
import instagramIcon from "../static/images/icons/instagram.svg";
import twitterIcon from "../static/images/icons/twitter.svg";
import openLink from "../static/images/icons/open-link.svg";

const SocialButton = ({ type, href, ...props }) => {
  return (
    <a href={href} target="_blank" {...props}>
      {type === "facebook" && <img src={facebookIcon} alt="facebook" />}
      {type === "instagram" && <img src={instagramIcon} alt="instagram" />}
      {type === "twitter" && <img src={twitterIcon} alt="twitter" />}
      {type === "website" && <img src={openLink} alt="openLink" />}
    </a>
  );
};

export default SocialButton;
