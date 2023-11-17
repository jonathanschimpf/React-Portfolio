import React from "react";
import "./HeroImage.css";



function HeroImageComp() {

    return (

        <>

            <div className="heroIMAGE">
         {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="heroHEIGHT" />
{/* {ACCESSIBILITY IS IMPORTANT BUT React WON'T ALLOW alt="" FOR SOME REASON..IT SHOWS UP OVER THE IMAGE VISUALLY.*/}
            </div>

        </>


    );
}

export default HeroImageComp;



