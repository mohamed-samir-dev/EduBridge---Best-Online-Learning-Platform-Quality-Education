import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          {/* cspell:disable-next-line */}
          Edubridge
        </a>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="account">
          <a href="#" className="btn-primary">
            Login
          </a>
          <a href="#" className="btn-secondary">
            Join Now! <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}
