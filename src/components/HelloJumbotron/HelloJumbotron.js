import React from "react";
import "./HelloJumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-scroll";


function HelloJumbotronComp() {

    return (

        <>

<Jumbotron id="jumboBGRND">
  <Container id="about">
    <h1 className="display-4">Hello.</h1>
    <a href="#bottom"><i style={{ fontColor: "black" }} href="#bottom" className="fa fa-angle-double-down fa-2x" aria-hidden="true" /></a>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p className="lead">I am a commercial photographer who is looking to merge my twelve years of experience in a
      digital marketing &amp; eCommerce setting with a new journey in web development. I love creative front-end
      designs and unique user experiences. Aside from technology, i enjoy cycling, hiking, and trying out new
      recipes. I am currently located in Philadelphia, Pennsylvania.</p>
  </Container>
</Jumbotron>


        </>


    );
}

export default HelloJumbotronComp;






//prior to conversion

{/* <section id="jumboBGRND" class="jumbotron jumbotron-fluid">
        <section class="container">
            <h1 class="display-4">Hello.</h1>
            <a href="#bottom"><i href="#bottom" class="fa fa-angle-double-down fa-2x" aria-hidden="true"></i></a>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p class="lead">I am a commercial photographer who is looking to merge my twelve years of experience in a
                digital marketing & eCommerce setting with a new journey in web development. I love creative front-end
                designs and unique user experiences. Aside from technology, i enjoy cycling, hiking, and trying out new
                recipes. I am currently located in Philadelphia, Pennsylvania.</p>
        </section> */}
