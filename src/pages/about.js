import React, { useState } from "react";
import AboutHeroSection from "../components/AboutHeroSection/index";
import AboutCareerSection from "../components/AboutCareerSection/index";
import AboutInfoSection from "../components/AboutInfoSection";
import { aboutObjOne, aboutObjThree, aboutObjTwo } from "../components/AboutInfoSection/Data";
import AboutAwardsSection from "../components/AboutAwardsSection/index";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutHeroSection />
      <AboutInfoSection {...aboutObjOne} />
      <AboutInfoSection {...aboutObjTwo} />
      <AboutInfoSection {...aboutObjThree} /> 
      <AboutAwardsSection />
      <AboutCareerSection />
    </>
  );
};

export default About;
