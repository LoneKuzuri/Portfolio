import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className="contact-section">
      <div className="contact-container">
        {/* Left Content - Text */}
        <div className="contact-content">
          <h1 className="contact-heading">
            Get In Touch<span className="purple-text">.</span>
          </h1>
          
          <p className="contact-description">
            Great ideas start with conversation. Let's turn your vision into reality – reach out today!
          </p>

          <div className="contact-links">
            <a href="mailto:pandeysuneel208@gmail.com" className="contact-link">
              <FaEnvelope className="contact-icon" />
              <span>pandeysuneel208@gmail.com</span>
            </a>
            <a href="tel:+9779869457208" className="contact-link">
              <FaPhone className="contact-icon" />
              <span>+977 9869457208</span>
            </a>
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
  );
};

export default Contact;