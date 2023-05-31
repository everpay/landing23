import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContactHeroSection from "../components/ContactHeroSection/index";
import Contact from "../components/Contact";

const ContactUsPage = () => {
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ContactHeroSection />
      <Contact /> 
    </>
  );
};


export default ContactUsPage;
