
import React from "react";
import "./HelloImJonathan.css";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";


function HelloComponent() {

    return (

        <>
        
  <div id="about">
    <Container className="containerBackground centerHelloJumbotron" fluid>
      <Container className="helloMargins">
        <h1 className="wow animate__animated animate__fadeInDown animate_slower helloSize"><span className="wow animate__animated animate__fadeIn animate__slower">HELLO.</span></h1>

        <Link
          href=""
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          delay={150}
        >
        </Link>

        
        <p className="lead helloParagraph wow animate__animated animate__fadeInUp animate_slower"><span className="wow animate__animated animate__fadeIn animate_slower"><span style={{ fontWeight: "bold", color: "white" }}>I am a Junior Web Developer</span> who has a commercial art background with a specialized focus in visual content creation, and over twelve years of experience in a digital marketing and eCommerce setting. Leveraging an extensive creative history with a current journey in Web Development. Deeply passionate about stylistic front-end designs and unique user experiences. Minimalistic approach to aesthetically pleasing mobile-first responsive layouts. Perpetual student with a desire to continue to learn and evolve along with industry standards/trends.</span></p>
      
      </Container>
    </Container>
  </div>

      </>

    );
}

export default  HelloComponent;
