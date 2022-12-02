import React from "react";
import Banner1 from "./Summer Big Sale.png";
import Banner2 from "./White and Gold Simple Grand Opening Banner Landscape.png";
import Banner3 from "./Christmas Sale.png";

function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" style={{ maxHeight: "350px" }}>
        <div className="carousel-item active" data-bs-interval="4000">
          <img
            src={Banner1}
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: "350px" }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src={Banner2}
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: "350px" }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src={Banner3}
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
