import React from 'react';
import './HelloImJonathan.css';

function HelloComponent() {
  return (
    <div id="about" className="hello-background">
      <div className="hello-content">
        <h1 className="hello-title wow animate__animated animate__fadeInDown animate__slower">HELLO.</h1>
        <p className="hello-paragraph lead wow animate__animated animate__fadeInUp animate__slower">
          <strong className="wow animate__animated animate__fadeIn animate__slower">I am a Junior Web Developer</strong> who has a commercial art background with a specialized focus in
          visual content creation, and over twelve years of experience in
          a digital marketing and eCommerce setting. Leveraging an
          extensive creative history with a current journey in Web
          Development. Deeply passionate about stylized front-end designs
          and unique user experiences. Minimalistic approach to
          aesthetically pleasing mobile-first responsive layouts.
          Perpetual student with a desire to continue to learn and evolve
          along with industry standards/trends.
        </p>
      </div>
    </div>
  );
}

export default HelloComponent;
