import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
const role = localStorage.getItem('role')
const token = localStorage.getItem('token')
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login')
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg  bg-secondary  sticky-top">
      <div className="container">
        <Link className="navbar-brand me-5" to="/">Library of Books</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {role === 'admin' ? (<>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/admin'>Dashboard</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/categories">Categories</Link>
              </li>
            </>
            ) :
              (<> <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutUs">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/books">Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/categories">Categories</Link>
                </li> </>)}

          </ul></div>
        <div className='d-flex justify-content-end'>
          <ul className='pt-3'>
            {token ? (
              <> <div className="vr me-3"></div>
                <Link to='/login' onClick={logout} className="text-reset "><i className="bi bi-box-arrow-in-right me-2" style={{ color: "#FC2947" }} ></i>Sign-Out</Link> </>
            ) : (
              <> <div className="vr me-3"></div>
                <Link to='/register' className="text-reset me-3"><i className="bi bi-person me-2 " style={{ color: "#FF6000" }}></i>Sign-Up</Link>
                <div className="vr me-3"></div>
                <Link to='/login' className="text-reset me-3"><i className="bi bi-box-arrow-left me-2 " style={{ color: "#FFA559" }}></i>Sign-In</Link> </>
            )}


          </ul>
        </div>
      </div>
    </nav >
  )
}
export default Navbar