import React from "react";
import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";



function SkillsComp() {
    return (

        <> 
        <div className="skillsBox">

       
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br id="skills"></br>
            <br />
            
            
            <Container className="d-flex justify-content-center centeredSkills ">
         
                <Row>
                    <Col sm={12}>
                    <span className="fa wow animate__animated animate__fadeIn animate__slower"><h2 className=" wow animate__animated animate__fadeInDown animate_slower paddingAdjust">SKILLS + LANGUAGES</h2></span>
                    </Col>
                </Row>
            </Container>

            <br />
            
            <Container className="nineSixtyWidth">
                <Row className=" d-flex justify-content-center align-middle heightQuery">
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
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-visualstudio-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
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

                    {/* <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-babel-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div> */}

                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-photoshop-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                    
                    <div className="m-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-premierepro-plain  fa-4x skillsIcon" aria-hidden="true"></i>
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
                
                <Container className="centerSkillsArrow paddingAdjustArrow">
            <Link
                                href=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                 >
                <span className="fa wow animate__animated animate__fadeIn animate__slower"><span className="fa wow animate__animated animate__bounce animate__delay-1s">
                <a><i className="fa fa-angle-double-down fa-2x wow animate__animated animate__backInUp skillsIcon" aria-hidden="true" /></a></span></span>
                </Link>
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
            <br />
            
           
            
            
            
       

        </div>
        </>

    );

}

export default SkillsComp;