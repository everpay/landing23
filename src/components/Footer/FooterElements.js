import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #27124a;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
    background: linear-gradient(180deg, rgb(48, 36, 62, 1) 0%, rgba(0, 0, 0, 0.6) 100%),
      linear-gradient(180deg, rgb(48, 36, 62, 1) 0%, rgba(20, 9, 38, 1)100%);
    z-index: 1;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    ${'' /* padding-top: 32px; */}
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  color: #fcfcfc;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const FooterLinkContact = styled.div`
  color: #fcfcfc;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 14px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const CopyrightLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: flex-start
  flex-direction: column;
  margin-right: 5px;
  padding-right: 8px;
  padding-left: 2px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FooterAddress = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-top: 1.25rem;
  margin-bottom: 0rem;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    color: #fff;
    transition: 0.1s ease-out;
  }
`;

export const FooterDivider = styled.div` 
    height: 1px;
    color: #fefefe;
    margin-top: 2px;
    margin-bottom: 20px;
`;

export const FooterDividerLine = styled.small` 
    height: 1px;
    color: #fefefe;
`;

export const SocialMedia = styled.section`
  max-width: 1200px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  margin-bottom: 1px;
  font-weight: 700;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 13px;
  margin-bottom: 24px;
  max-width: 50%;
`;

export const WebsiteLegal = styled.small`
  color: #fff;
  font-size: 13px;
  margin-bottom: 24px;
  max-width: 50%;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 22px;

  &:hover {
    color: #01bf71;
  }
`;

export const FooterMediaWrap = styled.section`
  max-width: 1100px;
  width: 100%;
  text-align:justify;
  padding: 5px;
`; 

export const FooterTermItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 40px auto 20px auto;
`;

export const FooterTermLine = styled.small`
  color: #fff;
  font-size: 13px;
  margin-bottom: 14px;
  max-width: 1200px;
`;
