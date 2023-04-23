import React, { useState } from "react";
import HeroSection from "../components/HeroSection/index";
import InfoSection from "../components/InfoSection";
import CtaSection from "../components/CtaSection/index";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <CtaSection />
    </>
  );
};

export default Home;
