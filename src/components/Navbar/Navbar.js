import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-scroll'





function NavbarComp() {

    return (

        <>

            <Navbar className="navbar" fixed="top sticky-top" variant="dark" expand="lg" bg="black">
                    <Nav>

                        <li>
                            <Link
                                href=""
                                to="header"
                                activeClass="active"
                                className="navbar-brand"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                 ><span className="whiteFont">JONATHAN</span> 
                                 <span className="greyFont"
                                 > SCHIMPF</span>

                            </Link>
                        </li>

                    </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="d-lg-flex ml-auto">

                        <li className="nav-item ml-auto">
                            <Link
                                href=""
                                to="about"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                 >
                                ABOUT
                            </Link>
                        </li>

                        <li className="nav-item ml-auto">
                            <Link
                                href=""
                                to="portfolio"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                 >

                                PORTFOLIO

                                </Link>
                        </li>

                            <li className="nav-item ml-auto">
                            <Link
                                href=""
                                to="skills"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                >

                                SKILLS

                            </Link>
                         </li>

                            <li className="nav-item ml-auto">
                            <Link
                                href=""
                                to="contact"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                >

                                CONTACT

                            </Link>
                        </li>

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