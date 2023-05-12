import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtnLink,
  NavBtn,
  ArrowForward,
  ArrowRight,
  NavBtnStartLink,
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

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (

    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}><Logo><img src='../Logo.png' width={136} height={34}  alt='Everpay' /></Logo>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/platform"
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
                  to="/solutions"
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
                  to="/developers"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Developers
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/shop"
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
                  to="/about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Company
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/login">Log in</NavBtnLink>
 <NavBtnStartLink
            to="signup"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            dark="false"
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            exact="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </NavBtnStartLink>
            
          </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
