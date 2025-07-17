import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      
      setScrollPosition(window.pageYOffset);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.classList.remove('mobile-menu-open');
      window.scrollTo(0, scrollPosition);
      document.body.style.top = '';
    }
  }, [isMenuOpen, scrollPosition]);

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
          <Link to="/" className="logo" onClick={closeMenu}>
            Suneel
          </Link>

          <div className="nav-menu">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/projects" className="nav-link" onClick={closeMenu}>
              Projects
            </Link>
           <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </div>

          <Link to="/contact" className="contact-button">
            <MessageCircle size={18} />
        </Link>

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
            Home
          </Link>
         <Link to="/projects" className="mobile-nav-link" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </Link>
         <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;