import React, { useEffect, useState } from 'react'
import FileDownload from 'js-file-download'

import { Link } from 'react-router-dom'
import BookServices from '../../../Services/BookService'
import { toast } from 'react-toastify'
import { CSVLink } from 'react-csv'
import exportFromJSON from 'export-from-json'
const Books = () => {
  const [books, setBooks] = useState([])
  const fetchData = async () => {
    const response = await BookServices.getAllBooks()
    setBooks(response.data.Books)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const headers = [
    { label: "Id", key: "_id" },
    { label: "Title", key: "title" },
    { label: "Autor", key: "autor" },
    { label: "Description", key: "description" },
    { label: "Category", key: "category" },
    { label: "Contenue", key: "contenueUrl" },

  ]
  const handleDelete = async (id) => {
    try {
      const response = await BookServices.deleteBook(id);
      toast.success(response.data.message)
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  const handleDownload = async (id) => {
    try {
      const response = await BookServices.downloadBook(id);
      FileDownload(response.data, 'file.pdf');
      toast.success('Successful downloading');
    } catch (error) {
      console.log(error);
      toast.error('Error downloading book');
    }
  };
  // const handleExport = async () => {

  //   const fileName = 'downloadDataBook'
  //   const exportType = exportFromJSON.types.csv
  //   exportFromJSON({ books, fileName, exportType })
  // }

  return (
    <div className='container-fluid mt-5'>
      <h3 className='text-center text-primary'>List of Books</h3>
      <div className='d-flex justify-content-end my-3'>
        <Link to='/addBook' className='btn btn-secondary me-3' >Add new Book <i className="bi bi-plus-square-dotted"></i></Link>
        <CSVLink data={books} className='btn btn-success' filename='registerBookData' headers={headers}> Export Books Data</CSVLink>
        {/* <button className='btn btn-success' on onClick={() => handleExport()}>Export Books Data</button> */}
      </div>
      <table className="table table-striped">
        <thead className='bg-primary'>
          <tr>
            <th scope="col">Titre:</th>
            <th scope="col">Auteur:</th>
            <th scope="col">Categorie:</th>
            <th scope="col">Description:</th>
            <th scope="col">Download:</th>
            <th scope="col"> Actions:</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? books.map((element, index) => {
            return (
              < tr key={index} >
                <td>{element.title}</td>
                <td>{element.autor}</td>
                <td>
                  {element.category.map((e) => {
                    return (
                      <ul> <li>{e}
                      </li></ul>
                    )

                  })}
                </td>
                <td>{element.description}</td>
                <td>
                  <button type="button" onClick={() => handleDownload(element._id)} className="btn btn-primary"><span><i className="bi bi-download"></i></span>
                  </button>
                </td>
                <td className='d-block'>
                  <button type="button" onClick={() => handleDelete(element._id)} className="btn btn-danger me-2 " title="delete book"><span><i className="bi bi-trash3"></i></span></button>
                  <Link to={`/editBook/${element._id}`} className="btn btn-primary me-2" title='edit book'><span><i className="bi bi-pencil-square "></i></span>
                  </Link>
                  <Link to={element.contenueUrl} className="btn btn-danger me-2 " title="read book "><span><i className="bi bi-book"></i></span></Link>

                  <Link to={`/detailsBook/${element._id}`} className="btn btn-primary" title='details'><span><i className="bi bi-eye"></i></span>
                  </Link>
                </td>
              </tr>
            )

          }

          ) : (
            <tr>
              <td colSpan="5">No books found.</td>
            </tr>
          )}
        </tbody>
      </table>

    </div >
  )
}

export default Books