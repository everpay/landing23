import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#2b2b2b" : "transparent")};
  height: 80px;
  margin-top: -80px;
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
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff; 
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.85rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const EverpayLogo = styled(LinkR)`
  background: url("../images/logo.png") no-repeat scroll center bottom;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 0px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff; 
    display: block;
    position: absolute;
    top: 15px;
    right: 10px;
    transform: translate(-100%, 60%);
    font-size: 1.25rem;
    cursor: pointer; 
    color: ${({ lightText }) => (lightText ? "#f7f7fa" : "#fff")};
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

export const NavLinks = styled(LinkS)`
  color: #fff;  
  display: flex;
  padding: 0 1rem;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  color: ${({ lightText }) => (lightText ? "#4c4d4d" : "#fff")};
  
  &.active {
    border-bottom: 3px solid #01bf71;
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
  color: ${({ scrollNav }) => (scrollNav ? "#fcfcfc" : "#fff")};
  border-radius: 50px;
  background: transparent;
  padding: 12px 22px;
  margin-right: 10px;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: #2dbe60;
  }  

  &.active {
    color: #26a151;
  }
`;

export const NavBtnStart = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #2dbe60;
  cursor: pointer;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 6px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const NavBtnStartLink = styled(LinkR)`
  color: #ddd;
  border-radius: 50px;
  border-color: rgba(0,0,0,.08);
  border-width: 1px !important;
  background-color: transparent;
  padding: 12px 22px;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
      background-color: #6f42c1c7;
      border-color: #6f42c1c7 !important;
      border-width: 2px;
      color: #fff;
  }  

  &.active {
    color: #fff;
  }
`;