import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Header.css";
/**
 * Header Component
 */
export default function Header() {
  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          {/* cspell:disable-next-line */}
          Edubridge
        </a>
        <ul className="nav-links">
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
