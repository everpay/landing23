import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;


export const ArrowForward = styled(MdArrowForward)`
  margin-left: 2px;
  font-size: 0.8rem;
  cursor: pointer;
  color: "#2b2b2b";

  &:hover {
    transition: all 0.5s ease-in-out;
      color: #fff;
  }  

  &.active {
    color: #fff;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 2px;
    top: 2px;
    font-size: 0.8rem;
    cursor: pointer;
    color: "#2b2b2b";

  &:hover {
    transition: all 0.5s ease-in-out;
      color: #fff;
  }  

  &.active {
    color: #fff;
  }
`;

export const NavBtnStartLink = styled(LinkR)`
  ${'' /* color: #2b2b2b; */}
  border-radius: 50px;
  border-color: rgba(0,0,0,.08);
  border-width: 1px !important;
  background-color: transparent;
  padding: 10px;
  white-space: nowrap;
  ${'' /* font-size: 1rem; */}
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
      background-color: #2f2e41;
      border-color: #2f2e41 !important;
      border-width: 2px;
      color: #fff;
  }  

  &.active {
    color: #fff;
  }
`;
