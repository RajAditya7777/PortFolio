import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Aditya Raj</h1>
        <h2>Front end developer</h2>
        <p className="hero-description">
          I design and develop responsive, user-first websites and applications. I'm driven by a passion for creating digital experiences that are both impactful and intuitive.
        </p>
        <div className="cta-buttons">
          <button className="secondary-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 