import React from "react";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import sponsors from "../content/sponsors";

//@ts-check
const SponsorshipPage = () => {
  return (
    <div style={{ marginTop: "25vh" }}>
      <HorizontalScrollContainer>
        <div className="flex flex-row flex-nowrap ml-12">
          <SponsorshipHeader />
          {sponsors.map((item, index) => {
            return (
              <SponsorshipTierSection
                key={index}
                tier={item.tier}
                index={index}
                sponsorList={item.list}
              />
            );
          })}
        </div>
      </HorizontalScrollContainer>
    </div>
  );
};

const SponsorshipHeader = () => (
  <div className="mb-24">
    <h1 className="text-display font-light">Partners</h1>
    <p className="text-xl w-96">
      We've partnered with these amazing organizations and businesses to make
      TEDxSFU happen this year.
    </p>
  </div>
);

const SponsorshipTierSection = ({ index, tier, sponsorList }) => (
  <div className="mr-8">
    <div className="flex">
      <div className="inline-block whitespace-nowrap uppercase tracking-widest mr-6 align-middle">
        {`0${index + 1}`}&nbsp;{tier} Sponsors
      </div>
      <div className="ruler" />
    </div>
    <div className="grid grid-rows-2 grid-flow-col">
      {sponsorList.map((sponsorInfo, index) => (
        <Sponsor key={index} {...sponsorInfo} />
      ))}
    </div>
  </div>
);

const Sponsor = ({ name, logo, about, website, facebook, twitter }) => (
  <div className="flex flex-nowrap mt-8">
    <div className="w-sponsor-logo col-start-1 row-start-1 row-end-4 mr-8">
      <img src={logo} alt={`${name}'s logo`} />
    </div>

    <div className="w-sponsor-text flex flex-col">
      <h3 className="text-3xl mb-4">{name}</h3>
      <div className="text-base">{about}</div>
      <div className="">
        <a href={website} target="_blank">
          Visit Site
        </a>
      </div>
    </div>
  </div>
);

export default SponsorshipPage;
