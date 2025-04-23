import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Portfolio</h3>
        </div>

        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter/X</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; Copyright {new Date().getFullYear()} Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 