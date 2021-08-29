import React from 'react';
import HorizontalScrollContainer from './HorizontalScrollContainer';


function FullWidthContainer({children}) {
  return (
    <div className="h-screen w-full text-white">
      <HorizontalScrollContainer>
        <div className="relative top-1/4 mx-auto h-full flex overflow-x-scroll">
          {children}
        </div>
      </HorizontalScrollContainer>
    </div>
  );
}

export default FullWidthContainer;
