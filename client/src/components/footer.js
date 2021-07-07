import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links-container">
        <ul>
          <li>Copyright © 2021 Port Coffee Company</li>
          <li><Link to="/" className="footer-link">Home</Link></li>
          <li><Link to="/" className="footer-link">About</Link></li>
          <li><Link to="/" className="footer-link">Gallery</Link></li>
          <li><Link to="/" className="footer-link">Wholesale</Link></li>
          <li><Link to="/" className="footer-link">Shop</Link></li>
          <li><Link to="/" className="footer-link">Contact Us</Link></li>
        </ul>
      </div>
      <div className="social-container">
      </div>

    </div>
  )
}

export default Footer
