import React from "react";
import "./HelloJumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-scroll";


function HelloJumbotronComp() {

    return (

        <>

<Jumbotron id="jumboBGRND" fluid>
  <Container id="about">
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1 className="display-3">WE</h1>
    <p className="lead"></p>
    <a><i style={{ color: "black" }} className="fa fa-angle-double-down fa-2x" aria-hidden="true" /></a>
    <br />
    <br />

  </Container>
</Jumbotron>


        </>


    );
}

export default HelloJumbotronComp;



