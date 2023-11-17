import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function FooterComp() {
  return (
    <>
      <Container className="d-flex justify-content-center oneHundredHeightWidth">
        <Row className="icon-row">
          <Col className="icon-col"> 
             <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-footer">Photo</Tooltip>}
            >
            <div className="m-3 divfooter wow animate__animated animate__fadeIn animate__slow">
              <a
                href="https://jonathanschimpf.com"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faCameraRetro} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-footer">LinkedIn</Tooltip>}
            >
            <div className="m-3 divfooter wow animate__animated animate__fadeIn animate__slow">
              <a
                href="https://www.linkedin.com/in/jonathan-schimpf/"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-footer">GitHub</Tooltip>}
            >
            <div className="m-3 divfooter wow animate__animated animate__fadeIn animate__slow">
              <a
                href="https://github.com/jonathanschimpf"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col"> 
              <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-footer">Instagram</Tooltip>}
            >
            <div className="m-3 divfooter wow animate__animated animate__fadeIn animate__slow">
              <a
                href="https://www.instagram.com/schimpfstagram/"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-footer">Threads</Tooltip>}
            >
            <div className="m-3 divfooter wow animate__animated animate__fadeIn animate__slow">
              <a
                href="https://www.threads.net/@schimpfstagram"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faThreads} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-footer">Resume</Tooltip>}
            >
            <div className="m-3 divfooter wow animate__animated animate__fadeIn animate__slow">
              <a
                href="https://drive.google.com/file/d/1McXNvlmb4Lp1Q3YE7dRK6PegY1vlDdcO/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faFilePdf} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export default FooterComp;
