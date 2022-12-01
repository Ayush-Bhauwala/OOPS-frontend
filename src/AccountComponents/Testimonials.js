import React from "react";
import Banner1 from "./Summer Big Sale.png";
import Banner2 from "./White and Gold Simple Grand Opening Banner Landscape.png";
import Banner3 from "./Bargains.gif";

function Testimonials(){
    return(
<div id="carouselExampleControls" class="container-fluid carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner1} class="d-block" alt="..." width = "100%" height = "350px" />
    </div>
    <div class="carousel-item">
      <img src={Banner2} class="d-block" alt="..." width = "100%" height = "350px" />
    </div>
    <div class="carousel-item">
      <img src={Banner3} alt="..." width = "100%" height = "350px" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Testimonials;