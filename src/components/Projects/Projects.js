import React, { useState } from "react";
import "./Projects.css";
import { Container, Card, Modal, Button, Row, Col } from "react-bootstrap";
import ProjectsData from "./Projects.json";
import lemonLogo from '../../images/Little-Lemon-Logo-Black.png';
import tumblrToReactImage from '../../images/FromTumblrToReact-Project-Final.png';

const imageMap = {
  'Little-Lemon-Logo-Black.png': lemonLogo,
  'FromTumblrToReact-Project-Final.png': tumblrToReactImage
};

function ProjectsComponent() {
    const [modalShow, setModalShow] = useState(false);
    const [projectDescription, setProjectDescription] = useState({});

    function handleCardClick(project) {
        setProjectDescription(project);
        setModalShow(true);
    }

    return (
        <>
        <div id="projects">
            <Container className="projectsTitleContainer">
                <h1 className="wow animate__animated animate__zoomIn animate_slower">SOME RECENT PROJECTS</h1>
            </Container>

            <Container className="projectsContainer">
                <Row className="justify-content-center">
                    {ProjectsData.map(project => (
                        <Col key={project.id} lg={4} md={6} sm={12} className="d-flex align-items-stretch">
                            <Card className=" wow animate__animated animate__zoomIn animate__fadeIn animate_slower project-card text-center">
                                <a href={project.projectlink} target="_blank" rel="noreferrer">
                                    <Card.Img className="cardImg mx-auto" variant="top" src={imageMap[project.image]} />
                                </a>
                                <Card.Body>
                                    <Card.Title>
                                        <a href={project.projectlink} target="_blank" rel="noreferrer">
                                            {project.title}
                                        </a>
                                    </Card.Title>
                                    <div className="project-links">
                                        <Button variant="link" onClick={() => handleCardClick(project)}>
                                            +INFO
                                        </Button>
                                        <a href={project.repolink} target="_blank" rel="noreferrer">
                                            +REPO
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <ProjectInformationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                description={projectDescription.description}
                descriptiontwo={projectDescription.descriptiontwo}
            />
            </div>
        </>
    );
}

function ProjectInformationModal({ show, onHide, description, descriptiontwo }) {
    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton variant="outline-dark">
                <Modal.Title id="contained-modal-title-vcenter">
                    PROJECT DESCRIPTION
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{description}</p>
                <p>{descriptiontwo}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={onHide}>
                    RETURN
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectsComponent;
