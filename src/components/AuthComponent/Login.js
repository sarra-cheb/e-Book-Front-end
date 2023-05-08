import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='container mt-5'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post('http://localhost:4000/api/login', values)
            localStorage.setItem("token", response.data.token);
            alert(response.data.message)
            navigate('/')
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
          <Form className='w-25 mx-auto mt-5' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder='saisissez votre email' />
              <p className='text-danger'>{errors.email && touched.email && errors.email}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" value={values.password} onBlur={handleBlur} onChange={handleChange} className="form-control" name="password" placeholder='saisissez votre mot de passe' />
              <p className='text-danger'>{errors.password && touched.password && errors.password}</p>
            </div>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default Login
