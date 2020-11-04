import React from "react";
import "./Contact.css";
import { Container, Col, Row } from "react-bootstrap";




function ContactComp() {
    return (

        <>


            <br />
            <br />
            <br />
            <br />
            <br />
            <Container className="centeredContainer" id="contact">
                <Row>
                    <Col sm={12}>
                        <h1>LET'S WORK TOGETHER TO BUILD YOUR NEXT PROJECT.</h1>
                    </Col>
                </Row>

                <br />
                <br />
                <br />

                <Row>
                    <Col sm={12}>
                        <h4><i className="fa fa-phone" />‏‏‎‏‏‎<a href="tel:570.440.0320">‎ 570.449.0320</a></h4>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col sm={12}>
                        <h4><i className="fa fa-envelope responsiveEmail" />‏‏‎‏‏‎<a className="responsiveEmail" href="mailto:jonathan@jonathanschimpf.com">‎ jonathan@jonathanschimpf.com</a></h4>
                    </Col>
                </Row>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h5>CONNECT</h5>
                <i class="fas fa-long-arrow-alt-down fa-2x"></i>

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