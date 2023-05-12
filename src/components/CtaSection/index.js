import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from "./CtaElements.js";
import { Button } from "../ButtonElements";

const CtaSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Ready to get started?</HeroH1>
        <HeroP>
        Create an account instantly and start accepting payments.
        </HeroP> 
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            light="true"
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            exact="false"
          >
            Contact Sales {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default CtaSection;
