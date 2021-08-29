import React from "react";
import HorizontalScrollContainer from "../../components/HorizontalScrollContainer";
import Button from "../../components/Button";
import arrow from '../../static/images/upArrow.svg'

function TeamBios({ location, history }) {
  const team = location.state.team;

  return (
    <HorizontalScrollContainer>
      <div className="h-full flex relative top-1/3">
        <div className="w-full mr-24 pl-24">
          <h1 className="text-5xl w-96 mb-8">{team.team}</h1>
          <p className="mb-8">{team.teamBio}</p>
          <Button className="cursor-pointer" href={() => window.history.back()} secondary blank>Back</Button>
        </div>

        <div className="flex h-full">
          {team.members.map((member, i) => {
            return <BioContainer member={member} i={i} />;
          })}
        </div>
      </div>
    </HorizontalScrollContainer>
  );
}

export default TeamBios;

function BioContainer({ member, i }) {
  return (
    <div className="bio-container text-white grid grid-cols-2 grid-rows-1 mr-24">
      <img className="pr-12" src="https://source.unsplash.com/random" alt="" />
      <div className="">
        <h3 className="text-lg">{member.name}</h3>
        <p className="text-gray-400">{member.role}</p>
        <p className="">{member.bio}</p>
      </div>
    </div>
  );
}
