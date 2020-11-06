
import React from "react";
import "./Header.css";
import { Jumbotron, Container } from "react-bootstrap";
// import { Link } from 'react-scroll'



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
                <h1 className="display-4 blacked wow animate__animated animate__backInLeft">A DETAIL ORIENTED DEVELOPER</h1>
                <br />
                <h2 className="display-4 greyed wow animate__animated animate__backInRight">FROM PHILADELPHIA, PA.</h2>
                <br />
                <br />
                <a><i className="fa fa-angle-double-down fa-2x wow animate__animated animate__backInUp" aria-hidden="true" /></a>
                <br />
                <br />

                </Container>
            </Jumbotron>


        </>


    );
}

export default HeaderComp;



