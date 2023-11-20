// GLOBALLY IMPORTED BOOTSTRAP STYLES BEFORE OTHER STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
// -----------------------------------------------------LATEST-
import './App.css';
import React from "react";
import NavbarComp from "./components/Navbar/Navbar";
import HeaderComp from "./components/Header/Header";
import HeroImageComp from "./components/HeroImage/HeroImage";
import HelloImJonathanComponent from "./components/HelloImJonathan/HelloImJonathan";
import ProjectsComponent from "./components/Projects/Projects";
import SkillsComponent from "./components/Skills/Skills";
import ContactComp from "./components/Contact/Contact";
import FooterComp from "./components/Footer/Footer";


function App() {
  return (

    <>
    
    <NavbarComp />
    <HeaderComp />
    <HeroImageComp />
    <HelloImJonathanComponent />
    <ProjectsComponent />
    <SkillsComponent />
    <ContactComp />
    <FooterComp />

    </>

  );
}

export default App;


