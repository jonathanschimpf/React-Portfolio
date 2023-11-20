import React, { useState } from "react";
import "./Projects.css";
import { Container, Card, Modal, Button, Row, Col } from "react-bootstrap";
import Projects from "./Projects.json";

function ProjectsComponent() {
  const [modalShow, setModalShow] = useState(false);
  const [projectDescription, setProjectDescription] = useState([]);

  const ProjectInformationModal = (props) => (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="responsiveModalTitle"
        >
          PROJECT DESCRIPTION
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Projects.filter((item) => item.id === projectDescription).map(
          (item) => (
            <>
              <p className="responsiveDescription">{item.description}</p>
              <p className="whiteFont responsiveDescription">
                {item.descriptiontwo}
              </p>
              <p className="regularCredentials responsiveCredentials redFont">
                {item.descriptionwaiter}
              </p>
              <p className="regularCredentials responsiveCredentials redFont">
                {item.descriptionmanager}
              </p>
              <p className="regularCredentials responsiveCredentials redFont">
                {item.descriptionkitchen}
              </p>
            </>
          )
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="customButton"
          size="sm"
          variant="outline-dark"
          onClick={props.onHide}
        >
          RETURN
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <Container className="mt-5 mb-5 projectsTitleContainer">
        <h1
          className="animate__animated animate__fadeInDown animate_slower"
          id="projects"
        >
          RECENT PROJECTS.
        </h1>
      </Container>

      <Container className="mb-5 projectsContainer">
        <Row xs={1} md={3} className="g-4 justify-content-md-center">
          {Projects.map((item) => (
            <Col key={item.id}>
              <Card className="project-card">
                <div className="projectDiv">
                  <a href={item.projectlink} target="_blank" rel="noreferrer">
                    <Card.Img
                      className="border-0 imageResize projectImage"
                      variant="top"
                      src={require(`../../${item.image}`)}
                    />
                  </a>
                </div>
                <Card.Body>
                  <Card.Title className="text-center padding-top font-weight-bold">
                    <a
                      href={item.projectlink}
                      className="text-black hover-effect"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  </Card.Title>
                  <Row className="mt-2">
                    <Col xs={6} className="text-right">
                      <div className="info-repo-link">
                        <button
                          className="cardtext btn-link"
                          onClick={() => {
                            setModalShow(true);
                            setProjectDescription(item.id);
                          }}
                        >
                          <i className="fas fa-info-circle"></i>
                          <span className="link-text">+INFO</span>
                        </button>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="info-repo-link">
                        <a
                          href={item.repolink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fa fa-github-square"
                            aria-hidden="true"
                          ></i>
                          <span className="link-text">+REPO</span>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ProjectInformationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProjectsComponent;
