import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close mobile menu on window resize if screen is >= 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <a href="#home" className="logo" onClick={closeMenu}>Suneel</a>

          <div className="nav-menu">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </div>

          <a href="#contact" className="contact-button">
            <MessageCircle size={18} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <a href="#home" className="mobile-nav-link" onClick={closeMenu}>Home</a>
          <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Get in Touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
