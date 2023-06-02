import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import categoryServices from '../../../Services/CategoryService'
import { toast } from 'react-toastify';
const Category = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const getcategory = () => {
      categoryServices.getAllCategory().then((response) => {
        setCategory(response.data.Categorys)

      }).catch((error) => {
        console.log(error);
      })
    }
    getcategory()
  }, [])

  const handledelete = async (id) => {
    try {
      const response = await categoryServices.deleteCategory(id);
      toast.success(response.data.message)
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className='container-fluid mt-5'>
      <h3 className='text-center text-primary'>List Category</h3>
      <div className='d-flex justify-content-end my-3'>
        <Link to='/addCategory' className='btn btn-secondary' >Add new Category <i className="bi bi-plus-square-dotted"></i></Link>
      </div>
      <table className="table table-striped">
        <thead className='bg-primary'>
          <tr>
            <th scope="col" style={{ width: '20%' }}>Nom Categorie:</th>
            <th scope="col" style={{ width: '30%' }}>Listes des livres:</th>
            <th scope="col" style={{ width: '20%' }}>Actions:</th>
          </tr>
        </thead>
        <tbody>
          {
            category.map((element, index) => {
              return (
                <tr key={index}>
                  <td >{element.name}</td>
                  <td>
                    {element.listofbooks.map((e) => {
                      return (
                        <ul> <li>{e.title}
                        </li></ul>
                      )

                    })}


                  </td>
                  <td >
                    <Link to={`/editCategory/${element._id}`} className="btn btn-primary me-2"><span><i className="bi bi-pencil-square"></i></span>
                    </Link>
                    <button type="button" onClick={() => handledelete(element._id)} className="btn btn-danger me-2 "><span><i className="bi bi-trash3"></i></span></button>
                    <Link to={`/detailsCategory/${element._id}`} className="btn btn-primary"><span><i className="bi bi-primary bi-eye"></i></span>
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
export default Category