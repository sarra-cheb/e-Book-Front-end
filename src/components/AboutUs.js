import React from 'react'
import img from '../ClientSide/images/card1.png'

const AboutUs = () => {
  return (
    <div class="container" style={{ height: "100vh;" }}>
      <h1 class="text-center" style={{ color: "#FC2947" }}> ABOUT <span style={{ color: "#FF6000" }}> US</span> </h1>
      <div class="row mt-3">
        <div class="col-7 me-2 ">
          <h1 class="text">Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium, labore? </h1>
          <h4 class="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem alias repellat libero
            inventore! Velit
            facere sint, magni dolorem vel voluptas quasi quidem numquam, iste, quaerat iure recusandae voluptatibus
            minus ipsum!lorem30 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nulla. Itaque nemo
            laboriosam facere et nulla recusandae, quis quaerat animi earum atque at natus aliquid quia pariatur
            voluptas optio consequatur.</h4>
          <a href='./' style={{ color: "rgb(0, 191, 255)", fontSize: "30px;" }}>View Details</a>
        </div>
        <div class="col-4 mt-5">
          <img src={img} style={{ borderRadius: "15px;", width: "600px", height: "600px" }} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
