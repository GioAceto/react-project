import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const NavHead = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="logo" src="images/logo2.svg" alt="Logo for Port Coffee Co"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item"></li>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
            <li className="nav-item"></li>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Menu
            </Link>
            <li className="nav-item"></li>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavHead