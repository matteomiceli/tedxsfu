import React from "react";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import sponsors from "../content/sponsors";
import Button from "../components/Button";
import SocialButton from "../components/SocialButton";

//@ts-check
const SponsorshipPage = () => {
  return (
    <div style={{ marginTop: "25vh" }}>
      <HorizontalScrollContainer>
        <div className="flex flex-row flex-nowrap ml-12">
          <SponsorshipHeader />
          <PlatinumTierSection sponsorList={sponsors.platinum} />
          <InKindTierSection sponsorList={sponsors.inkind} />
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

const PlatinumTierSection = ({ sponsorList }) => (
  <div className="pr-24">
    <div className="flex">
      <div className="inline-block whitespace-nowrap uppercase tracking-widest mr-6 align-middle">
        01&nbsp;Platinum Sponsors
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

const InKindTierSection = ({ sponsorList }) => (
  <div className="pr-12">
    <div className="flex">
      <div className="inline-block whitespace-nowrap uppercase tracking-widest mr-6 align-middle">
        02&nbsp;In-kind Sponsors
      </div>
      <div className="ruler" />
    </div>
    <div className="grid grid-rows-2 grid-flow-col">
      {sponsorList.map((sponsorInfo, index) => (
        <SponsorSmall key={index} {...sponsorInfo} />
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
      <div className="text-base mb-4">{about}</div>
      <div className="">
        <Button secondary blank href={website}>
          Visit Site
        </Button>
      </div>
    </div>
  </div>
);

const SponsorSmall = ({ name, logo, about, website, facebook, twitter }) => (
  <div className="flex flex-nowrap mt-8 mr-24">
    <div className="w-sponsor-logo col-start-1 row-start-1 row-end-4 mr-8">
      <img src={logo} alt={`${name}'s logo`} />
    </div>
    <div className="w-sponsor-text flex flex-col" style={{ maxWidth: 333 }}>
      <h3 className="text-3xl mb-4">{name}</h3>
      <div className="text-xs mb-4">{about}</div>
      <div className="flex items-center">
        <Button secondary blank href={website}>
          Visit Site
        </Button>
        <SocialButton
          className="ml-4"
          href="https://google.com"
          type="facebook"
        />
        <SocialButton
          className="ml-4"
          href="https://google.com"
          type="twitter"
        />
        <SocialButton
          className="ml-4"
          href="https://google.com"
          type="instagram"
        />
      </div>
    </div>
  </div>
);

export default SponsorshipPage;
