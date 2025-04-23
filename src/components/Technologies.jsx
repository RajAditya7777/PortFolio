import React from 'react';
import './Technologies.css';
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import jsLogo from '../assets/js-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import pythonLogo from '../assets/python-logo.svg';
import gitLogo from '../assets/git-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import figmaLogo from '../assets/figma-logo.svg';

const Technologies = () => {
  const frontend = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo }
  ];

  const backend = [
    { name: 'Python', logo: pythonLogo }
  ];

  const tools = [
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: githubLogo },
    { name: 'Figma', logo: figmaLogo }
  ];

  return (
    <section className="technologies" id="technologies">
      <h2>Tech Stack</h2>
      
      <div className="tech-sections">
        <div className="tech-section">
          <h3>Frontend</h3>
          <div className="tech-grid">
            {frontend.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-section">
          <h3>Backend</h3>
          <div className="tech-grid">
            {backend.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-section">
          <h3>Tools</h3>
          <div className="tech-grid">
            {tools.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies; 