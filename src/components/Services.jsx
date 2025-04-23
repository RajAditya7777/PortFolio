import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>About Me</h2>
      <p className="services-intro">An aspiring B.Tech CS/DS student and a passionate Front-end Developer who loves turning ideas into reality through code.</p>
      
      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            I build responsive and intuitive web applications using React, JavaScript, HTML/CSS, and Python. Driven by curiosity, I love exploring how technology can simplify real-world problems and enhance everyday life.
          </p>
        </div>

        <div className="service-card">
          <h3>Problem Solving</h3>
          <p>
            Solved 150+ problems on LeetCode (1400+ rating) and have a Codeforces rating of 600+. Competitive programming sharpens my logic and helps me write efficient code.
          </p>
        </div>

        <div className="service-card">
          <h3>Extras</h3>
          <p>
            Cricket all-rounder, footballer, and swimmer with strong reflexes and team spirit. Competitive gamer (BGMI, COD) and video editor, passionate about strategy and creativity.
          </p>
        </div>
      </div>

      <div className="coding-profiles">
        <a 
          href="https://leetcode.com/u/adyraj7777/" 
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link leetcode"
        >
          <img 
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" 
            alt="LeetCode" 
          />
          <span>LeetCode Profile</span>
        </a>
        <a 
          href="https://codeforces.com/profile/aditya.raj7777" 
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link codeforces"
        >
          <img 
            src="https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png" 
            alt="CodeForces" 
          />
          <span>CodeForces Profile</span>
        </a>
      </div>
    </section>
  );
};

export default Services; 