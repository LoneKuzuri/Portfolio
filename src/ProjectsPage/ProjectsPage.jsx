import React from 'react';
import Projects from '../Projects/Projects';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div>
      <section id='projects' className="page-section">
        <h1>Welcome to My <span className="purple-text">Best</span> Creations</h1>
        <p>I build stylish and functional web apps.</p>
      </section>
      
      <Projects showLimited={false} scrollAnimation={true} />
    </div>
  );
};

export default ProjectsPage;