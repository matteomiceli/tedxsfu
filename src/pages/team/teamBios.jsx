import React from "react";
import HorizontalScrollContainer from "../../components/HorizontalScrollContainer";
import Button from "../../components/Button";
import arrow from "../../static/images/upArrow.svg";
import linkedIn from "../../static/images/icons/linkedIn.svg";
import instagram from "../../static/images/icons/instagram.svg";

function TeamBios({ location, history }) {
  const team = location.state.team;

  return (
    <HorizontalScrollContainer>
      <div className="h-3/5 flex relative top-1/4">
        <div className="w-full mr-36 pl-24 h-full flex flex-col justify-center">
          <h1 className="text-5xl w-96 mb-8">{team.team}</h1>
          <p className="mb-8">{team.teamBio}</p>
          <Button
            className="cursor-pointer w-24"
            href={() => window.history.back()}
            secondary
            blank
          >
            Back
          </Button>
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
    <div className="bio-container text-white grid grid-cols-2 grid-rows-1 mr-36">
      <img
        className={`pr-8 self-${i % 2 === 0 ? "start" : "end"}`}
        src="https://source.unsplash.com/random"
        alt=""
      />
      <div className={`flex flex-col justify-${i % 2 === 0 ? "start" : "end"}`}>
        <h3 className="text-lg">{member.name}</h3>
        <p className="text-gray-400 mb-4">{member.role}</p>
        <p className="mb-6">{member.bio}</p>
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
        </div>
      </div>
    </div>
  );
}
