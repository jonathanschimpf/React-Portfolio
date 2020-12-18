
import React from "react";
import "./Contact.css";
import { Container, Col, Row } from "react-bootstrap";




function ContactComp() {
    return (

        <>


            
            <br />
            <br id="contact" />
            <br />
            <br />
            <Container className="centeredContainer contactTitleWidth">
                <Row>
                    <Col sm={12}>
                    <h1 className="fontSizeAdjust wow animate__animated animate__fadeInDown animate_slower"><span className="fontSizeAdjust wow animate__animated animate__fadeIn animate__slower">LET'S WORK TOGETHER TO BUILD YOUR NEXT PROJECT.</span></h1>
                    </Col>
                </Row>

                <br />
                <br />
                <br />

                <Row>
                    <Col sm={12}>
                        <h4><i className="fa fa-envelope responsiveEmail wow animate__animated animate__fadeIn animate__slower" />‏‏‎‏‏‎<a className="responsiveEmail blackoutLink wow animate__animated animate__fadeIn animate__slower" href="mailto:jonathan@jonathanschimpf.com">‎ jonathan@jonathanschimpf.com</a></h4>
                    </Col>
                </Row>
                <br />
                <br />
                <br />

                <Row>
                    <Col sm={12}>
                        <h4><i className="fa fa-phone responsivePhone wow animate__animated animate__fadeIn animate__slower" />‏‏‎‏‏‎<a href="tel:570.449.0320" className="responsivePhone blackoutLink wow animate__animated animate__fadeIn animate__slower">‎ 570.449.0320</a></h4>
                    </Col>
                </Row>

              
                
                <br />
                <br />
                <br/>
                <h5 className="wow animate__animated animate__fadeIn animate__slower responsiveConnect"><strong>CONNECT</strong></h5>
                <br/>
                <span className="wow animate__animated animate__fadeIn animate__slower"><a><i style={{ fontColor: "black" }} className="fa fa-angle-double-down fa-2x portfolioFont wow animate__animated animate__bounce animate__delay-1s responsiveArrow" aria-hidden="true" /></a></span>
                
            </Container>

        </>

    );

}

export default ContactComp;













































//
//   <form>
//   <section className="form-group">
//     <label htmlFor="name">NAME</label>
//     <input type="text" className="form-control" />
//   </section>
//   <section className="form-group">
//     <label htmlFor="exampleInputEmail1">EMAIL</label>
//     <input type="email" className="form-control" aria-describedby="emailHelp" />
//   </section>
//   <section className="form-group">
//     <label htmlFor="exampleFormControlTextarea1">WHAT'S UP?</label>
//     <textarea className="form-control" rows={6} cols={2} defaultValue={"            "} />
//   </section>
//   <button type="button" className="btn btn-light">Submit</button>
// </form>