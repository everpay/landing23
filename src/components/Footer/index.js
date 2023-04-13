import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  WebsiteLegal,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
           <SocialLogo to="/" onClick={toggleHome}>
              Everpay
           </SocialLogo>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Platform</FooterLinkTitle>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Blog</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Solutions</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Shop</FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Ambassador</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Ambassador</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Resources</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>Everpay Corporation © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://facebook.com/everpay"
              target="_blank"
              area-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/everpay/"
              target="_blank"
              area-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/everpay"
              target="_blank"
              area-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.github.com/everpay/"
              target="_blank"
              area-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.com/channel/UC8dz0ZtyNQoqNFyZklGEy6w"
              target="_blank"
              area-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
          <WebsiteLegal>Terms | Privacy Policy | Legal Policy | GDPR | Status</WebsiteLegal>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
