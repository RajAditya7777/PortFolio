import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Nature-Inspired Design Portfolio",
      description: "A responsive portfolio website built with HTML and CSS, featuring nature-inspired designs. The project includes responsive design, hover effects, and a user-friendly interface that ensures smooth navigation across all devices.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      image: "https://iili.io/3MK87jV.jpg",
      link: "https://capstone-tawny-seven.vercel.app/",
      github: "https://github.com/RajAditya7777/CapstoneSNW"
    },
    {
      title: "Calculator",
      description: "Developed a classic calculator with a fully responsive design, ensuring smooth usability across different screen sizes. The project features intuitive button animations and transitions for an enhanced user experience while supporting essential arithmetic operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://iili.io/3MKs4Nn.jpg",
      link: "https://calculator-one-kappa-94.vercel.app/",
      github: "https://github.com/RajAditya7777/Calculator"
    },
    {
      title: "Myntra Clone",
      description: "Recreated the Myntra website layout with a focus on static front-end design and responsive styling. The project mimics the UI/UX of an e-commerce platform, ensuring visual consistency and adaptability across devices.",
      technologies: ["HTML", "CSS", "Responsive Design", "UI/UX"],
      image: "https://iili.io/3XHGAcG.jpg",
      link: "https://myntra-clone-snowy-ten.vercel.app/",
      github: "https://github.com/RajAditya7777/Myntra-Clone.git"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="projects-intro">Here are some of my recent projects that showcase my skills and experience.</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 