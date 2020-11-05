import React from "react";
import NavbarComp from "./components/Navbar/Navbar";
import HeaderComp from "./components/Header/Header";
import HeroImageComp from "./components/HeroImage/HeroImage";
import HelloJumbotronComp from "./components/HelloJumbotron/HelloJumbotron";
import PortfolioComp from "./components/Portfolio/Portfolio";
import SkillsComp from "./components/Skills/Skills";
import ContactComp from "./components/Contact/Contact";
import FooterComp from "./components/Footer/Footer";


function App() {
  return (

    <>
    
    <NavbarComp />
    <HeaderComp />
    <HeroImageComp />
    <HelloJumbotronComp />
    <br />
    <PortfolioComp />
    <br />
    <br />
    <br />

    <SkillsComp />
    <br />
    <br />
    <br />
    <br />
    <ContactComp />
    <br />
    <br />
    <br />
    <br />
    <FooterComp />
    <br />
    </>

  );
}

export default App;