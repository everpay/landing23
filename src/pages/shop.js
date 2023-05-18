import React, { useState } from "react";
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Shop />
    </>
  );
};

export default ShopPage;
