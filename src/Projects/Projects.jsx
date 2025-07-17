import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const Projects = ({ showLimited = true, scrollAnimation = false }) => {
  const projects = [
    {
      id: 1,
      image: 'images/taskflow.avif',
      title: 'TaskFlow',
      description: 'Task management system with drag-and-drop, real-time collaboration, and responsive layout.',
    },
     {
      id: 2,
      image: 'images/ecoCart.avif',
      title: 'EcoCart',
      description: 'E-commerce platform promoting eco-friendly products with payment integration.',
    },
    {
      id: 3,
      image: 'images/eventPlanner.avif',
      title: 'EventPlanner',
      description: 'Event planning app to organise and manage events effortlessly.',
    },
    {
      id: 4,
      image: 'images/foodieFinder.avif',
      title: 'FoodieFinder',
      description: 'Restaurant discovery platform with real-time search, reviews, and ratings.',
    }
  ];

  const displayedProjects = showLimited ? projects.slice(0, 2) : projects;

  if (scrollAnimation) {
    return (
      <section className="projects-scroll-container">
        <div className="projects-scroll-track">
          {/* For scrolling animation, show all projects doubled */}
          {[...projects, ...projects].map((project, index) => (
            <div key={`${project.id}-${index}`} className="scroll-project-card">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="project-container">
      <h1 className="project-title">
        Projects<span className="purple-dot">.</span>
      </h1>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <div key={project.id} className="card-container">
            <img src={project.image} alt={project.title} />
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
          </div>
        ))}
      </div>

      {showLimited && (
        <div className="view-all-btn">
          <Link to="/projects">View All Projects</Link>
        </div>
      )}
    </section>
  );
};

export default Projects;