import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: rgb(48, 36, 62, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* padding: 0 10px 0 60px; */}
  ${'' /* height: 560px; */}
  height: 400px;
  position: relative;
  z-index: 1;


`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1100px;
  position: absolute;
  padding: 40px 30px 8px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  margin-top: 20px;
  color: #fff;
  font-size: 76px;
  font-weight: 700;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 56px;
    margin-top: -20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: -20px;
    font-size: 42px;
  }
`;

export const HeroP = styled.p`
  margin-top: 2px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: -10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
    padding: 18px 30px !important;
    color: #fff!important;
  display: flex;
  flex-direction: column;
  max-width: 900px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
