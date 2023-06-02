import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import categoryServices from '../../../Services/CategoryService';

const DetailsCategory = () => {

  const params = useParams();
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const getcategory = (id) => {
      categoryServices.getCategoryById(id)
        .then((response) => {
          setCategory(response.data.Categorys);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getcategory(params.id);
  }, [params.id]);

  return (
    <div className="container d-flex justify-content-center mt-5">
      {categories && (
        <div className="card" style={{ width: '24rem' }}>

          <div className="card-body">
            <h5 className="card-title">Name of category:</h5>
            <p className="card-text">{categories.name}</p>
            <div className=''>
              <h5> List of Books: </h5>
              <ul>
                {categories.listofbooks &&
                  categories.listofbooks.map((book) => (
                    <li key={book._id}>{book.title}</li>
                  ))}
              </ul>
            </div>
            <div>
              <Link to="/categories" className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsCategory;
