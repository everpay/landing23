import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 80px;
  margin-top: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #ffffff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.85rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: translate(-100%, 60%);
    font-size: 1.25rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "#4c4d4d")};  
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "#4c4d4d")};  
  display: flex;
  padding: 0 1rem;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtnStart = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnStartLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #2dbe60;
  border-color: #2dbe60;
  padding: 10px 22px;
  color: #ffffff;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s  ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease;
    background: #01bf71;
    color: #fdfdfd;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: transparent;
  color: #010606;
  padding: 0 1rem;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: transparent;
    color: #01bf71;
  }  

  &.active {
    color: #01bf71;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;