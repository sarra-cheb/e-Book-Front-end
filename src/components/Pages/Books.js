import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import BookServices from '../../Services/BookService'
const Books = () => {
  const [books, setBooks] = useState([])
  console.log(books)
  useEffect(() => {
    const fetchData = () => {
      BookServices.getAllBooks().then((response) => {
        console.log(response.data.Books)
        setBooks(response.data.Books)

      }).catch((error) => {
        console.log(error);
      })
    }
    fetchData()
  }, [])

  const handledelete = async (id) => {
    try {
      const response = await BookServices.deleteBook();
      alert(response.data.message)
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    } catch (error) {
      alert(error.response.data.message)
    }
  };
  return (
    <div className='container-fluid mt-5'>
      <h3 className='text-center text-primary'>List of Books</h3>
      <table className="table table-dark bg-dark ">
        <thead>
          <tr>
            <th scope="col">Titre:</th>
            <th scope="col">Auteur:</th>
            <th scope="col">Description:</th>
            <th scope="col">Contenue:</th>
            <th scope="col"> Actions:</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((element, index) => {
              return (
                <tr key={element._id}>
                  <td>{element.title}</td>
                  <td>{element.autor}</td>
                  <td>{element.description}</td>
                  <td>{element.contenue}</td>
                  <td>
                    <button type="button" onClick={() => handledelete(element._id)} className="btn btn-danger ">Delete</button>
                    <Link to={`/edit/` + element._id} className="btn btn-success">Update
                    </Link>
                  </td>
                </tr>
              )

            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Books