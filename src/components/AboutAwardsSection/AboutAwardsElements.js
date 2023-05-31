import styled from "styled-components";

export const HeroContainer = styled.div`margin-top: 150px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 60px;
  height: 620px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(360deg, #304053 0%, #0b253b 100%),
      linear-gradient(360deg, #304053 0%, #0b253b 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1100px;
  position: absolute;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  margin-top: 10px;
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 10px;
    font-size: 28px;
  }
`;

export const HeroP = styled.p`
  margin-top: -10px; 
  color: #ffffff;;
  text-shadow: 0 1 black;
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



