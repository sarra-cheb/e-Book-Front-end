import React from 'react'
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {

  const navigate = useNavigate()

  return (

    < div className='container mt-5' >
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          role: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!values.role) {
            errors.role = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post('http://localhost:4000/api/register', values)
            navigate('/login')
            alert(response.data.message)
          }
          catch (error) {
            console.log('verify')
          }
        }}
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
                <label htmlFor="name" className="form-label">Nom</label>
                <input type="text" className="form-control" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Jhon' />
                <p className='text-danger'>{errors.name && touched.name && errors.name}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder='Jhondoe@gmail.com' value={values.email} onBlur={handleBlur} onChange={handleChange} />
                <p className='text-danger'>{errors.email && touched.email && errors.email}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder='******' value={values.password} onBlur={handleBlur} onChange={handleChange} />
                <p className='text-danger'>{errors.password && touched.password && errors.password}</p>
              </div>
              <div className="mb-3">
                <select className="form-select" name='role' aria-label="Default select example" value={values.role} onBlur={handleBlur} onChange={handleChange}>
                  <option value="" selected="true">Role</option>
                  <option value="admin">Admin</option>
                  <option value="client">Client</option>
                </select>
                <p className='text-danger'>{errors.role && touched.role && errors.role}</p>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Register</button>
            </Form>
          </div>
        )}
      </Formik>
    </div >
  )
}
export default Register