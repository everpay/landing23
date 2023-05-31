import React from "react";
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from "./AboutHeroElements.js";

const AboutHeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>About Us</HeroH1>
        <HeroP>
        Our mission is to save on transfer fees and make accepting payments a simple process.
        </HeroP>
        <HeroBtnWrapper>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default AboutHeroSection;
