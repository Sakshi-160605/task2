import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Vivekanand College</h1>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/apply" className="apply-btn">Apply Now!</Link>
        </nav>
        
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={closeMenu} className="mobile-link">Home</Link>
        <Link to="/about" onClick={closeMenu} className="mobile-link">About</Link>
        <Link to="/courses" onClick={closeMenu} className="mobile-link">Courses</Link>
        <Link to="/contact" onClick={closeMenu} className="mobile-link">Contact</Link>
        <Link to="/apply" onClick={closeMenu} className="mobile-apply">Apply Now!</Link>
      </div>
    </header>
  );
};

export default Headers;
