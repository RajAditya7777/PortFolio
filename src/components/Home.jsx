import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span style={{ color: '#00bfff' }}>Aditya Raj</span></h1>
        <p>Frontend Developer & Problem Solver</p>
        <div className="cta-buttons">
          <a href="#contact" className="cta-button primary">Get in Touch</a>
          <a href="#projects" className="cta-button secondary">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Home; 