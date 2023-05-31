import React, { useState } from "react";
import {
  InfoWrapper,
  Column1,
  Column2,
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  ImgWrap,
  Img,
} from "./CareerElements.js";
import { Button } from "../ButtonElements";

const CareerSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
      <InfoWrapper>
     <Column1>
      <HeroContent>
        <HeroH1>Join our Team</HeroH1>
        <HeroP>
        Looking for a challenging opportunity in the Fintech industry? Take the next step in your career and join the adventure at the leading PaaS provider!
        </HeroP> 
        <HeroBtnWrapper>
          <Button
            to="/careers"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            dark="false"
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            exact="false"
          >
            See open positions {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
     </Column1>

           <Column2>
              <ImgWrap>
                <Img src="https://res.cloudinary.com/lmj6rf6tz/image/upload/v1684049523/img/who-we-are.jpg" /> 
              </ImgWrap>
            </Column2>
       </InfoWrapper>
      </HeroBg>
    </HeroContainer>
  );
};

export default CareerSection;
