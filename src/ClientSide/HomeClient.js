import React from 'react'
import Carousel from './Components/Carousel'
import { Link } from 'react-router-dom'
import Register from '../components/AuthComponent/Register'
import firstimage from './images/card1.png'

const HomeClient = () => {
  return (
    <div className='container '>
      <div className='text-center pt-5'><h2 className='text-primary pt-5'>welcome to our libraries  <h5 className='text-secondary'>you can find your book desired here , enjoy....</h5></h2>
        <br></br>
        <Carousel />
        <div className='card text-center mt-5'>
          <img src={firstimage} className="card-img-top" alt="..." />
          <div className='card-body'>
            <h5>Library of Book vous propose une sélection de plus de 1000 books gratuits sur son site, à télécharger sur votre liseuse, votre tablette, votre ordinateur ou votre smartphone ! Romance, classique, policier, littérature… Choisissez votre prochaine lecture parmi de nombreux genres grâce à notre site. Cette sélection à 0 € vous permet de découvrir (ou de redécouvrir) de nouveaux auteurs sans avoir à dépenser d'argent. N'attendez plus !
            </h5>
          </div>
        </div>

        <Link to='/books' className='btn btn-primary mt-3' >Decouvrir notre selection</Link>

        <h4 className='text-primary pt-5'>If you’ve never used our website, you can create a account </h4>
        <small>To create a new account, the email you use to sign up must not already be in use</small></div>

      <div>
        <Register />
      </div>
      <div className='d-flex justify-content-center pt-5'>
        <h5 className='pe-3'>if you are already have an account please login here  </h5>
        <Link to='/login' className='btn btn-warning' >LogIn</Link>
      </div>
    </div>
  )
}

export default HomeClient
