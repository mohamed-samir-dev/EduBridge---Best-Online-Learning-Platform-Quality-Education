import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>Get In Touch</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="social-media">
              <a href="#" className="social-media-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-media-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-media-icon">
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h2 className="company-info">About Us</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carriers</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Features</h2>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Resources</h2>
            <ul>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            �� 2022 EduBridge. All Rights Reserved made by{" "}
            <a
              href="https://my-frontend-portfolio-sage.vercel.app/"
              target="_blank"
            >
              My Frontend Portfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
