import React from "react";
import "./Portfolio.css";
// import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function PortfolioComp() {

    return (

        <>
<br />
<br />
<br />
<br />
<section className="container-md align-center mb-3">
<h1 className="portfolioFont" id="portfolio">PORTFOLIO.</h1>
<div className="portfolioFont">
    <a href="#bottom"><i style={{ fontColor: "black" }} href="#bottom" className="fa fa-angle-double-down fa-2x portfolioFont" aria-hidden="true" /></a>
</div>

  {/* breathing room */}
  <br />
  <br />
  <br />
  {/* breathing room */}
  <section className="row align">
    <div className="col-lg-4 my-4">
      <a href="https://albie140.github.io/Recipe-Roulette/" target="_blank">
        <img src="./images/RecipeRoulette_Portfolio_Thumbnail_1200px.jpg" className="img-fluid" alt="RECIPE ROULETTE" />
      </a>
      <p style={{paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black'}}><a href="https://albie140.github.io/Recipe-Roulette/" target="_blank">RECIPE • ROULETTE</a><a href="https://github.com/Albie140/Recipe-Roulette" target="_blank">
        </a></p><p style={{paddingTop: '1px', textAlign: 'center', fontWeight: 'bold'}}><a href="https://github.com/Albie140/Recipe-Roulette" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/Albie140/Recipe-Roulette" target="_blank">
      </a><p />
    </div>
    <div className="col-lg-4 my-4">
      <a href="https://trip-wishlist.herokuapp.com/" target="_blank">
        <img src="./images/Trip_Wishlist_Thumbnail_1200px.jpg" className="img-fluid" alt="TRIP WISHLIST" />
      </a>
      <p style={{paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black'}}><a href="https://trip-wishlist.herokuapp.com/" target="_blank">TRIP WISHLIST</a><a href="https://github.com/jonathanschimpf/Trip-Wishlist" target="_blank">
        </a></p><p style={{paddingTop: '1px', textAlign: 'center', fontWeight: 'bold'}}><a href="https://github.com/jonathanschimpf/Trip-Wishlist" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Trip-Wishlist" target="_blank">
      </a><p />
    </div>
    <div className="col-lg-4 my-4">
      <a href="https://jonathanschimpf.github.io/A-5-Day-Weather-Dashboard/" target="_blank">
        <img src="./images/5_Day_Weather_Dashboard_Thumbnail_1200px.jpg" className="img-fluid" alt="5 DAY WEATHER DASHBOARD" />
      </a>
      <p style={{paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black'}}><a href="https://jonathanschimpf.github.io/A-5-Day-Weather-Dashboard/" target="_blank">5 DAY WEATHER
          DASHBOARD</a><a href="https://github.com/jonathanschimpf/A-5-Day-Weather-Dashboard" target="_blank">
        </a></p><p style={{paddingTop: '1px', textAlign: 'center', fontWeight: 'bold'}}><a href="https://github.com/jonathanschimpf/A-5-Day-Weather-Dashboard" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/A-5-Day-Weather-Dashboard" target="_blank">
      </a><p />
    </div>
  </section>
  {/* row number 2 */}
  <section className="row align">
    <div className="col-lg-4 my-4">
      <a href="https://note-taker-express-js.herokuapp.com/" target="_blank">
        <img src="./images/Note.Taker_Thumbnail_1200px.jpg" className="img-fluid" alt="NOTE TAKER" />
      </a>
      <p style={{paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black'}}><a href="https://note-taker-express-js.herokuapp.com/" target="_blank">NOTE.TAKER</a><a href="https://github.com/jonathanschimpf/Express-Note-Taker" target="_blank">
        </a></p><p style={{paddingTop: '1px', textAlign: 'center', fontWeight: 'bold'}}><a href="https://github.com/jonathanschimpf/Express-Note-Taker" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Express-Note-Taker" target="_blank">
      </a><p />
    </div>
    <div className="col-lg-4 my-4">
      <a href="https://taco-time-handlebars.herokuapp.com/" target="_blank">
        <img src="./images/Taco_Time_Thumbnail_1200px.jpg" className="img-fluid" alt="TACO TIME" />
      </a>
      <p style={{paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black'}}><a href="https://taco-time-handlebars.herokuapp.com/" target="_blank">TACO • TIME</a><a href="https://github.com/jonathanschimpf/Taco-Time" target="_blank">
        </a></p><p style={{paddingTop: '1px', textAlign: 'center', fontWeight: 'bold'}}><a href="https://github.com/jonathanschimpf/Taco-Time" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Taco-Time" target="_blank">
      </a><p />
    </div>
    <div className="col-lg-4 my-4">
      <a href="https://jonathanschimpf.github.io/Daily-9-to-5-Planner/" target="_blank">
        <img src="./images/Daily_Planner_Portfolio_Thumbnail_1200px.jpg" className="img-fluid" alt="DAILY PLANNER : (9-5)" />
      </a>
      <p style={{paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black'}}> <a href="https://jonathanschimpf.github.io/Daily-9-to-5-Planner/" target="_blank">DAILY PLANNER :
          (9-5)</a><a href="https://github.com/jonathanschimpf/Daily-9-to-5-Planner" target="_blank">
        </a></p><p style={{paddingTop: '1px', textAlign: 'center', fontWeight: 'bold'}}><a href="https://github.com/jonathanschimpf/Daily-9-to-5-Planner" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /> +REPO</a></p><a href="https://github.com/jonathanschimpf/Daily-9-to-5-Planner" target="_blank">
      </a><p />
    </div>
  </section>
</section>

<br />
<br />
<br />
<br />

        </>


    );
}

export default PortfolioComp;



// prior to conversion

{/* <section class="container-md align-center mb-3">

 breathing room 

<br>
<br>
<br>

breathing room 

<section class="row align">

    <section class="col-lg-4 my-4">
        <a href="https://albie140.github.io/Recipe-Roulette/" target="_blank">
            <img src="RecipeRoulette_Portfolio_Thumbnail_1200px.jpg" class="img-fluid" alt="RECIPE ROULETTE" />
        </a>
        <p style="padding-top: 10px; text-align: center; font-weight: bold; color: black" ><a href="https://albie140.github.io/Recipe-Roulette/" target="_blank">RECIPE • ROULETTE</a><a
                href="https://github.com/Albie140/Recipe-Roulette" target="_blank">
                <p style="padding-top: 1px; text-align: center; font-weight: bold"><i
                        class="fa fa-github-square" aria-hidden="true"></i> +REPO</p>
            </a></p>
    </section>

    <section class="col-lg-4 my-4">
        <a href="https://trip-wishlist.herokuapp.com/" target="_blank">
            <img src="Trip_Wishlist_Thumbnail_1200px.jpg" class="img-fluid"
                alt="TRIP WISHLIST" />
        </a>
        <p style="padding-top: 10px; text-align: center; font-weight: bold; color: black"><a href="https://trip-wishlist.herokuapp.com/" target="_blank">TRIP WISHLIST</a><a href="https://github.com/jonathanschimpf/Trip-Wishlist" target="_blank">
                <p style="padding-top: 1px; text-align: center; font-weight: bold"><i
                        class="fa fa-github-square" aria-hidden="true"></i> +REPO</p>
            </a></p>
    </section>

    <section class="col-lg-4 my-4">
        <a href="https://jonathanschimpf.github.io/A-5-Day-Weather-Dashboard/" target="_blank">
            <img src="5_Day_Weather_Dashboard_Thumbnail_1200px.jpg" class="img-fluid"
                alt="5 DAY WEATHER DASHBOARD" />
        </a>
        <p style="padding-top: 10px; text-align: center; font-weight: bold; color: black"><a href="https://jonathanschimpf.github.io/A-5-Day-Weather-Dashboard/" target="_blank">5 DAY WEATHER
            DASHBOARD</a><a href="https://github.com/jonathanschimpf/A-5-Day-Weather-Dashboard" target="_blank">
                <p style="padding-top: 1px; text-align: center; font-weight: bold"><i
                        class="fa fa-github-square" aria-hidden="true"></i> +REPO</p>
            </a></p>
    </section>

</section>


row number 2 


<section class="row align">

    <section class="col-lg-4 my-4">
        <a href="https://note-taker-express-js.herokuapp.com/" target="_blank">
            <img src="Note.Taker_Thumbnail_1200px.jpg" class="img-fluid" alt="NOTE TAKER" />
        </a>
        <p style="padding-top: 10px; text-align: center; font-weight: bold; color: black"><a href="https://note-taker-express-js.herokuapp.com/" target="_blank">NOTE.TAKER</a><a
                href="https://github.com/jonathanschimpf/Express-Note-Taker" target="_blank">
                <p style="padding-top: 1px; text-align: center; font-weight: bold"><i
                        class="fa fa-github-square" aria-hidden="true"></i> +REPO</p>
            </a></p>
    </section>

    <section class="col-lg-4 my-4">
        <a href="https://taco-time-handlebars.herokuapp.com/" target="_blank">
            <img src="Taco_Time_Thumbnail_1200px.jpg" class="img-fluid"
                alt="TACO TIME" />
        </a>
        <p style="padding-top: 10px; text-align: center; font-weight: bold; color: black"><a href="https://taco-time-handlebars.herokuapp.com/" target="_blank">TACO • TIME</a><a href="https://github.com/jonathanschimpf/Taco-Time" target="_blank">
                <p style="padding-top: 1px; text-align: center; font-weight: bold"><i
                        class="fa fa-github-square" aria-hidden="true"></i> +REPO</p>
            </a></p>
    </section>

    <section class="col-lg-4 my-4">
        <a href="https://jonathanschimpf.github.io/Daily-9-to-5-Planner/" target="_blank">
            <img src="Daily_Planner_Portfolio_Thumbnail_1200px.jpg" class="img-fluid"
                alt="DAILY PLANNER : (9-5)" />
        </a>
        <p style="padding-top: 10px; text-align: center; font-weight: bold; color: black"> <a href="https://jonathanschimpf.github.io/Daily-9-to-5-Planner/" target="_blank">DAILY PLANNER :
            (9-5)</a><a href="https://github.com/jonathanschimpf/Daily-9-to-5-Planner" target="_blank">
                <p style="padding-top: 1px; text-align: center; font-weight: bold"><i
                        class="fa fa-github-square" aria-hidden="true"></i> +REPO</p>
            </a></p>
    </section>

</section>


</section> */}