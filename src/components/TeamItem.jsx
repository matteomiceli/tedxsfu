import React, { useEffect } from "react";
import { Link } from "gatsby";

function TeamItem({ team, width, delta, scroll }) {
  return (
    <div id={`team-${team.i}`} className="team-scroll bg-black h-full">
      <div className="flex h-full w-full">
        <div className="relative top-1/4 mt-2">
          <Link to={`/team/${team.href}`}>
            <img
              className="team-image"
              src={team.img}
              alt={team.team}
              loading="lazy"
            />
          </Link>
          <Link className="flex mt-4" to={`/team/${team.href}`}>
            <h2 className="font-semibold mr-36">{team.team}</h2>
            {team.members.map((member, i) => {
              return <TeamMembers member={member} />;
            })}
          </Link>
        </div>
      </div>
    </div>
  );
}

const TeamMembers = ({ member }) => {
  return (
    <div className="w-1/6">
      <h2 className="font-semibold">{member.name}</h2>
      <p>{member.role}</p>
      <p>{member.pro}</p>
    </div>
  );
};

export default TeamItem;

{
  /* <Overlay delta={delta} width={width} scroll={scroll} /> */
}
