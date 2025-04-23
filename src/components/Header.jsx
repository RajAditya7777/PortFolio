import React from 'react';
import './Header.css';
import xLogo from '../assets/x-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';
import githubLogo from '../assets/github-logo.svg';

const Header = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <h2>ADY</h2>
        </div>
        <div className="nav-links">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img 
              src={xLogo} 
              alt="X (formerly Twitter)" 
              className="social-icon" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <a href="https://www.linkedin.com/in/aditya-raj-2630b6323/" target="_blank" rel="noopener noreferrer">
            <img 
              src={linkedinLogo} 
              alt="LinkedIn" 
              className="social-icon" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <a href="https://github.com/RajAditya7777" target="_blank" rel="noopener noreferrer">
            <img 
              src={githubLogo} 
              alt="GitHub" 
              className="social-icon" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 