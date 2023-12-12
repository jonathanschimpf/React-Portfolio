import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";

function ContactComp() {
  return (
    <>
    <div>
      <div>
      <div className="contactSpacing">
      <Container className="centeredContainer contactTitleWidth">
        <Row>
          <Col sm={12}>
            <div id="contact" className="wow animate__animated animate__fadeInDown animate_slower">
            <h1 className="fontSizeAdjust connectContactPadding wow animate__animated animate__fadeInDown animate_slower"><div className="space wow animate__animated animate_slower animate__delay-1s animate__fadeInLeftBig"><span class="wave">👋🏻</span></div><br/>
              CONNECT WITH ME + CONTACT ME BELOW
            </h1>
            </div>

          </Col>
        </Row>
        <Row className="iconRow">
          <Col sm={6}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltipContactFooter">jonathan @ jonathanschimpf.com</Tooltip>}
            >
              <div className="divContactIcons wow animate__animated animate__fadeInLeft">
              <a
                className="responsiveIcon blackoutLink wow animate__animated animate__slower animate__fadeInLeft"
                href="mailto:jonathan@jonathanschimpf.com"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="fa fa-envelope responsiveEmail"
                />
              </a>
              </div>
            </OverlayTrigger>
          </Col>
          <Col sm={6}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltipContactFooter">570.449.0320</Tooltip>}
            >
              <div className="divContactIcons wow animate__animated animate__fadeInLeft">
                <a
                  href="tel:570.449.0320"
                  className="responsiveIcon blackoutLink wow animate__animated  animate__fadeInLeft"
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
      </div>
      </div>
      </div>
    </>
  );
}

export default ContactComp;
