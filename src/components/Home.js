import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className='container '>
      <div className='text-center pt-5'><h2 className=' pt-5'>welcome to our libraries  <h5>you can find your book desired here , enjoy....</h5></h2>
        <br></br>
      </div>
      <div className='row my-5'>
        <div className='col'>
          <div className="card w-100 text-center">
            <div classNames="card-header">
              <h3 className='text-secondary'>List of books available on our site </h3>
              <Link to='/books' className='btn btn-primary m-3' >Discover our books</Link>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className="card w-100 text-center">
            <div classNames="card-header">
              <h3 className='text-secondary'>Categorys of books available on our site </h3>
              <Link to='/categories' className='btn btn-primary m-3' >Discover our categorys</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
