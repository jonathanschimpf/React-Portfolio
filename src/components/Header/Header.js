
import React from "react";
import "./Header.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from 'react-scroll'



function HeaderComp() {

    return (

        <>

            <Jumbotron id="header" className="headerBgrndWhite centerHeader jumbotronHeader" fluid>
                <Container>

      
                <br />
                <br /> 
                <br />
                <br />
                <br />
                <br/>
                <br />
                <h1 className="display-4 blacked wow animate__animated animate__backInLeft responsiveH1Font">A DETAIL ORIENTED DEVELOPER</h1>
                <br />
                <h2 className="display-4 greyed wow animate__animated animate__backInRight responsiveH2Font">FROM PHILADELPHIA, PA.</h2>
                <br />
                <br />
                <Link
                                href=""
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                 >
                <span className="fa wow animate__animated animate__fadeIn animate__slower"><span className="fa wow animate__animated animate__bounce animate__delay-1s">
                <a><i className="fa fa-angle-double-down fa-2x wow animate__animated animate__backInUp blacked" aria-hidden="true" /></a></span></span>
                </Link>
                <br />
                <br /> 
                <br />
                <br />
                <br />
                <br/>
                <br />
                

                </Container>
            </Jumbotron>


        </>


    );
}

export default HeaderComp;



