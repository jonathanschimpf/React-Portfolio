
import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import { Link } from 'react-scroll'



function HeaderComp() {

    return (

        <>
          <span id="header">
            <Container className="centerHeader containerHeader" fluid>
                <Container className="messageMargins">
                <h1 className="display-4 blacked wow animate__animated animate__backInLeft responsiveH1Font">A DETAIL-ORIENTED DEVELOPER</h1>
                <br />
                <h2 className="display-4 greyed wow animate__animated animate__backInRight responsiveH2Font">WHO LOVES TO CONTINUE LEARNING</h2>
                <br />
                <Link
                    href=""
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={-50}
                    duration={800}
                    delay={150}
                >
                </Link>
                </Container>
            </Container>
          </span> 
        </>


    );
}

export default HeaderComp;



