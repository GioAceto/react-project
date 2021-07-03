import React from "react";
import "./hero-section.css";
import "./hero-section";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <aside className="main-aside">
        <div className="text-box">
          <h1>WELCOME</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam fringilla lacus sed augue ultrices feugiat non vitae mauris.
            Pellentesque ut sollicitudin eros, ultrices congue quam.
            <br />
            Sed eget efficitur ante. Curabitur semper vehicula erat non placerat.
            Aenean tortor odio, tempor quis metus at, placerat elementum ex. Vestibulum
            eu placerat justo, vel molestie quam.</p>
          <h1>NEWS UPDATE</h1>
          <p>Praesent facilisis accumsan sollicitudin. Etiam venenatis, lectus vitae
            ultrices lobortis, metus diam tempor nulla, in efficitur ante leo a urna.
            Nulla venenatis velit placerat tellus varius, eget elementum nulla euismod.
            Vivamus mollis vulputate felis vel molestie.</p>
          <p></p>
        </div>
      </aside>
      <div className="hero-image-container">
        <img className="hero-image" src="images/coffee_shop.jpeg" alt="coffee" />
      </div>
    </div>
  )
}

export default HeroSection