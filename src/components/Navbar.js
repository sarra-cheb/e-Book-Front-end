import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{ backgroundColor: "#CFB997" }}>
      <div className="container">
        <Link className="navbar-brand me-5" to="#">Library of Books</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/categories">Categories</Link>
            </li>
          </ul></div>
        <div className='d-flex justify-content-center'>
          <ul>
            <Link to='/uploadfile' className="text-reset"><i className="bi bi-file-earmark-arrow-down-fill me-5">Download</i></Link>
            <div className="vr me-5"></div>
            <Link to='/login' className="text-reset"><i className="bi bi-person me-5">Login</i></Link>
            <div className="vr me-5"></div>
            <Link to='/register' className="text-reset"><i className="bi bi-box-arrow-in-right">Sign In</i></Link>
          </ul>
        </div>
      </div>
    </nav >
  )
}
export default Navbar