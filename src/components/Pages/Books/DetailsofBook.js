import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import BookServices from '../../../Services/BookService';

const DetailsBook = () => {
  const params = useParams();
  const [Books, setBook] = useState([]);

  useEffect(() => {
    const getBook = (id) => {
      BookServices.getBookById(id)
        .then((response) => {
          setBook(response.data.Books);
          console.log(Books)
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getBook(params.id);
  }, [params.id]);

  return (
    <div className="container d-flex justify-content-center mt-5">
      {Books && (
        <div className="card" style={{ width: '24rem' }}>

          <div className="card-body">
            <h5 className="card-title">Title of Book:</h5>
            <p className="card-text">{Books.title}</p>
            <div>
              <h5 className="card-title">Name of Autor:</h5>
              <p className="card-text">{Books.autor}</p>
            </div>
            <div>
              <h5 className="card-title">Description:</h5>
              <p className="card-text">{Books.description}</p>
            </div>
            <div className=''>
              <h5> Categorys: </h5>
              {Books.category && (
                <ul>
                  {Books.category.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <Link to="/Books" className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBook;
