import React from 'react';

function FullWidthContainer({children}) {
  return (
    <div className="h-screen w-full text-white">
      <div className="relative top-1/4 w-5/6 mx-auto h-full flex">
        {children}
      </div>
    </div>
  );
}

export default FullWidthContainer;
