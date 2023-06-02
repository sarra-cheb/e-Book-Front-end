
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import BookServices from '../../../Services/BookService'
import categoryServices from '../../../Services/CategoryService'
import { toast } from 'react-toastify'


const AddBook = () => {
  const navigate = useNavigate()

  const [contenue, setContenue] = useState();
  const [categories, setCategory] = useState([])
  useEffect(() => {
    const getcategory = async () => {
      await categoryServices.getAllCategory().then((response) => {
        console.log(response.data.Categorys)
        setCategory(response.data.Categorys)
      }).catch((error) => {
        toast.error(error.response.data.message)
      })
    }
    getcategory()
  }, [])
  const fileSelect = (event) => {
    const file = event.target.files[0];
    setContenue(file);
  }
  return (
    <div className='container mt-5'>
      <Formik
        initialValues={{
          title: '',
          autor: '',
          category: [],
          description: '',
          contenue: []

        }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!values.description) {
            errors.description = 'Required';
          }
          if (!values.autor) {
            errors.autor = 'Required';
          }
          if (values.category.length === 0) {
            errors.category = 'Required'
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            let newData = new FormData()
            values.category.forEach((c) => {
              newData.append('category', c)
            });

            Object.keys(values).forEach(fieldname => {
              if (fieldname !== 'category' && fieldname !== 'contenue') {

                newData.append(fieldname, values[fieldname]);
              }
            });
            newData.append('contenue', contenue);
            console.log(...newData);
            const res = await BookServices.addBook(newData);
            toast.success(res.data.message)
            navigate('/books');
          } catch (error) {
            toast.error(error.res.data.message)
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
                <label htmlFor="title" className="form-label">Title of book:</label>
                <input type="text" className="form-control" id="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                <p className='text-danger'>{errors.title && touched.title && errors.title}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="autor" className="form-label">Autor:</label>
                <input type="text" className="form-control" id="autor" onChange={handleChange} onBlur={handleBlur} value={values.autor} />
                <p className='text-danger'>{errors.autor && touched.autor && errors.autor}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" onChange={handleChange} onBlur={handleBlur} value={values.description} />
                <p className='text-danger'>{errors.description && touched.description && errors.description}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category:</label>
                <select className="form-select" name='category' aria-label="Default select example" value={values.category} onBlur={handleBlur} onChange={handleChange} multiple>
                  {categories.map((category) => {
                    return (
                      <option
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </option>
                    );
                  })}
                </select>
                <small className='text-secondary'>selected values are highlighted in gray</small><br />
                <small className='text-primary'>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</small>
                <hr />
                <small>for add a category or you don't find any category please add a new category here </small>
                <Link to='/addCategory' className='btn btn-sm btn-warning' >Add New Category</Link>
                <p className='text-danger'>{errors.category && touched.category && errors.category}</p>
              </div>
              <div>
                <label htmlFor="contenue" className="form-label">File Book:</label>
                <div className="form-control-wrap">
                  <input
                    type="file"
                    className="form-control"
                    name="contenue"
                    id="contenue"
                    onChange={fileSelect}

                  />
                </div>
              </div>
              <div className='pt-5 text-end'>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Add Book</button>
              </div>

            </Form>
          </div>
        )
        }
      </Formik >
    </div >
  )
}
export default AddBook
