import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import sponsors from "../content/sponsors";
import Button from "../components/Button";
import Image from "../components/Image";
import SocialButton from "../components/SocialButton";
import CloseIcon from "../static/images/icons/close.svg";
import { AnimationConfig } from "../AnimationConfig";
import { useMobileBreakpoint } from "../hooks/useBreakpoint";
import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import GrowingTextAnimation from "../components/animation/GrowingTextAnimation";

const MOBILE_SPONSOR_ICON_HEIGHT = "6rem";

//@ts-check
const SponsorshipPage = () => {
  const isMobile = !useMobileBreakpoint();

  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 mt-flowline-sm sm:mt-flowline">
      {isMobile && <SponsorshipHeader isMobile />}
      <HorizontalScrollContainer>
        <div className="flex flex-col sm:flex-row flex-nowrap mx-document mt-1">
          {!isMobile && <SponsorshipHeader />}
          <motion.div
            className="flex flex-row flex-nowrap"
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                ease: AnimationConfig.EASING,
                duration: AnimationConfig.NORMAL,
              },
            }}
            exit={{
              opacity: 0,
              x: 0,
              transition: {
                ease: AnimationConfig.EASING_INVERTED,
                duration: AnimationConfig.NORMAL,
              },
            }}
          >
            <SponsorSectionPrimary
              sponsorList={sponsors.platinum}
              isMobile={isMobile}
            />
            <SponsorSectionSecondary
              label="Gold Sponsors"
              numbering="02"
              sponsorList={sponsors.gold}
              isMobile={isMobile}
            />
            <SponsorSectionSecondary
              label="Silver Sponsors"
              numbering="03"
              sponsorList={sponsors.silver}
              isMobile={isMobile}
            />
            <SponsorSectionSecondary
              label="City Sponsor"
              numbering="04"
              sponsorList={sponsors.city}
              isMobile={isMobile}
            />
            <SponsorSectionSecondary
              label="AV Sponsor"
              numbering="05"
              sponsorList={sponsors.avSponsors}
              isMobile={isMobile}
            />
            <SponsorSectionTertiary
              numbering="06"
              sponsorList={sponsors.inkind}
              isMobile={isMobile}
            />
          </motion.div>
        </div>
      </HorizontalScrollContainer>
    </div>
  );
};

const SponsorshipHeader = ({ isMobile }) => (
  <motion.div
    className="ml-document sm:ml-0 md:mr-36 mb-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1 className="text-4xl sm:text-display font-light sm:mb-4">
      <GrowingTextAnimation>Our Partners</GrowingTextAnimation>
    </h1>
    <p className="text-sm sm:text-xl w-96 sm:leading-6 opacity-60">
      <GrowingTextAnimation fontWeight={400}>
        We've partnered with these amazing organizations and businesses to make
        TEDxSFU happen this year.
      </GrowingTextAnimation>
    </p>
  </motion.div>
);

const SponsorSectionPrimary = ({ sponsorList, isMobile }) => (
  <div className="pr-8 sm:pr-12">
    <div className="flex opacity-60">
      <div className="text-sm sm:text-base inline-block whitespace-nowrap uppercase tracking-widest mr-6 align-middle">
        01<span className="ml-2">Platinum Sponsors</span>
      </div>
      <div className="ruler" />
    </div>
    <div className="grid grid-rows-3 sm:grid-rows-2 grid-flow-col gap-x-4 gap-y-4 sm:gap-x-24 sm:gap-y-8 mt-6 sm:mt-10">
      {sponsorList.map((sponsorInfo, index) => (
        <SponsorBig key={index} {...sponsorInfo} isMobile={isMobile} />
      ))}
    </div>
  </div>
);

