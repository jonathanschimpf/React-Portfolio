import './Navbar.css';
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavbarComp({ activeSection }) {
    const [expanded, setExpanded] = useState(false);

    // Function to handle the click event on nav links
    const handleNavClick = () => {
        // The total duration we should wait before collapsing the navbar
        // This includes both the delay and the duration of the scroll
        const totalDuration = 150 + 800; // delay + duration of scroll

        setTimeout(() => {
            setExpanded(false);
        }, totalDuration);
    };

    return (
        <Navbar bg="black" variant="dark" expand="lg" fixed="top" expanded={expanded}>
            <Navbar.Brand as={Link} to="header" id='brandOverride' spy={true} smooth={true} offset={-50} duration={500} delay={150} onClick={handleNavClick}>
                <span className="pointer-link whiteFont">JONATHAN</span>
                <span className="pointer-link greyFont"> SCHIMPF</span>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="about" spy={true} smooth={true} duration={500} delay={50} onClick={handleNavClick} className={activeSection === 'about' ? 'active' : ''}>ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="projects" spy={true} smooth={true} duration={500} delay={50} onClick={handleNavClick}className={activeSection === 'projects' ? 'active' : ''}>PROJECTS</Nav.Link>
                    <Nav.Link as={Link} to="interests" spy={true} smooth={true} duration={500} delay={50} onClick={handleNavClick} className={activeSection === 'interests' ? 'active' : ''}>INTERESTS</Nav.Link>
                    <Nav.Link as={Link} to="contact" spy={true} smooth={true} duration={500} delay={50} onClick={handleNavClick} className={activeSection === 'contact' ? 'active' : ''}>CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComp;
