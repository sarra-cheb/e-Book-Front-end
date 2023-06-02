
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import categoryServices from '../../../Services/CategoryService'
import { toast } from 'react-toastify'


const EditCategory = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [categories, setCategory] = useState([])
  useEffect(() => {
    const getcategory = async (id) => {
      await categoryServices.getCategoryById(id).then((response) => {
        setCategory(response.data.Categorys)
      }).catch((error) => {
        console.log(error);
      })
    }
    getcategory(params.id)

  }, [params.id])

  return (
    <div className='container mt-5'>

      <Formik
        initialValues={{
          name: categories.name || '',
          listofbooks: categories.listofbooks || []
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await categoryServices.editCategory(params.id, values)
            toast.success(response.data.message)
            navigate('/categories')
          } catch (error) {
            toast.error(error.response.data.message)
          }

        }}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className='row d-flex justify-content-center'>
            <h3>You can change only the name of Category</h3>
            <Form className='col-6' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name of Category</label>
                <input type="text" className="form-control" id="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                <p className='text-danger'>{errors.name && touched.name && errors.name}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="listofbooks" className="form-label">List of Books</label>
                <select
                  className="form-select from-select-sm"
                  id='listofbooks'
                  aria-label="Default select example"
                  value={values.listofbooks.map((book) => book._id)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option >afficher la liste</option>
                  {values.listofbooks.map((book) => (

                    <option key={book._id} value={book._id} disabled>{book.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">Update</button>
            </Form>
          </div>
        )
        }
      </Formik >
      <Link to='/categories' className='btn btn-warning' >Back</Link>
    </div >
  )
}
export default EditCategory
