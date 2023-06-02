import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

const ForgotPassword = () => {
  const navigate = useNavigate
  return (
    <div className='d-flex w-50 mx-auto flex-column align-items-center mt-4'>
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post('http://localhost:4000/api/forgotPassword', values)
            toast.success(response.data.message)
            navigate('/')
          } catch (error) {
            toast.error(error.response.data.message)
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
        }) => (
          <div className="form-box">
            <form onSubmit={handleSubmit} className='form'>
              <h1 className='text-info'>Forget your Password?</h1>
              <span className="subtitle">Please enter your Email to send you a reset link.</span>
              <div className="form-container">
                <input
                  type="Email"
                  className={`input ${errors.email && touched.email && 'border border-danger'} `}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} />
                {errors.email && touched.email && <span className='text-danger px-4 py-2'>{errors.email}</span>}
              </div>
              <button type='submit'>Send Link</button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default ForgotPassword
