import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaCopy, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section id='contact' className="contact-section">
      <div className="contact-container">

        {/* Left Content */}
        <div className="contact-content">

          <p className="contact-eyebrow">Let's Collaborate</p>

          <h1 className="contact-heading">
            Get In Touch<span className="purple-text">.</span>
          </h1>

          <p className="contact-description">
            Great ideas start with conversation. Let's turn your vision into
            reality — reach out today!
          </p>

          <div className="contact-links">

            <a href="mailto:pandeysuneel208@gmail.com" className="contact-link">
              <span className="contact-icon-wrap">
                <FaEnvelope className="contact-icon" />
              </span>
              <div className="contact-link-text">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">pandeysuneel208@gmail.com</span>
              </div>
              <button
                className="contact-copy-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy('pandeysuneel208@gmail.com', 'email');
                }}
                aria-label="Copy email address"
                title="Copy to clipboard"
              >
                {copied === 'email' ? <FaCheck /> : <FaCopy />}
              </button>
            </a>

            <a href="tel:+9779869457208" className="contact-link">
              <span className="contact-icon-wrap">
                <FaPhone className="contact-icon" />
              </span>
              <div className="contact-link-text">
                <span className="contact-link-label">Phone</span>
                <span className="contact-link-value">+977 9869457208</span>
              </div>
              <button
                className="contact-copy-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy('+9779869457208', 'phone');
                }}
                aria-label="Copy phone number"
                title="Copy to clipboard"
              >
                {copied === 'phone' ? <FaCheck /> : <FaCopy />}
              </button>
            </a>

          </div>

          <p className="contact-availability">
            <span className="contact-availability-dot" />
            Available for freelance &amp; full-time opportunities
          </p>

        </div>

        {/* Right Content */}
        <div className="right-content">
          <div className="image-container">
            <div className="outer-circle"></div>
            <div className="inner-circle"></div>
            <div className="profile-image">
              <img src="images/profile.jpg" alt="Sunil - Frontend Developer" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;