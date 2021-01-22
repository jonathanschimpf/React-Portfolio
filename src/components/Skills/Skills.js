import React from "react";
import "./Skills.css";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
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

                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        HTML5
                    </Tooltip> 
                }   
                    >
                    <div className="m-3 p-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-html5-plain-wordmark fa-4x skillsIcon skillsTransform" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        CSS3
                    </Tooltip> 
                }   
                    >
                    <div className="m-3 p-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-css3-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        JavaScript ES6+
                    </Tooltip> 
                }   
                    >
                    <div className="m-3 p-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-javascript-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>
                

                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        jQuery Library
                    </Tooltip> 
                }   
                    >
                    <div className="m-3 p-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-jquery-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        React Library
                    </Tooltip> 
                }   
                    >    
                    <div className="m-3 p-3">
                        <i className=" wow animate__animated animate__fadeIn animate__slower devicon-react-original-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>

                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Node.js
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-nodejs-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger> 

                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Node Package Manager
                    </Tooltip> 
                }   
                    >     
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower fab fa-npm fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Bootstrap 
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower fab fa-bootstrap fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger> 

                                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Ui Kit 
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower fab fa-uikit fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>       


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Express.js
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-express-original fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>

                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        MongoDB
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-mongodb-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>

                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        MySQL
                    </Tooltip> 
                }   
                    >      
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-mysql-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Sequelize
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-sequelize-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Webpack Module Bundler
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-webpack-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Babel JS Compiler
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-babel-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>  
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Handlebars.js
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-handlebars-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Adobe Photoshop
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-photoshop-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>

                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Adobe Premiere Pro
                    </Tooltip> 
                }   
                    >      
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-premierepro-plain  fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>

                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Visual Studio Code
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-visualstudio-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Atom Text Editor
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-atom-original fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        WebCenter CMS
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-oracle-original fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>
                

                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Secure Shell
                    </Tooltip> 
                }   
                    >      
                <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-ssh-original-wordmark fa-4x skillsIcon " aria-hidden="true"></i>
                        <br />
                </div>
                </OverlayTrigger>

                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Git Version Control
                    </Tooltip> 
                }   
                    >      
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-git-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        GitHub 
                    </Tooltip> 
                }   
                    >      
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-github-plain fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>
                    
                
                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Heroku Cloud Platform
                    </Tooltip> 
                }   
                    >      
                <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-heroku-plain-wordmark fa-4x skillsIcon" aria-hidden="true"></i>
                        <br />
                    </div> 
                </OverlayTrigger>    


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        GitLab
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-gitlab-plain fa-4x skillsIcon " aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


                <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Slack
                    </Tooltip> 
                }   
                    >  
                    <div className="m-3 p-3">
                        <i className="wow animate__animated animate__fadeIn animate__slower devicon-slack-plain fa-4x skillsIcon " aria-hidden="true"></i>
                        <br />
                    </div>
                </OverlayTrigger>


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