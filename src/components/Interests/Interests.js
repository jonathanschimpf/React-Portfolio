import React from "react";
import "./Interests.css";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

function InterestsComponent() {
  return (
    <>
    <div>
    <div id="interests">
      <div className="interestsBox">

        <Container className="d-flex justify-content-center centeredInterests ">
          <Row>
            <Col sm={12}>
              <span className="fa wow animate__animated animate__fadeIn animate__slower">
                <h2 className=" wow animate__animated animate__fadeInDown animate_slower interestsTitle">
                  I ENJOY THESE THINGS
                </h2>
              </span>
            </Col>
          </Row>
        </Container>

        <br />

        <Container className="deviContainer">
          <Row className=" d-flex justify-content-center align-middle heightQuery">
            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>HTML5</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className=" wow animate__animated animate__fadeIn animate__slower devicon-html5-plain-wordmark fa-4x interestsIcon interestsTransform"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>CSS3</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className=" wow animate__animated animate__fadeIn animate__slower devicon-css3-plain-wordmark fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>JavaScript ES6+</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className=" wow animate__animated animate__fadeIn animate__slower devicon-javascript-plain fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>React Library</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className=" wow animate__animated animate__fadeIn animate__slower devicon-react-original-wordmark fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>Node Package Manager</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className="wow animate__animated animate__fadeIn animate__slower fab fa-npm fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>Visual Studio Code</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className="wow animate__animated animate__fadeIn animate__slower devicon-visualstudio-plain fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>Git Version Control</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className="wow animate__animated animate__fadeIn animate__slower devicon-git-plain-wordmark fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>GitHub</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className="wow animate__animated animate__fadeIn animate__slower devicon-github-plain fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>Bootstrap</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className="wow animate__animated animate__fadeIn animate__slower fab fa-bootstrap fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>Adobe Photoshop</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className="wow animate__animated animate__fadeIn animate__slower devicon-photoshop-plain fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip>Adobe Premiere Pro</Tooltip>}
            >
              <div className="m-3 p-3">
                <i
                  className="wow animate__animated animate__fadeIn animate__slower devicon-premierepro-plain  fa-4x interestsIcon"
                  aria-hidden="true"
                ></i>
                <br />
              </div>
            </OverlayTrigger>

          </Row>
        </Container>
      </div>
      </div>
      </div>
    </>
  );
}

export default InterestsComponent;
