import React from "react";
import "./Portfolio.css";
import { Container, CardDeck, Card } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

import portfolio from "../../portfolio.json"




function PortfolioComp() {

  return (

    <>

      

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container>
        <h1 className="portfolioFont" id="portfolio">PORTFOLIO.</h1>
        <div className="portfolioFont">
          <a><i style={{ fontColor: "black" }} className="fa fa-angle-double-down fa-2x portfolioFont wow animate__animated animate__bounce animate__delay-1s" aria-hidden="true" /></a>
        </div>
        </Container>


        {/* breathing room */}
        <br />
        <br />
        <br />
        
        {/* breathing room */}
        <Container>
          <CardDeck lg={2}>
            {portfolio.map(item => (

              <Card style={{ border: 'none' }}>
                <a href={item.projectlink} className="pointer-link" target="_blank">
                  <Card.Img variant="top" src={item.image} className="pointer-link hvr-grow" target="_blank" fluid />
                </a>
                <Card.Body>

                  <a href={item.projectlink} className="pointer-link" target="_blank">
                    <Card.Title className="portfolioHover pointer-link" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>{item.title}</Card.Title></a><a href={item.projectlink} className="pointer-link" target="_blank">
                  </a>

                  <Card.Text className="portfolioHover pointer-link" style={{ paddingTop: '1px', textAlign: 'center', fontWeight: 'bold'}}><a href={item.repolink} className="portfolioHover pointer-link" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a>
                  </Card.Text>

                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </Container>
              <br/>
              <br/>
              <br/>
              <br/>
           
       


        </>


    );
}

export default PortfolioComp;


































// prior to conversion

/* <br />
<br />
<br />
<br />
<section className="container-md align-center mb-3">
<h1 className="portfolioFont" id="portfolio">PORTFOLIO.</h1>
<div className="portfolioFont">
    <a href="#bottom"><i style={{ fontColor: "black" }} href="#bottom" className="fa fa-angle-double-down fa-2x portfolioFont" aria-hidden="true" /></a>
</div>
  {/* breathing room */
//   <br />
//   <br />
//   <br />
//   {/* breathing room */}
//   <section className="row align">
        //     <div className="col-lg-4 my-4">
          //       <a href="https://albie140.github.io/Recipe-Roulette/" target="_blank">
            //         <img src="./images/RecipeRoulette_Portfolio_Thumbnail_1200px.jpg" className="img-fluid" alt="RECIPE ROULETTE" />
//       </a>
//       <p style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}><a href="https://albie140.github.io/Recipe-Roulette/" target="_blank">RECIPE • ROULETTE</a><a href="https://github.com/Albie140/Recipe-Roulette" target="_blank">
            //         </a></p><p style={{ paddingTop: '1px', textAlign: 'center', fontWeight: 'bold' }}><a href="https://github.com/Albie140/Recipe-Roulette" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/Albie140/Recipe-Roulette" target="_blank">
            //       </a><p />
//     </div>
//     <div className="col-lg-4 my-4">
          //       <a href="https://trip-wishlist.herokuapp.com/" target="_blank">
            //         <img src="./images/Trip_Wishlist_Thumbnail_1200px.jpg" className="img-fluid" alt="TRIP WISHLIST" />
//       </a>
//       <p style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}><a href="https://trip-wishlist.herokuapp.com/" target="_blank">TRIP WISHLIST</a><a href="https://github.com/jonathanschimpf/Trip-Wishlist" target="_blank">
            //         </a></p><p style={{ paddingTop: '1px', textAlign: 'center', fontWeight: 'bold' }}><a href="https://github.com/jonathanschimpf/Trip-Wishlist" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Trip-Wishlist" target="_blank">
            //       </a><p />
//     </div>
//     <div className="col-lg-4 my-4">
          //       <a href="https://jonathanschimpf.github.io/A-5-Day-Weather-Dashboard/" target="_blank">
            //         <img src="./images/5_Day_Weather_Dashboard_Thumbnail_1200px.jpg" className="img-fluid" alt="5 DAY WEATHER DASHBOARD" />
//       </a>
//       <p style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}><a href="https://jonathanschimpf.github.io/A-5-Day-Weather-Dashboard/" target="_blank">5 DAY WEATHER
//           DASHBOARD</a><a href="https://github.com/jonathanschimpf/A-5-Day-Weather-Dashboard" target="_blank">
              //         </a></p><p style={{ paddingTop: '1px', textAlign: 'center', fontWeight: 'bold' }}><a href="https://github.com/jonathanschimpf/A-5-Day-Weather-Dashboard" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/A-5-Day-Weather-Dashboard" target="_blank">
            //       </a><p />
//     </div>
//   </section>
//   {/* row number 2 */}
//   <section className="row align">
        //     <div className="col-lg-4 my-4">
          //       <a href="https://note-taker-express-js.herokuapp.com/" target="_blank">
            //         <img src="./images/Note.Taker_Thumbnail_1200px.jpg" className="img-fluid" alt="NOTE TAKER" />
//       </a>
//       <p style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}><a href="https://note-taker-express-js.herokuapp.com/" target="_blank">NOTE.TAKER</a><a href="https://github.com/jonathanschimpf/Express-Note-Taker" target="_blank">
            //         </a></p><p style={{ paddingTop: '1px', textAlign: 'center', fontWeight: 'bold' }}><a href="https://github.com/jonathanschimpf/Express-Note-Taker" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Express-Note-Taker" target="_blank">
            //       </a><p />
//     </div>
//     <div className="col-lg-4 my-4">
          //       <a href="https://taco-time-handlebars.herokuapp.com/" target="_blank">
            //         <img src="./images/Taco_Time_Thumbnail_1200px.jpg" className="img-fluid" alt="TACO TIME" />
//       </a>
//       <p style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}><a href="https://taco-time-handlebars.herokuapp.com/" target="_blank">TACO • TIME</a><a href="https://github.com/jonathanschimpf/Taco-Time" target="_blank">
            //         </a></p><p style={{ paddingTop: '1px', textAlign: 'center', fontWeight: 'bold' }}><a href="https://github.com/jonathanschimpf/Taco-Time" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Taco-Time" target="_blank">
            //       </a><p />
//     </div>
//     <div className="col-lg-4 my-4">
          //       <a href="https://onlineoffline-budget-app.herokuapp.com/" target="_blank">
            //         <img src="./images/Online.Offline_Budget_Tool_Thumbnail_1200px.jpg" className="img-fluid" alt="DAILY PLANNER : (9-5)" />
//       </a>
//       <p style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}> <a href="https://onlineoffline-budget-app.herokuapp.com/" target="_blank">Online/Offline Budget Tool</a><a href="https://github.com/jonathanschimpf/Online.Offline-Progressive-Budget-Application" target="_blank">
            //         </a></p><p style={{ paddingTop: '1px', textAlign: 'center', fontWeight: 'bold' }}><a href="https://github.com/jonathanschimpf/Online.Offline-Progressive-Budget-Application" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Online.Offline-Progressive-Budget-Application" target="_blank">
            //       </a><p />
//     </div>
//   </section>
// </section> * /}


