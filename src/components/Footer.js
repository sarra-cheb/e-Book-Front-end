import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container-fluid mt-5' style={{ backgroundColor: "#567189" }}>
      <div className="row p-5 d-flex justify-content-center" >
        <div className='col-6'>
          <Link className="navbar-brand px-5" href="/">Library of Book</Link>
          <p>We help you find your Book !!!!!</p>
          <div className="row">
            <div className="col-2 link-secondary">
              <Link href="" className=" ">
                <i className="bi bi-facebook"></i>
              </Link>
            </div>
            <div className="col-2 link-secondary">
              <Link href="" className=" ">
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
            <div className="col-2 link-secondary">
              <Link href="" className=" ">
                <i className="bi bi-twitter "></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='row d-flex justify-content-around'>
            <div className="col-2 ">
              <h6 className="text-uppercase fw-bold mb-4">
                Information
              </h6>
              <p>
                <Link href="#!" className="text-reset">About</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Books</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">BLog</Link>
              </p>
            </div>

            <div className="col-2 ">

              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p>
                <Link href="#!" className="text-reset">Getting started</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Pricing</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Ressources</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="text-start p-4">
          <p> 2023 all Right Reserved   </p>

        </div>
      </div>
    </div>
  )
}
export default Footer