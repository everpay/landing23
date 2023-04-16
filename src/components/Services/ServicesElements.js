import styled from "styled-components";
export const ServicesContainer = styled.div`
  height: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(43, 43, 43);

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesBreak = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
    height: 1px;
    color: transparent;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale() (1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 164px;
  width: 164px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  margin-bottom: 14px;
    font-size: 48px;
    font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 38px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1px;
`;

export const ServicesTopLineH2 = styled.h2`
    color: rgb(1, 191, 113);
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const ServicesTopLineP = styled.p`
    max-width: 920px;
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 24px
  text-align: center;
  color: #fff;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