const SponsorSectionSecondary = ({
  sponsorList,
  isMobile,
  label,
  numbering,
}) => (
  <div className="pr-12">
    <div className="flex opacity-60">
      <div className="text-sm sm:text-base inline-block whitespace-nowrap uppercase tracking-widest mr-6 align-middle">
        {numbering}
        <span className="ml-2">{label}</span>
      </div>
      <div className="ruler" />
    </div>
    <div
      className="flex mt-4 sm:mt-8"
      style={{
        height: "50vh",
      }}
    >
      {sponsorList.map((sponsorInfo, index) => (
        <SponsorMedium key={index} {...sponsorInfo} isMobile={isMobile} />
      ))}
    </div>
  </div>
);

const SponsorSectionTertiary = ({ sponsorList, isMobile, numbering }) => (
  <div className="pr-12">
    <div className="flex opacity-60">
      <div className="text-sm sm:text-base inline-block whitespace-nowrap uppercase tracking-widest mr-6 align-middle">
        {numbering}
        <span className="ml-2">In Kind Sponsors</span>
      </div>
      <div className="ruler" />
    </div>
    <div
      className="grid grid-rows-sponsors sm:grid-rows-2 grid-flow-col gap-x-4 gap-y-4 sm:gap-x-24 sm:gap-y-8 mt-6 sm:mt-8"
      style={{
        height: "50vh",
      }}
    >
      {sponsorList.map((sponsorInfo, index) => (
        <SponsorSmall key={index} {...sponsorInfo} isMobile={isMobile} />
      ))}
    </div>
  </div>
);

