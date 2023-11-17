import './Navbar.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavbarComp() {
    return (
        <Navbar bg="black" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand as={Link} to="header" id='brandOverride' spy={true} smooth={true} offset={-50} duration={800} delay={150}>
                    <span className="pointer-link whiteFont">JONATHAN</span>
                    <span className="pointer-link greyFont"> SCHIMPF</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="about" spy={true} smooth={true} duration={800} delay={150}>ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="projects" spy={true} smooth={true} duration={800} delay={150}>PROJECTS</Nav.Link>
                        <Nav.Link as={Link} to="skills" spy={true} smooth={true} duration={800} delay={150}>SKILLS</Nav.Link>
                        <Nav.Link as={Link} to="contact" spy={true} smooth={true} duration={800} delay={150}>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComp;
