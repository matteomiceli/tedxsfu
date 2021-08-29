import React from "react";
import FullWidthContainer from "../../components/FullWidthContainer";

function TeamBios({ location }) {
  const team = location.state.team;

  return (
    <FullWidthContainer>
      {team.members.map((member, i) => {
        return <BioContainer member={member} i={i} />;
      })}
    </FullWidthContainer>
  );
}

export default TeamBios;


function BioContainer({ member, i }) {
  return (
    <div className="text-white">
      test
    </div>
  );
};