import React from "react";
import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function SkillsComp() {
    return (

        <> 
        <div className="skillsParalax">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <Container className="d-flex justify-content-center centeredSkills">
                <Row>
                    <Col sm={12}>
                        <h2>SKILLS | LANGUAGES</h2>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <Container>
                <Row sm={12} className="justify-content-center">
                    <div className="m-3">
                        <i class="devicon-html5-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-css3-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-javascript-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-jquery-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-react-original-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="fab fa-bootstrap fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-nodejs-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="fab fa-npm fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-express-original fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>


                    <div className="m-3">
                        <i class="devicon-mongodb-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                    
                    <div className="m-3">
                        <i class="devicon-mysql-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-sequelize-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-webpack-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-handlebars-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-photoshop-line fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-slack-plain fa-4x skillsIcon " aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="fab fa-git fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-heroku-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class="devicon-github-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class=" fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i class=" fa-4x skillsIcon" aria-hidden="true"></i>
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

        </div>
        </>

    );

}

export default SkillsComp;