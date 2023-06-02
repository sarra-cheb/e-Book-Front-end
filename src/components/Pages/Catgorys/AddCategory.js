
import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import categoryServices from '../../../Services/CategoryService'
import { toast } from 'react-toastify'


const AddCategory = () => {
  const navigate = useNavigate()

  return (
    <div className='container mt-5'>
      <Formik
        initialValues={{
          name: '',
          listofbooks: [],

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
            const response = await categoryServices.addCategory(values)
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
            <Form className='col-6' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name of Category</label>
                <input type="text" className="form-control" id="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                <p className='text-danger'>{errors.name && touched.name && errors.name}</p>
              </div>
              <div className="mb-3">
                <select className="form-select from-select-sm" id='listofbook' multiple aria-label="Default select example" value={values.listofbooks} disabled  >
                  <option value="" selected="true" >List Of Books</option>
                </select>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">Add</button>
            </Form>
          </div>
        )
        }
      </Formik >
      <Link to='/categories' className='btn btn-warning' >Back</Link>
    </div >
  )
}
export default AddCategory
