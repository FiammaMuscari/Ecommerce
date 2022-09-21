import React from 'react'

export const Carrousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="banners/1.png"class="d-block w-100" alt="visual"/>
    </div>
    <div class="carousel-item">
      <img src="banners/2.png" class="d-block w-100" alt="visual"/>
    </div>
    <div class="carousel-item">
      <img src="banners/3.png" class="d-block w-100" alt="visual"/>
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
