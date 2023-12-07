import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import NavbarComp from "./components/Navbar/Navbar";
import HeaderComp from "./components/Header/Header";
import HeroImageComp from "./components/HeroImage/HeroImage";
import HelloImJonathanComponent from "./components/HelloImJonathan/HelloImJonathan";
import ProjectsComponent from "./components/Projects/Projects";
import InterestsComponent from "./components/Interests/Interests";
import ContactComp from "./components/Contact/Contact";
import FooterComp from "./components/Footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["header", "about", "projects", "interests", "contact"];

      const navbarHeight = 49; // the height of the navbar

      const sectionOffsets = {
        header: { top: -navbarHeight, bottom: 0 },
        about: { top: -navbarHeight, bottom: -50},
        projects: { top: -navbarHeight, bottom: -50 },
        interests: { top: -navbarHeight, bottom: -50 },
        contact: { top: -navbarHeight, bottom: -50 },
      };

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = sectionOffsets[section].top || 0;
          const offsetBottom = sectionOffsets[section].bottom || 0;
          return (
            rect.top + offsetTop <= window.innerHeight &&
            rect.bottom + offsetBottom >= 0
          );
        }
        return false;
      });

      setActiveSection(currentSection || sections[0]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarComp activeSection={activeSection} />
      <HeaderComp />
      <HeroImageComp />
      <HelloImJonathanComponent />
      <ProjectsComponent />
      <InterestsComponent />
      <ContactComp />
      <FooterComp />
    </>
  );
}

export default App;
