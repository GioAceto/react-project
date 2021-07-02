import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css"

const Landing = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="logo" src="images/logo.svg" alt="Port Co Logo"></img>
          </Link>
        </div>
      </nav>

    </div>
  )
}

export default Landing