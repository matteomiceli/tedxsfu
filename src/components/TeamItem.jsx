import React, { useEffect } from "react";
import { Link } from "gatsby";
import Image from "./Image";

import { motion } from "framer-motion";

function TeamItem({ team, width, delta, scroll }) {
  return (
    <div id={`team-${team.i}`} className="team-scroll bg-black h-full mr-8">
      <div className="flex h-full w-full">
        <div className="mt-0 lg:mt-6">
          <Link to={`/team/${team.href}`}>
            <Image
              className="team-image lg:w-auto lg:max-w-none"
              src={team.img}
              alt={team.team}
              loading="lazy"
            />
          </Link>
          <Link className="flex mt-4" to={`/team/${team.href}`}>
            <h2 className="font-semibold mr-6 sm:mr-10 md:mr-20 lg:mr-36 text-xs sm:text-sm lg:text-base">
              {team.team}
            </h2>
            <div className="flex w-full flex-wrap">
              {team.members.map((member, i) => {
                return <TeamMembers member={member} key={i} />;
              })}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const TeamMembers = ({ member }) => {
  return (
    <div className="min-w-max md:w-32 mr-3 mb-3">
      <h2 className="font-semibold text-xs sm:text-sm lg:text-base">
        {member.name}
      </h2>
      <p className="text-xs sm:text-sm lg:text-base">{member.pro}</p>
      <p className="text-xs sm:text-sm lg:text-base">{member.role}</p>
    </div>
  );
};

export default TeamItem;

{
  /* <Overlay delta={delta} width={width} scroll={scroll} /> */
}
