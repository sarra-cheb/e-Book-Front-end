import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import categoryServices from '../../Services/CategoryService'
const Category = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const fetchData = () => {
      categoryServices.getAllCategory().then((response) => {
        console.log(response)
        setCategory(response.data)
      }).catch((error) => {
        console.log(error);
      })
    }
    fetchData()
  }, [])
  const getCategory = async () => {
    const response = await axios.get('localhost:4000/api/category')
    setCategory(response.data)
  }
  useEffect(() => {
    getCategory()
  }, [])
  const handledelete = async (id) => {
    console.log(id)
    await axios.delete(`localhost:4000/api/category/${id}`)
    getCategory()
  }
  console.log(category)
  return (
    <div className='container-fluid mt-5'>
      <h3 className='text-center text-success'>List Category</h3>
      <table className="table table-dark bg-dark ">
        <thead>
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
                <tr key={element._id}>
                  <td >{element.nom}</td>
                  <td >{element.description}</td>
                  <td>
                    {element.Books.map((e) => {
                      return (
                        <ul> <li>{e}
                        </li></ul>
                      )

                    })}


                  </td>
                  <td ><button type="button" onClick={() => handledelete(element.id)} className="btn btn-danger ">Delete</button>
                    <Link to={`/editcategory/${element.id}`} className="btn btn-success">Update

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