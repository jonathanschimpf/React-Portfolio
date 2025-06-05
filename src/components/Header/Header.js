import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";

function HeaderComp() {
  return (
    <>
      <span id="header">
        <Container className="centerHeader containerHeader" fluid>
          <Container className="messageMargins">
            <h1 className="display-4 blacked wow animate__animated animate__backInLeft responsiveH1Font">
              A DETAIL-ORIENTED DEVELOPER
            </h1>
            <h2 className="display-4 greyed wow animate__animated animate__backInRight responsiveH2Font">
              WHO LOVES TO CONTINUE LEARNING
            </h2>
          </Container>
        </Container>
      </span>
    </>
  );
}

export default HeaderComp;
