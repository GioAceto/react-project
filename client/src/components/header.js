import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const NavHead = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="logo" src="images/logo2.svg" alt="Port Co Logo"></img>
          </Link>
          <div className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavHead