import React from "react";
import "./Header.css";
import { Jumbotron, Container } from "react-bootstrap";



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
                <br />
                <br />
                <br/>
                <br />
                <h1 className="display-4 blacked animate__backInLeft animate__animated animate__slow">CREATIVE  WEB.DEV</h1>
                <br />
                <h2 className="display-4 greyed animate__animated animate__slow animate__backInRight">PHILA. PA</h2>
                <br />
                <br />
                <a><i className="fa fa-angle-double-down fa-2x animate__backInUp animate__animated animate__slow " aria-hidden="true" /></a>
                <br />
                <br />

                </Container>
            </Jumbotron>


        </>


    );
}

export default HeaderComp;



