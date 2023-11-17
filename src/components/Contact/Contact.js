import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";

function ContactComp() {
  return (
    <>
      <br id="contact" />
      <div className="contactSpacing"></div>
      <Container className="centeredContainer contactTitleWidth">
        <Row>
          <Col sm={12}>
            <h1 className="fontSizeAdjust wow animate__animated animate__fadeInDown animate_slower">
              CONNECT WITH ME + CONTACT ME BELOW.
            </h1>
          </Col>
        </Row>
        <Row className="iconRow">
          <Col sm={6}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>jonathan @ jonathanschimpf.com</Tooltip>}
            >
              <a
                className="responsiveEmail blackoutLink wow animate__animated animate__fadeIn animate__slower"
                href="mailto:jonathan@jonathanschimpf.com"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="fa fa-envelope responsiveEmail"
                />
              </a>
            </OverlayTrigger>
          </Col>
          <Col sm={6}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>570.449.0320</Tooltip>}
            >
              <div className="divIcons">
                <a
                  href="tel:570.449.0320"
                  className="responsivePhone blackoutLink wow animate__animated animate__fadeIn animate__slower"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    className="fa fa-phone responsivePhone"
                  />
                </a>
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
      <div className="contactSpacing"></div>
    </>
  );
}

export default ContactComp;