const SponsorBig = ({
  name,
  logo,
  about,
  website,
  facebook,
  twitter,
  isMobile,
  instagram,
  linkedIn
}) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <>
      <SponsorInfoModal
        name={name}
        logo={logo}
        about={about}
        website={website}
        facebook={facebook}
        twitter={twitter}
        isShowing={isModalShowing}
        onExit={() => setIsModalShowing(false)}
      />
      <div className="flex flex-nowrap">
        <div className="w-72 sm:w-56">
          <a
            href="#"
            className="cursor-pointer sm:cursor-default"
            onClick={() => isMobile && setIsModalShowing(true)}
          >
            <Image src={logo} alt={`${name}'s logo`} />
          </a>
        </div>
        <div className="w-sponsor-text ml-8 hidden sm:flex flex-col">
          <h3 className="text-3xl mb-4">{name}</h3>
          <div className="text-base mb-4">{about}</div>
          <div className="flex items-center">
            <Button secondary blank href={website}>
              Visit Site
            </Button>
            {facebook && (
              <SocialButton className="ml-4" href={facebook} type="facebook" />
            )}
            {twitter && (
              <SocialButton className="ml-4" href={twitter} type="twitter" />
            )}
            {instagram && (
              <SocialButton
                className="ml-4"
                href={instagram}
                type="instagram"
              />
            )}
            {linkedIn && (
              <SocialButton
                className="ml-4"
                href={linkedIn}
                type="linkedIn"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const SponsorMedium = ({
  name,
  logo,
  about,
  website,
  facebook,
  twitter,
  instagram,
  isMobile,
  linkedIn
}) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <>
      <SponsorInfoModal
        name={name}
        logo={logo}
        about={about}
        website={website}
        facebook={facebook}
        twitter={twitter}
        isShowing={isModalShowing}
        onExit={() => setIsModalShowing(false)}
      />
      <div className="flex flex-nowrap flex-col">
        <div className="w-24 h-24 sm:w-full sm:h-32 mb-4">
          <a
            href="#"
            className="cursor-pointer sm:cursor-default"
            onClick={() => isMobile && setIsModalShowing(true)}
          >
            <Image
              className="h-full object-contain"
              src={logo}
              alt={`${name}'s logo`}
            />
          </a>
        </div>
        <div
          className="w-sponsor-text ml-4 hidden sm:flex flex-col"
          style={{ maxWidth: 333 }}
        >
          <h3 className="text-3xl mb-4">{name}</h3>
          <div className="text-xs mb-4">{about}</div>
          <div className="flex items-center">
            <Button secondary blank href={website}>
              Visit Site
            </Button>
            {facebook && (
              <SocialButton className="ml-4" href={facebook} type="facebook" />
            )}
            {twitter && (
              <SocialButton className="ml-4" href={twitter} type="twitter" />
            )}
            {instagram && (
              <SocialButton
                className="ml-4"
                href={instagram}
                type="instagram"
              />
            )}
            {linkedIn && (
              <SocialButton
                className="ml-4"
                href={linkedIn}
                type="linkedIn"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const SponsorSmall = ({
  name,
  logo,
  about,
  website,
  facebook,
  twitter,
  instagram,
  isMobile,
  linkedIn
}) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <>
      <SponsorInfoModal
        name={name}
        logo={logo}
        about={about}
        website={website}
        facebook={facebook}
        twitter={twitter}
        isShowing={isModalShowing}
        onExit={() => setIsModalShowing(false)}
      />
      <div className="flex flex-nowrap">
        <div className="w-24 h-24 sm:w-32 sm:h-32">
          <a
            href="#"
            className="cursor-pointer sm:cursor-default"
            onClick={() => isMobile && setIsModalShowing(true)}
          >
            <Image
              className="max-h-full object-contain"
              src={logo}
              alt={`${name}'s logo`}
            />
          </a>
        </div>
        <div
          className="w-sponsor-text ml-4 hidden sm:flex flex-col"
          style={{ maxWidth: 333 }}
        >
          <h3 className="text-3xl mb-4">{name}</h3>
          <div className="text-xs mb-4">{about}</div>
          <div className="flex items-center">
            <Button secondary blank href={website}>
              Visit Site
            </Button>
            {facebook && (
              <SocialButton className="ml-4" href={facebook} type="facebook" />
            )}
            {twitter && (
              <SocialButton className="ml-4" href={twitter} type="twitter" />
            )}
            {instagram && (
              <SocialButton
                className="ml-4"
                href={instagram}
                type="instagram"
              />
            )}
            {linkedIn && (
              <SocialButton
                className="ml-4"
                href={linkedIn}
                type="linkedIn"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const CloseButton = (props) => (
  <a href="#" {...props}>
    {/* center the origin point */}
    <img src={CloseIcon} alt="close company info" />
  </a>
);

const SponsorInfoModal = ({
  isShowing,
  onExit,
  name,
  logo,
  about,
  website,
  facebook,
  twitter,
  instagram,
  linkedIn
}) => {
  // for quick exiting
  const containerRef = useRef();
  useClickOutside(containerRef, () => isShowing && onExit(), isShowing);
  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className="fixed left-0 right-0 top-0 bottom-0 z-20 backdrop-filter backdrop-blur-lg cursor-pointer"
          style={{ backgroundColor: "rgba(0,0,0,.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={containerRef}
            className="grid gap-4 grid-cols-sponsorInfoModal sm:mx-auto mx-document mt-flowline-sm cursor-auto"
            style={{ maxWidth: 600 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: AnimationConfig.EASING,
                duration: AnimationConfig.NORMAL,
              },
            }}
            exit={{
              opacity: 0,
              y: 50,
              transition: {
                ease: AnimationConfig.EASING,
                duration: AnimationConfig.NORMAL,
              },
            }}
          >
            <Image
              className="col-start-1 max-h-72 mb-4"
              src={logo}
              alt={`${name}'s logo`}
            />
            <CloseButton className="mcol-start-2" onClick={onExit} />
            <div className="flex flex-col">
              <h3 className="text-xs font-bold mb-2">{name}</h3>
              <div className="text-xs mb-4">{about}</div>
              <div className="flex items-center">
                <Button secondary blank href={website}>
                  Visit Site
                </Button>
                {facebook && (
                  <SocialButton
                    className="ml-4"
                    href={facebook}
                    type="facebook"
                  />
                )}
                {twitter && (
                  <SocialButton
                    className="ml-4"
                    href={twitter}
                    type="twitter"
                  />
                )}
                {instagram && (
                  <SocialButton
                    className="ml-4"
                    href={instagram}
                    type="instagram"
                  />
                )}
                {linkedIn && (
                  <SocialButton
                    className="ml-4"
                    href={linkedIn}
                    type="linkedIn"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SponsorshipPage;
