
import React from "react";
import "./Footer.css";
import { Container, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';


    function FooterComp () {
      return (
  
        <>
        
    <Container className="d-flex justify-content-center">
        <Row sm={12}>    
        
        {/* <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip>
                        Photography
                    </Tooltip> 
                }   
                    >   */}
        <div className="m-3 wow animate__animated animate__fadeIn animate__slow">
          <a href="https://jonathanschimpf.com" rel="noreferrer" target="_blank" className="fa fa-camera-retro fa-2x button responsiveFooter blackoutIcons" aria-hidden="true" />
          <br />
        </div>
        {/* </OverlayTrigger> */}

        {/* <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip className="tooltipFooter">
                        LinkedIn
                    </Tooltip> 
                }   
                    >   */}
        <div className="m-3 wow animate__animated animate__fadeIn animate__slow">
          <a href="https://www.linkedin.com/in/jonathan-schimpf/" rel="noreferrer" target="_blank" className="fa fa-linkedin-square fa-2x button responsiveFooter blackoutIcons" aria-hidden="true" />
          <br />
        </div>
        {/* </OverlayTrigger> */}

        {/* <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip className="tooltipFooter">
                        GitHub
                    </Tooltip> 
                }   
                    >   */}
        <div className="m-3 wow animate__animated animate__fadeIn animate__slow">
          <a href="https://github.com/jonathanschimpf" rel="noreferrer" target="_blank" className="fa fa-github-square fa-2x button responsiveFooter blackoutIcons" aria-hidden="true" />
          <br />
        </div>
        {/* </OverlayTrigger> */}

        {/* <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                overlay={
                    <Tooltip className="tooltipFooter">
                        Instagram
                    </Tooltip> 
                }   
                    >   */}
        <div className="m-3 wow animate__animated animate__fadeIn animate__slow">
          <a href="https://www.instagram.com/schimpfstagram/" rel="noreferrer" target="_blank" className="fa fa-instagram fa-2x button responsiveFooter blackoutIcons" aria-hidden="true" />
          <br />
        </div>
        {/* </OverlayTrigger> */}



        {/* <div className="m-3 wow animate__animated animate__fadeIn animate__slow">
          <a href="mailto:jonathan@jonathanschimpf.com" className="fa fa-envelope-o fa-2x button responsiveFooter blackoutIcons" aria-hidden="true" />
          <br />
        </div> */}


          {/* <OverlayTrigger
                placement="top"
                delay={{ show: 60, hide: 60 }}
                className="tooltipFooter"
                overlay={
                    <Tooltip className="tooltipFooter">
                        Resume
                    </Tooltip> 
                }   
                    >   */}
        <div className="m-3 wow animate__animated animate__fadeIn animate__slow">
          <a href="https://drive.google.com/file/d/1McXNvlmb4Lp1Q3YE7dRK6PegY1vlDdcO/view?usp=sharing" rel="noreferrer" target="_blank" className="fa fa-file-pdf-o fa-2x button responsiveFooter blackoutIcons" aria-hidden="true" />
          <br />
        </div>
        {/* </OverlayTrigger> */}


        </Row>
      </Container>
      
        <br />
        <br/>

        </>

      );
 
      }

  export default FooterComp;





































  



// clickable icons for: email/github/linkedin/instagram ("footer")
//after conversion

{/* <section className="container d-flex justify-content-end">
<section className="m-3">
  <a href="https://jonathanschimpf.com" target="_blank" className="fa fa-camera-retro fa-2x button" aria-hidden="true" />
  <br />
</section>
<section className="m-3">
  <a href="https://www.linkedin.com/in/jonathan-schimpf/" target="_blank" className="fa fa-linkedin-square fa-2x button" aria-hidden="true" />
  <br />
</section>
<section className="m-3">
  <a href="https://github.com/jonathanschimpf" target="_blank" className="fa fa-github-square fa-2x button" aria-hidden="true" />
  <br />
</section>
<section className="m-3">
  <a href="https://www.instagram.com/schimpfstagram/" target="_blank" className="fa fa-instagram fa-2x button" aria-hidden="true" />
  <br />
</section>
<section className="m-3">
  <a href="mailto:jonathan@jonathanschimpf.com" className="fa fa-envelope-o fa-2x button" aria-hidden="true" />
  <br />
</section>
<section className="m-3">
  <a href="https://drive.google.com/file/d/1-Vxd1eHd33ReG8ikQ32xQntmowpZuGQa/view?usp=sharing" target="_blank" className="fa fa-file-pdf-o fa-2x button" aria-hidden="true" />
  <br />
</section>
</section> */}

//*******************************//

// prior to conversion//

//   <section class="container d-flex justify-content-end">
//   <section class="m-3">
//       <a href="https://jonathanschimpf.com" target="_blank" class="fa fa-camera-retro fa-2x button"
//           aria-hidden="true"></a>
//       <br>
//   </section>
//   <section class="m-3">
//       <a href="https://www.linkedin.com/in/jonathan-schimpf/" target="_blank"
//           class="fa fa-linkedin-square fa-2x button" aria-hidden="true"></a>
//       <br>
//   </section>
//   <section class="m-3">
//       <a href="https://github.com/jonathanschimpf" target="_blank" class="fa fa-github-square fa-2x button"
//           aria-hidden="true"></a>
//       <br>
//   </section>
//   <section class="m-3">
//       <a href="https://www.instagram.com/schimpfstagram/" target="_blank" class="fa fa-instagram fa-2x button"
//           aria-hidden="true"></a>
//       <br>
//   </section>
//   <section class="m-3">
//       <a href="mailto:jonathan@jonathanschimpf.com" class="fa fa-envelope-o fa-2x button" aria-hidden="true"></a>
//       <br>
//   </section>
//   <section class="m-3">
//       <a href="https://drive.google.com/file/d/1-Vxd1eHd33ReG8ikQ32xQntmowpZuGQa/view?usp=sharing" target="_blank"
//           class="fa fa-file-pdf-o fa-2x button" aria-hidden="true"></a>
//       <br>
//   </section>
// </section>