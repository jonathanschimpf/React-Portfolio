import React from "react";
import NavbarComp from "./components/Navbar/Navbar";
import HeroImageComp from "./components/HeroImage/HeroImage";
import HelloJumbotronComp from "./components/HelloJumbotron/HelloJumbotron";
import ProjectsComp from "./components/Projects/Projects";
import SkillsComp from "./components/Skills/Skills";
import ContactComp from "./components/Contact/Contact";
import FooterComp from "./components/Footer/Footer";


function App() {
  return (

    <>
    
    <NavbarComp />
    <HeroImageComp />
    <HelloJumbotronComp />
    <br />
    <ProjectsComp />
    <br />
    <br />
    <br />

    <SkillsComp />
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