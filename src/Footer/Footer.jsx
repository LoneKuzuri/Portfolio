import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaGithub, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>
          Interested in working together<span className="purple">?</span>
        </h2>
        <div className="footer-buttons">
          <Link to="/contact" className="primary-button">Get In Touch</Link>
          
          <Link to="/projects" className="btn btn-outline"
          onClick={() => console.log("Browse Projects clicked")}
          >Browse Projects</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://shorturl.at/kXU6M"><FaInstagram /></a>
          <a href="https://shorturl.at/A64ms"><FaLinkedinIn /></a>
          <a href="https://github.com/LoneKuzuri"><FaGithub /></a>
        </div>
        <p>
          ©2025 All Rights Reserved. <br />
          Made with <span className="purple">💜</span> by <strong>Sunil Pandey</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
