
import React from "react";
import "./HelloJumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-scroll";


function HelloJumbotronComp() {

    return (

        <>

<Jumbotron id="jumboBGRND" fluid>
  <Container>
   
    <br />
    <br />
    <br id="about" />
    <br/>
    <br/>
    <h1 className="wow animate__animated animate__fadeInDown animate_slower helloSize"><span className="wow animate__animated animate__fadeIn animate__slower">HELLO.</span></h1>

    <Link
                                href=""
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                 >
                                
    <span className="fa wow animate__animated animate__fadeInUp animate__slower"><a><i style={{ color: "white" }} className="fa fa-angle-double-down fa-2x wow animate__animated animate__bounce animate__delay-1s" aria-hidden="true" /></a></span>
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p className="lead">Web Developer residing in Philadelphia, Pa. Photographic background with a specialized focus in commercial content creation and over twelve years of experience in a digital marketing and eCommerce setting. Leveraging an extensive creative background with a new journey in web development. Deeply passionate about stylistic front-end designs and unique user experiences. Minimalistic approach to aesthetically pleasing mobile-first responsive layouts. Perpetual student with a desire to continue to learn and evolve along with industry standards and trends. MERN stack certified and excited for opportunities to grow. Aside from art and technology, I enjoy cycling, hiking, and trying out new recipes at home. This portfolio was built using React JS. It features some of my recent projects with links to each GitHub repository for in-depth descriptions + codebase.</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    


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
