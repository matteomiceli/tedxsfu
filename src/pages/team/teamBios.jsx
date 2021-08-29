import React from 'react';
import FullWidthContainer from '../../components/FullWidthContainer';

function TeamBios({ location }) {
  const team = location.state.team;

  return(
    <FullWidthContainer>
      {team.members.map((member) => {
        
      })}
    </FullWidthContainer>
  );
}

export default TeamBios;
