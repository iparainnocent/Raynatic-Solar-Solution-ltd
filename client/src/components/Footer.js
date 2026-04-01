import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing with email:", email);
      setEmail("");
      // In a real application, you would handle the subscription logic here
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>COMPANY</h4>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
            About Us
          </Link>
          <Link to="/team" onClick={() => window.scrollTo(0, 0)}>
            Our Team
          </Link>
          <Link to="/careers" onClick={() => window.scrollTo(0, 0)}>
            Careers
          </Link>
        </div>
        <div className="footer-column">
          <h4>SERVICES</h4>
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            Solar Panel Installation
          </Link>
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            Solar Water Heaters
          </Link>
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            Solar Street Lights
          </Link>
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            Inverters and Batteries
          </Link>
        </div>
        <div className="footer-column">
          <h4>HELPFUL LINKS</h4>
          <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
            Portfolio
          </Link>
          <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
            Products
          </Link>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            Contact Us
          </Link>
          <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
            Privacy Policy
          </Link>
        </div>
        <div className="footer-column newsletter-column">
          <h4>SUBSCRIBE TO NEWSLETTER</h4>
          <p>Get latest news and updates right to your inbox</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons-footer">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MySolar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
