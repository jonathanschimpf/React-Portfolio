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
            <br />
            <br />
            <br/>
            <br />
            <br />
            <br id="skills"></br>
            <br />
            <br />
            <br />
            <br />
            <br />
            
            
            <Container className="d-flex justify-content-center centeredSkills">
         
                <Row>
                    <Col sm={12}>
                        <h2 className=" wow animate__animated animate__fadeInDown animate_slower">SKILLS + LANGUAGES</h2>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br/>
            
            <Container>
                <Row sm={12} className="justify-content-center">
                    <div className="m-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-html5-plain-wordmark fa-4x skillsIcon skillsTransform" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-css3-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-javascript-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-jquery-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                    
                    <div className="m-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-react-original-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower fab fa-bootstrap fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-nodejs-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower fab fa-npm fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-express-original fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>


                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-mongodb-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                    
                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-mysql-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-sequelize-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-webpack-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-handlebars-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-photoshop-line fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-slack-plain fa-4x skillsIcon " aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower fab fa-git fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-heroku-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-github-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                    
                </Row>
            </Container>
            <br />
       

        </div>
        </>

    );

}

export default SkillsComp;