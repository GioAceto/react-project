import React from "react";
import "./hero-section.css";
import "./hero-section";
import Carousel from 'react-bootstrap/Carousel'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <aside className="main-aside">
        <div className="text-box">
          <h1>WELCOME</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam fringilla lacus sed augue ultrices feugiat non vitae mauris.</p>
          <h1>NEWS UPDATE</h1>
          <p>Praesent facilisis accumsan sollicitudin. Etiam venenatis, lectus vitae
            ultrices lobortis, metus diam tempor nulla, in efficitur ante leo a urna.
            Nulla venenatis velit placerat tellus varius, eget elementum nulla euismod.
          </p>
          <p></p>
        </div>
      </aside>
      <div className="hero-image-container">
        <Carousel fade className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 hero-image"
              src="images/roasters.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-image"
              src="images/wholesale.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 hero-image"
              src="images/coffee_shop.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default HeroSection