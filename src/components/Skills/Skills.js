import React from "react";
import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";



function SkillsComp() {
    return (

        <> 
        <div className="skillsBox">
            <br />
            <br />
            <br />
            <p id="skills"></p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <Container className="d-flex justify-content-center centeredSkills">
                <Row>
                    <Col sm={12}>
                        <h2>SKILLS + LANGUAGES</h2>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            
            <Container>
                <Row sm={12} className="justify-content-center">
                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-html5-plain-wordmark fa-4x skillsIcon skillsTransform" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-css3-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-javascript-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-jquery-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-react-original-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow fab fa-bootstrap fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-nodejs-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow fab fa-npm fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-express-original fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>


                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-mongodb-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                    
                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-mysql-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-sequelize-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-webpack-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-handlebars-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-photoshop-line fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-slack-plain fa-4x skillsIcon " aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow fab fa-git fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-heroku-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="animate__animated animate__fadeIn animate__slow devicon-github-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                    
                </Row>
            </Container>
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

        </div>
        </>

    );

}

export default SkillsComp;