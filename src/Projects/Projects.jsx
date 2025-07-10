import React from 'react'
import './projects.css'

const Projects = () => {
    const projects =[
        {
            image:'images/taskflow.avif',
            title: 'TaskFlow',
            description: 'Task management system with drag-and-drop, real-time collaboration, and responsive layout.',
        },

        {
            image:'images/ecoCart.avif',
            title: 'EcoCart',
            description: 'E-commerce platform promoting eco-friendly products with payment integration.',
        },

        {
         image:'images/eventPlanner.avif',
         title:'EventPlanner',
         description:'Event planning web application, enabling users to organise and manage events effortlessly.',
        },

        {
         image:'images/foodieFinder.avif',
         title:'FoodieFinder',
         description:'Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings',
        },
    ];

  return (
    <div className="project-container">

        <h1 className="project-title">
            Projects<span className="purple-dot">.</span>
        </h1>

       <div className="projects-grid">
       {projects.map((project, index) => (
        <div className="card-container">
            <img src={project.image} alt="card-image" />
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
        </div>
        ))}
       </div>
    </div>
  )
}

export default Projects;
