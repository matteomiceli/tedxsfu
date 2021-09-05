import React from "react";
import { motion } from "framer-motion";

import HorizontalScrollContainer from "../../components/HorizontalScrollContainer";
import Button from "../../components/Button";
import arrow from "../../static/images/upArrow.svg";
import linkedIn from "../../static/images/icons/linkedIn.svg";
import instagram from "../../static/images/icons/instagram.svg";
import facebook from "../../static/images/icons/facebook.svg";

import Image from "../../components/Image";

import iconBack from "../../../static/images/icons/icon-backward.svg";
import GrowingTextAnimation from "../../components/animation/GrowingTextAnimation";
import { SimpleDivAnimation } from "../../components/animation/SimpleTransitionAnimation";

function TeamBios({ location, history, pageContext }) {
  // Entries in the team.js object
  const { teamInfo } = pageContext;

  // don't build the page if teamInfo does not exist
  if (!teamInfo) return require.resolve("../404");

  return (
    <HorizontalScrollContainer>
      <div className="h-2/5 flex relative top-1/4 transform lg:h-3/5 lg:translate-y-0">
        <div className="w-full mr-36 pl-8 lg:pl-24 h-full flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl w-96 mb-8">
            <GrowingTextAnimation>{teamInfo.team}</GrowingTextAnimation>
          </h1>
          <SimpleDivAnimation staggerIndex={teamInfo.members.length + 1}>
            <p className="mb-8">{teamInfo.teamBio}</p>
            <Button className="mr-auto" icon={iconBack} href="/team" secondary>
              Back
            </Button>
          </SimpleDivAnimation>
        </div>

        <div className="flex h-full">
          {teamInfo.members.map((member, i) => {
            return (
              <BioContainer
                member={member}
                i={i}
                key={i}
                total={teamInfo.members.length}
              />
            );
          })}
        </div>
      </div>
    </HorizontalScrollContainer>
  );
}

export default TeamBios;

function BioContainer({ member, i, total }) {
  return (
    <SimpleDivAnimation
      staggerIndex={total - i}
      className={
        member.imgWide
          ? "bio-container-wide text-white flex flex-col mr-36"
          : "bio-container text-white flex mr-36"
      }
    >
      <img
        className={`teambio-img pr-8 self-${i % 2 === 0 ? "start" : member.imgWide  ? 'start' : "end"}`}
        src={member.img}
        alt=""
      />
      <div
        className={`flex flex-col justify-${i % 2 === 0 ? "start" : "end"} ${
          member.imgWide ? "mt-6" : ""
        }`}
      >
        <h3 className="text-base lg:text-lg">{member.name}</h3>
        <p className="text-gray-400 mb-4 text-xs lg:text-sm">{member.role}</p>
        <p className="mb-6 text-xs lg:text-sm">{member.bio}</p>
        <div className="socials flex">
          {member.socials.linked ? (
            <a className="mr-4" href={member.socials.linked} target="_blank">
              <img className="h-6" src={linkedIn} alt="linkedIn" />
            </a>
          ) : (
            ""
          )}
          {member.socials.instagram ? (
            <a className="mr-4" href={member.socials.instagram} target="_blank">
              <img className="h-6" src={instagram} alt="instagram" />
            </a>
          ) : (
            ""
          )}
          {member.socials.facebook ? (
            <a className="mr-4" href={member.socials.facebook} target="_blank">
              <img className="h-6" src={facebook} alt="facebook" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </SimpleDivAnimation>
  );
}
