import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #fff;
  display: grid;
    z-index: 1;
    height: 520px;
    max-width: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  padding: 20px 30px 60px 20px;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const HeroBg = styled.div`
  background: #ffffff;
  position: relative;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 20px;
    height: 360px;
    max-width: 840px;
    background: linear-gradient(180deg, rgb(55, 255, 61) 0%, rgb(187, 255, 189) 100%),
      linear-gradient(190deg, rgb(55, 255, 61) 0%, rgb(187, 255, 189) 100%);
    z-index: 1;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  background: #fff;
    max-width: 860px;
    grid-auto-columns: minmax(auto, 1fr);
    -webkit-box-align: center;
    align-items: center;
    grid-template-areas: "col2 col1";
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 480px;
  position: relative;
  padding: 36px 25px 10px 2px;
  display: flex;
  flex-direction: column;
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 480px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImgWrap = styled.div`
  max-width: 380px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 40px 20px 5px 15px;
  padding-right: 10px;
  border-radius: 0.3rem !important;    
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.175) !important;
  max-width: 100%;
  height: auto;
  vertical-align: inherit;
  z-index: 3;
  position: relative;
`;


export const HeroH1 = styled.h1`
  margin-top: 10px;
  color: #4c4d4d;
  font-size: 42px;
  font-weight: 700;
  align-items: left;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: -5px;
  }

  @media screen and (max-width: 480px) {
    margin-top: -5px;
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: -10px;
  color: #4c4d4d;
  font-size: 18px;
  text-align: left;
  max-width: 460px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.div`
    padding: 18px 30px !important;
    color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
