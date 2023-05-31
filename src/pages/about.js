import React, { useState } from "react";
import AboutHeroSection from "../components/AboutHeroSection/index";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
<div>
<H1> Pricing</h1>
</div>

      <AboutHeroSection />
    </>
  );
};

export default Pricing;
