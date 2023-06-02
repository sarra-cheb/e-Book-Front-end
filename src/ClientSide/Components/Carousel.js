import React from 'react'
import First from '../images/logo2.png'
import Second from '../images/logo1.png'
import Third from '../images/logo3.png'


const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={First} className="d-block w-100" alt="pic1" />
        </div>
        <div className="carousel-item">
          <img src={Second} className="d-block w-100" alt="pic2" />
        </div>
        <div className="carousel-item">
          <img src={Third} className="d-block w-100" alt="pic3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel