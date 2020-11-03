import React from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';


    function ContactComp () {
      return (
  
        <>

        <section className="container">
          <br />
          <br />
          <section className="row">
            <section className="col-12">
              <h1>LET'S WORK TOGETHER TO BUILD YOUR NEXT PROJECT.</h1>
            </section>
          </section>
          <br />
          <br />
          <br />
          <form>
            <section className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" className="form-control" />
            </section>
            <section className="form-group">
              <label htmlFor="exampleInputEmail1">EMAIL</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
            </section>
            <section className="form-group">
              <label htmlFor="exampleFormControlTextarea1">WHAT'S UP?</label>
              <textarea className="form-control" rows={6} cols={2} defaultValue={"            "} />
            </section>
            <button type="button" className="btn btn-light">Submit</button>
          </form>
          <p style={{textAlign: 'right', fontWeight: 'bold'}}><i className="fa fa-phone" />‏‏‎‏‏‎<a href="tel:570.440.0320">‎ 570.449.0320</a></p>
        </section>

        </>

      );
 
      }

  export default ContactComp;