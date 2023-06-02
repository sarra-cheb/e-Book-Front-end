import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';

const ResetPassword = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  return (
    <div className='d-flex w-50 mx-auto flex-column align-items-center mt-4'>
      <Formik
        initialValues={{ password: '', passwordconf: '' }}
        validate={values => {
          const errors = {};
          if (!values.password) {
            errors.password = 'Required';
          }
          if (values.password && values.password.length < 8) {
            errors.password = "Password length must be atleast 8 characters";
          }
          if (values.password && values.password.length > 15) {
            errors.password = "Password length must not exceed 15 characters";
          }
          if (!values.passwordconf) {
            errors.passwordconf = 'Required';
          } else if (values.password !== values.passwordconf) {
            errors.passwordconf = 'Passwords did not match'
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            console.log(values);
            const response = await axios.post('http://localhost:4000/api/resetPassword/' + token, values)
            toast.success(response.data.message)
            navigate('/login')
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
              <h1 className='text-info'>It's time to reset your Password!</h1>
              <span className="subtitle">Please enter a valid passsword.</span>
              <div className="form-container">
                <input
                  type="Password"
                  className={`input ${errors.password && touched.password && 'border border-danger'} `}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password} />
                {errors.password && touched.password && <span className='text-danger px-4 py-2'>{errors.password}</span>}
                <input
                  type="Password"
                  className={`input ${errors.passwordconf && touched.passwordconf && 'border border-danger'} `}
                  name="passwordconf"
                  placeholder="Password confirmation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordconf} />
                {errors.passwordconf && touched.passwordconf && <span className='text-danger px-4 py-2'>{errors.passwordconf}</span>}

              </div>

              <button type='submit'>Reset password</button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default ResetPassword
