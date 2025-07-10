import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="home-section">

      <div className="home-container">
      
        <div className="left-content">
      
          <div className="greeting">
            Hey, I'm Sunil
            <span className="wave">👋</span>
          </div>

          <h1 className="title">
            <span className="purple-text">Front</span>end Developer
          </h1>

          <p className="description">
            I'm a frontend developer based in Nepal. I'll help you build beautiful websites your users will love.
          </p>

          <div className="button-container">
            <a href="#contact" className="primary-button">Get In Touch</a>
            <a href="#projects" className="secondary-button">Browse Projects</a>
          </div>
        </div>

        <div className="right-content">
          <div className="image-container">
            <div className="outer-circle"></div>
            <div className="inner-circle"></div>
            <div className="profile-image">
              <img src="images/profile.jpg" alt="Sunil-Frontend Developer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;