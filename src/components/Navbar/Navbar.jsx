import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isScrolled ? `navbar scrolled` : `navbar`}>
      <div className="navbar__logo">
        <Link to="/">
          <img
            src="/img/logo.png"
            alt="Logo"
          />
          <span>St. Albert the Great School</span>
        </Link>
      </div>
      <div className={`navbar__menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/admission">Admission</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/portal">Portal</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/gallery">Gallery</Link>
          </li>
          {/* <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/gallery">Gallery</Link>
          </li> */}
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className={`navbar__hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;