import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComp() {

    return (

        <>

        <Navbar className="navbar stickyNav"  fixed="top" variant="dark" expand="lg" bg="black">
        <Navbar.Brand href="">JONATHAN SCHIMPF</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="d-lg-flex ml-auto" id="navbarColor01">
            
                <Nav.Link className="nav-item active" href="">ABOUT <span className="sr-only">(ABOUT)</span>
                </Nav.Link>
                <Nav.Link className="nav-item" href="">PORTFOLIO
                </Nav.Link>
                <Nav.Link className="nav-item" href="">SKILLS
                </Nav.Link>
                <Nav.Link className="nav-item" href="">CONTACT
                </Nav.Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar>

        </>


    );
}

export default NavbarComp;




{/* <>

<nav className="navbar navbar-expand-lg navbar-dark stickyNav">
<a className="navbar-brand" href="">JONATHAN SCHIMPF</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<section className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarColor01">
    <ul className="navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="">ABOUT <span className="sr-only">(ABOUT)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="">PORTFOLIO</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="">SKILLS</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="">CONTACT</a>
        </li>
    </ul>
</section>
</nav>

</> */}