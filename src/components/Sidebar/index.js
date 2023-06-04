// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
  ArrowForward,
  ArrowRight,
  NavBtnStartLink,
} from "./SidebarElements";



const Sidebar = ({ isOpen, toggle }) => {

  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link to="/platform" onClick={toggle}>
            Platform
          </Link>
          <Link to="solutions" onClick={toggle}>
            Solutions
          </Link>
          <Link to="developers" onClick={toggle}>
            Developers
          </Link>
          <Link to="shop" onClick={toggle}>
            Shop
          </Link>
          <Link to="about" onClick={toggle}>
            Company
          </Link>
          <Link to="/contact" onClick={toggle}>
            Contact
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Log in</SidebarRoute>
        <NavBtnStartLink
          to="/signup"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          dark="false"
          primary="false"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          exact="true"
        >
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </NavBtnStartLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
