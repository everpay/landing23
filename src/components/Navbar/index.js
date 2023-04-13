import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElements";
import {
  ArrowForward,
  ArrowRight,
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  
 const NavBtnStart = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Everpay
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Platform
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Solutions
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Shop
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Company
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Resources
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Log In</NavBtnLink>
            </NavBtn>
           <NavBtnStart>
            <button>
            to="signup"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            dark="true"
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            exact="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </button>  
          </NavBtnStart>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
